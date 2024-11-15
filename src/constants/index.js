import {
  benefitIcon1,
  benefitIcon2,
  benefitIcon3,
  benefitIcon4,
  benefitImage2,
  chromecast,
  disc02,
  discord,
  discordBlack,
  facebook,
  figma,
  file02,
  framer,
  homeSmile,
  instagram,
  notification2,
  notification3,
  notification4,
  notion,
  photoshop,
  plusSquare,
  protopie,
  raindrop,
  recording01,
  recording03,
  roadmap1,
  roadmap2,
  roadmap3,
  roadmap4,
  searchMd,
  slack,
  sliders04,
  telegram,
  twitter,
  yourlogo,
} from "../assets";

export const navigation = [
  {
    id: "0",
    title: "Giới Thiệu",
    url: "#features",
  },
  {
    id: "1",
    title: "Tính Năng",
    url: "#process",
  },
  {
    id: "2",
    title: "Công Nghệ",
    url: "#it",
  },

  {
    id: "3",
    title: "Lộ Trình",
    url: "#roadmap",
  },

  {
    id: "4",
    title: "Câu Hỏi Thường Gặp",
    url: "#signup",
    onlyMobile: true,
  },
];

export const heroIcons = [homeSmile, file02, searchMd, plusSquare];

export const notificationImages = [notification4, notification3, notification2];

export const companyLogos = [yourlogo, yourlogo, yourlogo, yourlogo, yourlogo];

export const brainwaveServices = [
  "Photo generating",
  "Photo enhance",
  "Xử Lý Chính Xác Và Nhanh Chóng",
];

export const brainwaveServicesIcons = [
  recording03,
  recording01,
  disc02,
  chromecast,
  sliders04,
];

export const roadmap = [
  {
    id: "0",
    title: "Tải lên và Chuyển đổi Dữ liệu",
    text: "Nhân viên tải bộ chứng từ (ví dụ: House Bill of Lading, Email phân quyền, Arrival Notice) lên hệ thống D-LOG dưới định dạng .PDF. Hệ thống sử dụng PDF.js để phân tách và hiển thị các trang PDF, đồng thời áp dụng Google Vision API để nhận diện và chuyển đổi dữ liệu từ định dạng hình ảnh sang văn bản thô một cách chính xác nhất.",
    date: "Bước 1",
    status: "upload",
    imageUrl: roadmap1,
    colorful: true,
  },
  {
    id: "1",
    title: "Nhận diện và Khoanh vùng Dữ liệu",
    text: "D-LOG áp dụng Google Gemini API và các logic xử lý để tự động nhận diện và đánh dấu các trường dữ liệu quan trọng như số vận đơn, cảng xếp/dỡ, trọng lượng, hoặc số container. Regex được sử dụng để lọc và định dạng thông tin từ văn bản thô, đảm bảo tính chính xác.",
    date: "Bước 2",
    status: "progress",
    imageUrl: roadmap2,
  },
  {
    id: "2",
    title: "Gán Dữ liệu vào Trường Thông tin Manifest",
    text: "Hệ thống sử dụng logic xử lý dữ liệu để tự động gán các thông tin đã chọn lọc vào từng trường thông tin phù hợp trong biểu mẫu Manifest đã tích hợp. Các thao tác này đảm bảo dữ liệu được đặt chính xác vào đúng vị trí theo yêu cầu nghiệp vụ.",
    date: "Bước 3",
    status: "process",
    imageUrl: roadmap3,
  },
  {
    id: "3",
    title: "Xuất Báo cáo Manifest Hoàn Chỉnh",
    text: "Cuối cùng, D-LOG tạo file Excel với định dạng chuyên nghiệp bằng ExcelJS. File chứa các trường thông tin chính xác và được định dạng theo chuẩn của biểu mẫu Manifest. Người dùng có thể tải xuống và sử dụng ngay lập tức trong nghiệp vụ.",
    date: "Bước 4",
    status: "done",
    imageUrl: roadmap4,
  },
];

export const collabText = "";
export const collabContent = [
  {
    id: "0",
    title: "Giao diện người dùng hiện đại",
    text: "Sử dụng React.js, Ant Design và Tailwind CSS để xây dựng giao diện động, thân thiện và tối ưu hiệu suất.",
  },
  {
    id: "1",
    title: "Xử lý dữ liệu PDF",
    text: "Áp dụng PDF.js và Google Vision API để nhận diện và trích xuất dữ liệu từ tài liệu PDF một cách hiệu quả.",
  },
  {
    id: "2",
    title: "Phân tích và trích xuất dữ liệu",
    text: "Google Gemini API và Regex giúp phân tích, lọc và định dạng dữ liệu một cách chính xác.",
  },
  {
    id: "3",
    title: "Tạo báo cáo chuyên nghiệp",
    text: "ExcelJS hỗ trợ tạo file Excel với định dạng chuẩn, tích hợp đầy đủ các trường thông tin chính xác.",
  },
];

export const collabApps = [
  {
    id: "0",
    title: "Figma",
    icon: figma,
    width: 26,
    height: 36,
  },
  {
    id: "1",
    title: "Notion",
    icon: notion,
    width: 34,
    height: 36,
  },
  {
    id: "2",
    title: "Discord",
    icon: discord,
    width: 36,
    height: 28,
  },
  {
    id: "3",
    title: "Slack",
    icon: slack,
    width: 34,
    height: 35,
  },
  {
    id: "4",
    title: "Photoshop",
    icon: photoshop,
    width: 34,
    height: 34,
  },
  {
    id: "5",
    title: "Protopie",
    icon: protopie,
    width: 34,
    height: 34,
  },
  {
    id: "6",
    title: "Framer",
    icon: framer,
    width: 26,
    height: 34,
  },
  {
    id: "7",
    title: "Raindrop",
    icon: raindrop,
    width: 38,
    height: 32,
  },
];

export const pricing = [
  {
    id: "0",
    title: "Basic",
    description: "AI chatbot, personalized recommendations",
    price: "0",
    features: [
      "An AI chatbot that can understand your queries",
      "Personalized recommendations based on your preferences",
      "Ability to explore the app and its features without any cost",
    ],
  },
  {
    id: "1",
    title: "Premium",
    description: "Advanced AI chatbot, priority support, analytics dashboard",
    price: "9.99",
    features: [
      "An advanced AI chatbot that can understand complex queries",
      "An analytics dashboard to track your conversations",
      "Priority support to solve issues quickly",
    ],
  },
  {
    id: "2",
    title: "Enterprise",
    description: "Custom AI chatbot, advanced analytics, dedicated account",
    price: null,
    features: [
      "An AI chatbot that can understand your queries",
      "Personalized recommendations based on your preferences",
      "Ability to explore the app and its features without any cost",
    ],
  },
];

export const benefits = [
  {
    id: "0",
    title: "Ask anything",
    text: "Lets users quickly find answers to their questions without having to search through multiple sources.",
    backgroundUrl: "./src/assets/benefits/card-1.svg",
    iconUrl: benefitIcon1,
    imageUrl: benefitImage2,
  },
  {
    id: "1",
    title: "Improve everyday",
    text: "The app uses natural language processing to understand user queries and provide accurate and relevant responses.",
    backgroundUrl: "./src/assets/benefits/card-2.svg",
    iconUrl: benefitIcon2,
    imageUrl: benefitImage2,
    light: true,
  },
  {
    id: "2",
    title: "Connect everywhere",
    text: "Connect with the AI chatbot from anywhere, on any device, making it more accessible and convenient.",
    backgroundUrl: "./src/assets/benefits/card-3.svg",
    iconUrl: benefitIcon3,
    imageUrl: benefitImage2,
  },
  {
    id: "3",
    title: "Fast responding",
    text: "Lets users quickly find answers to their questions without having to search through multiple sources.",
    backgroundUrl: "./src/assets/benefits/card-4.svg",
    iconUrl: benefitIcon4,
    imageUrl: benefitImage2,
    light: true,
  },
  {
    id: "4",
    title: "Ask anything",
    text: "Lets users quickly find answers to their questions without having to search through multiple sources.",
    backgroundUrl: "./src/assets/benefits/card-5.svg",
    iconUrl: benefitIcon1,
    imageUrl: benefitImage2,
  },
  {
    id: "5",
    title: "Improve everyday",
    text: "The app uses natural language processing to understand user queries and provide accurate and relevant responses.",
    backgroundUrl: "./src/assets/benefits/card-6.svg",
    iconUrl: benefitIcon2,
    imageUrl: benefitImage2,
  },
];

export const socials = [
  {
    id: "0",
    title: "Discord",
    iconUrl: discordBlack,
    url: "#",
  },
  {
    id: "1",
    title: "Twitter",
    iconUrl: twitter,
    url: "#",
  },
  {
    id: "2",
    title: "Instagram",
    iconUrl: instagram,
    url: "#",
  },
  {
    id: "3",
    title: "Telegram",
    iconUrl: telegram,
    url: "#",
  },
  {
    id: "4",
    title: "Facebook",
    iconUrl: facebook,
    url: "#",
  },
];
