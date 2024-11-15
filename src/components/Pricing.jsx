import React, { useState, useEffect } from "react";
import {
  extractPdfText,
  sendToGemini,
  parseAIResponse,
  mergeData,
  exportToExcel,
} from "../services/MultiFileProcessorLogic";

const MultiFileProcessor = () => {
  const [selectedFiles, setSelectedFiles] = useState([]);
  const [aiResponse, setAiResponse] = useState({});
  const [loading, setLoading] = useState(false);
  const [progress, setProgress] = useState(0);

  const typingText =
    "📄 Tải lên các file chứng từ, 🖥️ hệ thống sẽ phân tích và tạo bản khai Manifest. 📝";
  const [typedText, setTypedText] = useState("");
  const [typingIndex, setTypingIndex] = useState(0);

  useEffect(() => {
    if (typingIndex < typingText.length) {
      const timeout = setTimeout(() => {
        setTypedText((prev) => prev + typingText[typingIndex]);
        setTypingIndex((prev) => prev + 1);
      }, 50);
      return () => clearTimeout(timeout);
    }
  }, [typingIndex]);

  const handleFileChange = (e) => {
    const files = Array.from(e.target.files);
    setSelectedFiles(files);
  };

  const handleFileDelete = () => {
    setSelectedFiles([]);
    setAiResponse({});
  };

  const handleFileUpload = async () => {
    if (selectedFiles.length === 0) {
      alert("Vui lòng chọn ít nhất một file chứng từ!");
      return;
    }

    setLoading(true);
    setProgress(0);
    const results = [];

    try {
      for (const file of selectedFiles) {
        const fileText = await extractPdfText(file, (percent) =>
          setProgress((prev) => prev + percent / selectedFiles.length)
        );
        results.push(fileText);
      }

      const combinedText = results.join("\n\n");
      const rawAiResponse = await sendToGemini(combinedText);
      const parsedData = parseAIResponse(rawAiResponse);
      const mergedData = mergeData(aiResponse, parsedData);
      setAiResponse(mergedData);
    } catch (error) {
      console.error("Error during processing:", error);
      alert("Đã xảy ra lỗi. Vui lòng thử lại.");
    } finally {
      setLoading(false);
      setProgress(0);
    }
  };

  const handleExportToExcel = async () => {
    try {
      await exportToExcel(aiResponse);
      alert("Xuất file Excel Manifest thành công!");
    } catch (error) {
      console.error("Error exporting to Excel:", error);
      alert("Không thể xuất file Excel. Vui lòng thử lại.");
    }
  };

  return (
    <div
      id="process"
      className="flex flex-col items-center justify-center min-h-screen bg-black p-6"
    >
      <div className="bg-white rounded-2xl shadow-lg p-8 w-full max-w-4xl">
        {/* Title */}
        <h1 className="text-3xl font-bold text-gray-800 mb-4 text-center">
          Hệ Thống Tự Động Hóa Khai Báo Manifest
        </h1>
        <p
          className="text-gray-600 mb-6 text-center"
          style={{ color: "linear-gradient(to right, #4facfe, #00f2fe)" }}
        >
          {typedText}
        </p>

        {/* Upload Section */}
        <div className="mb-6">
          <label className="block text-lg font-medium text-gray-600 mb-2">
            Chọn File Chứng Từ:
          </label>
          <input
            type="file"
            multiple
            accept=".pdf,.png,.jpg"
            onChange={handleFileChange}
            className="block w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 mb-4"
          />
          {/* Display uploaded files */}
          {selectedFiles.length > 0 && (
            <div className="flex flex-col gap-2">
              <div className="flex justify-between items-center bg-gray-100 px-4 py-2 rounded-lg shadow-md">
                <span className="text-gray-700 truncate">
                  📂 {selectedFiles.length} file(s) đã được chọn
                </span>
                <button
                  onClick={handleFileDelete}
                  className="text-red-500 font-bold"
                >
                  Xóa tất cả
                </button>
              </div>
            </div>
          )}
        </div>

        {/* Process Button */}
        <button
          onClick={handleFileUpload}
          disabled={loading || selectedFiles.length === 0}
          className={`w-full py-2 px-4 rounded-lg text-white font-bold ${
            loading
              ? "bg-gray-400 cursor-not-allowed"
              : "bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700"
          } flex items-center justify-center gap-2`}
        >
          {loading && (
            <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
          )}
          {loading ? "Đang Xử Lý..." : "Xử Lý Chứng Từ"}
        </button>

        {/* Progress Bar */}
        {loading && (
          <div className="w-full bg-gray-200 rounded-full h-4 mt-4">
            <div
              className="bg-gradient-to-r from-indigo-600 to-purple-600 h-4 rounded-full"
              style={{ width: `${progress}%` }}
            ></div>
          </div>
        )}

        {/* Instructions Section */}
        <div className="bg-indigo-50 border-l-4 border-indigo-400 p-4 my-6 rounded-lg shadow-md">
          <h3 className="text-lg font-bold text-indigo-700 mb-2">
            🌟 Hướng Dẫn Sử Dụng:
          </h3>
          <ul className="list-disc list-inside text-gray-600">
            <li>📂 Chọn file chứng từ cần xử lý (PDF).</li>
            <li>⏳ Nhấn "Xử Lý Chứng Từ" và đợi hệ thống phân tích.</li>
            <li>📤 Xuất dữ liệu ra file Excel nếu cần lưu trữ.</li>
          </ul>
        </div>

        {/* Data Display Section */}
        <div className="mt-10">
          <h2 className="text-xl font-semibold text-gray-800 mb-4">
            Dữ Liệu Trích Xuất
          </h2>
          {Object.keys(aiResponse).length > 0 ? (
            <div className="space-y-4">
              {Object.entries(aiResponse).map(([key, value]) => (
                <div
                  key={key}
                  className="bg-gray-100 border-l-4 border-indigo-400 p-4 rounded-lg shadow-md"
                >
                  <h3 className="text-indigo-700 font-bold text-sm mb-2">
                    {key}
                  </h3>
                  <p className="text-gray-600 text-sm">{value}</p>
                </div>
              ))}
            </div>
          ) : (
            <p className="text-center text-gray-500">
              Không có dữ liệu để hiển thị.
            </p>
          )}
        </div>

        {/* Export Button */}
        {Object.keys(aiResponse).length > 0 && (
          <button
            onClick={handleExportToExcel}
            className="mt-6 py-2 px-4 bg-gradient-to-r from-blue-500 to-teal-500 text-white font-bold rounded-lg hover:from-blue-600 hover:to-teal-600 w-full"
          >
            Xuất File Excel
          </button>
        )}
      </div>
    </div>
  );
};

export default MultiFileProcessor;
