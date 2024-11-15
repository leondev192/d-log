import Section from "./Section";
import Heading from "./Heading";
import { service1, service2, service3, check } from "../assets";
import { brainwaveServices, brainwaveServicesIcons } from "../constants";
import {
  PhotoChatMessage,
  Gradient,
  VideoBar,
  VideoChatMessage,
} from "./design/Services";

import Generating from "./Generating";

const Services = () => {
  return (
    <Section id="features">
      <div className="container">
        {/* Updated Heading Section */}
        <Heading
          title="Hệ Thống AI Tự Động Hóa Khai Báo Manifest"
          text="D-LOG là giải pháp tiên phong, giúp doanh nghiệp tối ưu hóa quy trình khai báo Manifest với tốc độ nhanh chóng, độ chính xác vượt trội và khả năng tự động hóa toàn diện. Chúng tôi mang đến một hệ thống thông minh, hỗ trợ xử lý khối lượng lớn chứng từ, giảm thiểu sai sót và tiết kiệm chi phí vận hành."
        />

        <div className="relative">
          <div className="relative z-1 flex flex-col lg:flex-row items-center h-auto mb-5 p-8 border border-n-1/10 rounded-3xl overflow-hidden lg:p-20 xl:h-auto">
            {/* Left Section: AI Illustration */}
            <div className="absolute top-0 left-0 w-full h-full pointer-events-none md:w-3/5 xl:w-auto">
              <img
                className="w-full h-full object-cover md:object-right"
                width={500}
                alt="Smartest AI"
                height={400}
                src={service1}
              />
            </div>

            {/* Right Section: Content */}
            <div className="relative z-1 w-full lg:w-2/5 max-w-[40rem] ml-auto text-center lg:text-left">
              <h4 className="h4 mb-4">AI Manifest</h4>
              <p className="body-2 mb-6 text-n-3">
                Hệ thống AI hiện đại tự động nhận diện và xử lý dữ liệu từ tệp
                PDF, giúp tối ưu hóa quy trình khai báo Manifest một cách nhanh
                chóng và chính xác.
              </p>

              <ul className="body-2 space-y-4">
                <li className="flex items-start border-t border-n-6 pt-4">
                  <img width={24} height={24} src={check} alt="Check" />
                  <p className="ml-4">
                    Tự động nhận diện và trích xuất thông tin từ tài liệu PDF
                    một cách chính xác.
                  </p>
                </li>
                <li className="flex items-start border-t border-n-6 pt-4">
                  <img width={24} height={24} src={check} alt="Check" />
                  <p className="ml-4">
                    Nâng cao tốc độ xử lý chứng từ, tiết kiệm thời gian và chi
                    phí vận hành.
                  </p>
                </li>
                <li className="flex items-start border-t border-n-6 pt-4">
                  <img width={24} height={24} src={check} alt="Check" />
                  <p className="ml-4">
                    Hỗ trợ xuất dữ liệu Manifest đầy đủ và đúng chuẩn nghiệp vụ.
                  </p>
                </li>
                <li className="flex items-start border-t border-n-6 pt-4">
                  <img width={24} height={24} src={check} alt="Check" />
                  <p className="ml-4">
                    Tích hợp công nghệ AI tiên tiến để giảm thiểu sai sót thủ
                    công.
                  </p>
                </li>
                <li className="flex items-start border-t border-n-6 pt-4">
                  <img width={24} height={24} src={check} alt="Check" />
                  <p className="ml-4">
                    Dễ dàng quản lý và sử dụng thông qua giao diện hiện đại,
                    trực quan.
                  </p>
                </li>
              </ul>
            </div>

            {/* Bottom Section: Generating Component */}
            <Generating className="absolute left-4 right-4 bottom-4 border-n-1/10 border lg:left-1/2 lg:right-auto lg:bottom-8 lg:-translate-x-1/2" />
          </div>

          <div className="relative z-1 grid gap-5 lg:grid-cols-2">
            {/* Team Members Section */}
            <div className="relative min-h-[39rem] border border-n-1/10 rounded-3xl overflow-hidden">
              <div className="absolute inset-0">
                <img
                  src={service2}
                  className="h-full w-full object-cover"
                  width={630}
                  height={750}
                  alt="team"
                />
              </div>

              <div className="absolute inset-0 flex flex-col justify-end p-8 bg-gradient-to-b from-n-8/0 to-n-8/90 lg:p-15">
                <h4 className="h4 mb-4">Đội Ngũ Đồng Hành</h4>

                <ul className="list-disc pl-5 space-y-2 text-n-3">
                  <li>Lê Thị Ý Nhi</li>
                  <li>Đỗ Thành Đạt</li>
                  <li>Võ Thị Hằng Nga</li>
                  <li>Nguyễn Ngọc Minh Thư</li>
                </ul>
              </div>
            </div>

            {/* Challenges Section */}
            <div className="p-4 bg-black rounded-3xl overflow-hidden lg:min-h-[46rem]">
              <div className="py-12 px-4 xl:px-8">
                <h4 className="h4 mb-4">Thách Thức & Cơ Hội</h4>
                <p className="body-2 mb-[2rem] text-n-3">
                  Chúng tôi không chỉ đối mặt với các thách thức trong việc xử
                  lý dữ liệu mà còn nhìn thấy cơ hội để cải tiến và phát triển.
                </p>
                <ul className="list-disc pl-5 space-y-2 text-n-3">
                  <li>Xử lý khối lượng lớn dữ liệu với độ chính xác cao.</li>
                  <li>Đảm bảo tuân thủ quy định và tiêu chuẩn khai báo.</li>
                  <li>
                    Phát triển giao diện trực quan, thân thiện với người dùng.
                  </li>
                  <li>Giảm chi phí vận hành và tăng năng suất.</li>
                </ul>
              </div>

              <div className="relative h-[20rem] bg-n-8 rounded-xl overflow-hidden md:h-[25rem]">
                <img
                  src={service3}
                  className="w-full h-full object-cover"
                  width={520}
                  height={400}
                  alt="Challenges and Opportunities"
                />
              </div>
            </div>
          </div>

          <Gradient />
        </div>
      </div>
    </Section>
  );
};

export default Services;
