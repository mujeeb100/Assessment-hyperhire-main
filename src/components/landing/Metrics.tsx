import { metricsData, secondaryMetrics } from "@/constants/localConstants";
import Image from "next/image";
import React from "react";
import Check from "@/assests/svg/check.svg";
import Slider from "react-slick";

const SliderCard = () =>
  metricsData.map((doc, idx) => (
    <div className="p-4" key={`metric-${idx}`}>
      <div className="glassmorphism_1 p-5 rounded-lg font-extrabold text-2xl gap-4 flex items-center">
        <div className="p-2 rounded-lg glassmorphism_1">
          <Image src={doc.icon} alt="metricsIcons" />
        </div>
        <p className="mb-0">{doc.title}</p>
      </div>
    </div>
  ));

function Metrics() {
  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    prevArrow: <></>,
    nextArrow: <></>,
    pauseOnHover: false,
  };

  return (
    <div>
      <div className="sm:block hidden">
        <Slider {...settings}>{SliderCard()}</Slider>
      </div>
      <div className="sm:hidden block p-6">
        <div className="grid grid-cols-2">
          {secondaryMetrics.map((doc, idx) => (
            <div
              key={`secondary-${idx}`}
              className="flex items-center gap-3 mb-5"
            >
              <div className="p-1 rounded-lg bg-light_white_1">
                <Image src={Check} alt="check" width={22} height={22} />
              </div>
              <p className="text-lg font-extrabold">{doc}</p>
            </div>
          ))}
        </div>
        <p className="text-lg font-extrabold text-appWarning underline mb-0 mt-3">
          개발자가 필요하신가요?
        </p>
      </div>
    </div>
  );
}

export default Metrics;
