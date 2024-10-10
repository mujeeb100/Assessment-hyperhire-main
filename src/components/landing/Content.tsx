import { ContentProps } from "@/types/content.type";
import React from "react";

function Content({ data }: ContentProps) {
  return (
    <div className="my-4 sm:p-0 p-6">
      <section>
        <div
          className="talk-bubble tri-right round btm-left-in"
          data-aos="fade-zoom-in"
          data-aos-easing="ease-in-back"
          data-aos-delay="800"
          data-aos-offset="0"
        >
          <div className="talktext">
            <p className="text-lg font-extrabold text-appBlue">
              풀타임, 파트타임
            </p>
          </div>
        </div>
        <h1
          className="text-4xl font-bold leading-[3.5rem]"
          data-aos="fade-zoom-in"
          data-aos-easing="ease-in-back"
          data-aos-delay="300"
          data-aos-offset="0"
        >
          {data?.title}
        </h1>
        <h3
          className="text-2xl mt-4"
          data-aos="fade-zoom-in"
          data-aos-easing="ease-in-back"
          data-aos-delay="500"
          data-aos-offset="0"
        >
          {data?.subTitle}
        </h3>
        <p
          className="font-bold mt-4 underline sm:block hidden"
          data-aos="fade-zoom-in"
          data-aos-easing="ease-in-back"
          data-aos-delay="500"
          data-aos-offset="0"
        >
          {data?.question}
        </p>
      </section>
      <section
        className="grid-cols-3 mt-16 sm:grid hidden"
        data-aos="fade-zoom-in"
        data-aos-easing="ease-in-back"
        data-aos-delay="500"
        data-aos-offset="0"
      >
        {Array.isArray(data?.requirementDetails) &&
          data?.requirementDetails.length > 0 &&
          data?.requirementDetails.map((doc: any, idx: number) => (
            <div key={`metrics-${idx}`} className="w-2/3">
              <span className="font-bold mt-4 border-t border-white py-2 inline">
                {doc?.title}
              </span>
              <p>{doc?.desc}</p>
            </div>
          ))}
      </section>
    </div>
  );
}

export default Content;
