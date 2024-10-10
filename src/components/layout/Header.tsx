import React from "react";

import Logo from "@/assests/svg/AppLogo.svg";
import Image from "next/image";
import Dropdown from "@/components/common/Dropdown";
import Button from "@/components/common/Button";

const options = [
  {
    label: "채용",
    value: "",
  },
  {
    label: "해외 개발자 원격 채용",
    value: "",
  },
  {
    label: "외국인 원격 채용 (비개발 직군)",
    value: "",
  },
  {
    label: "한국어 가능 외국인 채용",
    value: "",
  },
];

function Header() {
  return (
    <header className="p-6 bg-transparent flex justify-between items-center lg:px-40 text-white ">
      <Image src={Logo} alt="AppLogo" />
      <div className="gap-10 sm:flex hidden">
        <Dropdown title="채용" options={options} />
        <p className="mb-0">해외 개발자 활용 서비스</p>
      </div>
      <Button label="문의하기" className="sm:flex hidden" />
      <div className="sm:hidden block min-w-5 h-1 bg-white mb-5"></div>
    </header>
  );
}

export default Header;
