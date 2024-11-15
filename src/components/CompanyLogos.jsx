import { companyLogos } from "../constants";
import logoSchool from "../assets/images/logo_school.jpg";

const CompanyLogos = ({ className }) => {
  return (
    <div className={className}>
      <h5 className="tagline mb-6 text-center text-n-1/50">
        Giúp doanh nghiệp tối ưu hóa quy trình và tạo nên những giải pháp
        Logistics đột phá!
      </h5>
      <ul className="flex">
        {companyLogos.map((logo, index) => (
          <li
            className="flex items-center justify-center flex-1 h-[8.5rem]"
            key={index}
          >
            <img src={logoSchool} alt={logo} width={60} height={60} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CompanyLogos;
