import { curve, heroBackground, robot } from "../assets";
import Button from "./Button";
import Section from "./Section";
import { BackgroundCircles, BottomLine, Gradient } from "./design/Hero";
import { heroIcons } from "../constants";
import { ScrollParallax } from "react-just-parallax";
import { useRef } from "react";
import Generating from "./Generating";
import Notification from "./Notification";
import CompanyLogos from "./CompanyLogos";

const Hero = () => {
  const parallaxRef = useRef(null);

  return (
    <Section
      className="pt-[12rem] -mt-[5.25rem]"
      crosses
      crossesOffset="lg:translate-y-[5.25rem]"
      customPaddings
      id="hero"
    >
      <div className="container relative" ref={parallaxRef}>
        <div className="relative z-1 max-w-[62rem] mx-auto text-center mb-[3.875rem] md:mb-20 lg:mb-[6.25rem]">
          <h1 className="h1 mb-6">
            Khám phá tương lai &nbsp;cùng với{` `}
            <span className="inline-block relative">
              D-LOG{" "}
              <img
                src={curve}
                className="absolute top-full left-0 w-full xl:-mt-2"
                width={624}
                height={28}
                alt="Curve"
              />
            </span>
          </h1>
          <p className="body-1 max-w-3xl mx-auto mb-6 text-n-2 lg:mb-8">
            Giải phóng sức mạnh AI cùng D-LOG. Nâng cao hiệu suất, tối ưu quy
            trình – Tương lai của bạn bắt đầu ngay hôm nay!
          </p>

          <div className="flex justify-center mt-12 md:mt-15 xl:mt-20">
            <Button href="#process">Trải nghiệm ngay</Button>
          </div>
        </div>

        <div className="relative max-w-[23rem] mx-auto md:max-w-5xl xl:mb-24">
          <div className="relative z-1 p-0.5 rounded-2xl bg-conic-gradient">
            <div className="relative bg-n-8 rounded-[1rem]">
              <div className="h-[1.4rem] bg-n-10 rounded-t-[0.9rem]" />

              <div className="aspect-[33/40] rounded-b-[0.9rem] overflow-hidden md:aspect-[688/490] lg:aspect-[1024/490]">
                <div className="relative max-w-full mx-auto p-4 md:max-w-5xl xl:mb-24">
                  <div className="relative z-10 p-0.5 rounded-2xl bg-conic-gradient">
                    <div className="relative bg-n-8 rounded-lg overflow-hidden">
                      {/* Header Background */}
                      <div className="h-[1.4rem] bg-n-10 rounded-t-lg" />

                      {/* Image Aspect Ratio for Responsiveness */}
                      <div className="aspect-w-4 aspect-h-3 md:aspect-w-16 md:aspect-h-9">
                        <img
                          src={robot}
                          className="w-full h-full object-cover"
                          alt="AI"
                        />
                      </div>
                    </div>
                    <Gradient />
                  </div>

                  {/* Background Image */}
                  <div className="absolute -top-1/2 left-1/2 w-[200%] -translate-x-1/2 md:-top-[40%] md:w-[150%] lg:-top-[60%]">
                    <img
                      src={heroBackground}
                      className="w-full h-auto"
                      alt="hero"
                    />
                  </div>

                  <BackgroundCircles />
                </div>
              </div>
            </div>

            <Gradient />
          </div>
          <div className="absolute -top-[54%] left-1/2 w-[234%] -translate-x-1/2 md:-top-[46%] md:w-[138%] lg:-top-[104%]">
            <img
              src={heroBackground}
              className="w-full"
              width={1440}
              height={1800}
              alt="hero"
            />
          </div>

          <BackgroundCircles />
        </div>
      </div>

      <BottomLine />
    </Section>
  );
};

export default Hero;
