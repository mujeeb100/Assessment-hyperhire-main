import Image from "next/image";
import React from "react";
import Logo from "@/assests/svg/AppSecondaryLogo.svg";
import Tag from "@/assests/svg/tag.svg";
import Avatar from "@/assests/svg/icon-avatar.svg";
import Settings from "@/assests/svg/icon-gear.svg";
import KOR from "@/assests/svg/kor.svg";

import Arrow from "@/assests/svg/Arrow.svg";

function Footer() {
  return (
    <footer className="p-6 bg-white lg:px-48 text-xs py-16">
      <section className="grid lg:grid-cols-6 gap-2">
        <div className="col-span-2 flex flex-col gap-2 sm:mb-0 mb-10">
          <Image src={Logo} alt="company" />
          <p className="font-extrabold">
            우리는 국가의 장벽을 넘어 최고의 인재를 매 <br />
            칭해드립니다.
          </p>
          <p className="text-sm font-extrabold text-gray-500">010-0000-0000</p>
          <p className="text-sm font-extrabold text-gray-500">
            aaaaa@naver.com
          </p>
        </div>
        <div className="flex flex-col gap-3 pt-2 ">
          <Image src={Tag} alt="Tag" />
          <p className="font-extrabold">해외 개발자 원격 채용</p>
          <p className="flex items-center gap-2 text-gray-600 ">
            <span className="font-extrabold">바로가기</span>
            <Image src={Arrow} alt="arrow"></Image>
          </p>
        </div>
        <div className="flex flex-col gap-3 pt-2">
          <Image src={Avatar} alt="Avatar" />
          <p className="font-extrabold">외국인 원격 채용 (비개발)</p>
          <p className="flex items-center gap-2 text-gray-600">
            <span className="font-extrabold">바로가기</span>
            <Image src={Arrow} alt="arrow"></Image>
          </p>
        </div>
        <div className="flex flex-col gap-3 pt-2">
          <Image src={KOR} alt="KOR" />
          <p className="font-extrabold">한국어 가능 외국인 채용</p>
          <p className="flex items-center gap-2 text-gray-600">
            <span className="font-extrabold">바로가기</span>
            <Image src={Arrow} alt="arrow"></Image>
          </p>
        </div>
        <div className="flex flex-col gap-3 pt-2">
          <Image src={Settings} alt="Settings" />
          <p className="font-extrabold">해외 개발자 활용 서비스</p>
          <p className="flex items-center gap-2 text-gray-600">
            <span className="font-extrabold">바로가기</span>
            <Image src={Arrow} alt="arrow"></Image>
          </p>
        </div>
      </section>
      <section className="grid lg:grid-cols-6 sm:mt-6 mt-16">
        <div className="flex flex-col gap-3 sm:mb-0 mb-10">
          <p className="font-extrabold">상호명</p>
          <p className="text-gray-500 font-extrabold">하이퍼하이어</p>
          <p className="font-extrabold text-gray-600">
            Hyperhire India Private Limited
          </p>
        </div>
        <div className="flex flex-col gap-3 sm:mb-0 mb-10">
          <p className="font-extrabold">대표 CEO</p>
          <p className="text-gray-500 font-extrabold">김주현</p>
          <p className="font-extrabold text-gray-600">Juhyun Kim</p>
        </div>
        <div className="flex flex-col gap-3 sm:mb-0 mb-10">
          <p className="font-extrabold">사업자등록번호 CIN</p>
          <p className="text-gray-500 font-extrabold">427-86-01187</p>
          <p className="font-extrabold text-gray-600">U74110DL2016PTC290812</p>
        </div>
        <div className="flex flex-col gap-3 col-span-2 sm:mb-0 mb-10">
          <p className="font-extrabold">주소 ADDRESS</p>
          <p className="text-gray-500 font-extrabold">
            서울특별시 강남대로 479, 지하 1층 238호{" "}
          </p>
          <p className="font-extrabold text-gray-600">
            D-138, Street number 11, Jagjeet Nagar, North East Delhi, New Delhi,
            110053 India
          </p>
        </div>
      </section>
      <section className="text-light_gray_1 text-md font-extrabold sm:mt-8">
        ⓒ 2023 Hyperhire
      </section>
    </footer>
  );
}

export default Footer;
