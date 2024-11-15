import React from "react";
import Section from "./Section";
import { socials } from "../constants";

const Footer = () => {
  return (
    <Section crosses className="!px-0 !py-10">
      <div className="container flex sm:justify-center justify-center items-center gap-10 max-sm:flex-col">
        <p className="caption text-n-4 lg:block">
          © {new Date().getFullYear()}. Bản quyền thuộc về D-LOG DIGITAL
          LOGISTICS
        </p>
      </div>
    </Section>
  );
};

export default Footer;
