import React from "react";
import ReactSlider from "react-slick";
import Image from "next/image";
import Avatar from "@/assests/images/user.png";
import Dallor from "@/assests/svg/icon-dallor.svg";

const SliderCard = () => {
  return (
    <div className="shadow bg-white p-6 rounded-md flex flex-col gap-4 items-center text-black sm:m-4">
      <Image
        className="w-100 h-100 rounded-full"
        src={Avatar}
        alt="Rounded avatar"
      ></Image>
      <h2 className="font-bold text-3xl">Abhishek Gupta</h2>
      <p className="text-[#4A77FF]">마케팅 · 2y+</p>
      <div className="flex flex-col flex-wrap gap-2 mt-6 items-center">
        <p className="p-2 border border-[#C1C5CF] rounded-md">
          마케팅 콘텐츠 제작
        </p>
        <p className="p-2 border border-[#C1C5CF] rounded-md">
          인스타그램 관리
        </p>
        <div className="flex flex-wrap gap-2">
          <p className="p-2 border border-[#C1C5CF] rounded-md">트위터 관리</p>
          <p className="p-2 border border-[#C1C5CF] rounded-md">
            블로그 글 작성
          </p>
        </div>
      </div>
    </div>
  );
};

function Slider() {
  const settings = {
    className: "center",
    centerMode: true,
    infinite: true,
    centerPadding: "60px",
    slidesToShow: 1,
    speed: 500,
    responsive: [
      {
        breakpoint: 1024, // For large screens
        settings: {
          centerPadding: "40px", // Less padding for larger screens
        },
      },
      {
        breakpoint: 768, // For medium screens
        settings: {
          centerPadding: "20px", // Less padding for medium screens
        },
      },
      {
        breakpoint: 640, // For smaller screens
        settings: {
          centerPadding: "10px", // Minimal padding for smaller screens
        },
      },
    ],
  };
  return (
    <div>
      <div className="w-full flex  justify-center">
        <div
          className="talk-bubble_2 tri-right round btm-left-in_2 floatingAnimation"
          data-aos="fade-zoom-in"
          data-aos-easing="ease-in-back"
          data-aos-delay="1200"
          data-aos-offset="0"
        >
          <div className="flex p-3 gap-3">
            <Image src={Dallor} alt="dallor" />
            <div>
              <p className="text-lg font-extrabold text-[#00C696]">
                월 100만원
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="slider-container px-8">
        <ReactSlider {...settings}>
          <SliderCard />
          <SliderCard />
          <SliderCard />
        </ReactSlider>
      </div>
    </div>
  );
}

export default Slider;
