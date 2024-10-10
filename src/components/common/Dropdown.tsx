import { IDropdownProps } from "@/types/dropdown.type";
import React, { useState } from "react";

const Dropdown = ({ title, options }: IDropdownProps) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="relative inline-block text-left">
      <div>
        <span
          onClick={toggleDropdown}
          className="inline-flex justify-center gap-2 cursor-pointer"
          aria-expanded={isOpen}
          aria-haspopup="true"
        >
          {title}
          <svg
            className="-mr-1 ml-2 h-5 w-5"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
            aria-hidden="true"
          >
            <path
              fillRule="evenodd"
              d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
              clipRule="evenodd"
            />
          </svg>
        </span>
      </div>

      {isOpen && (
        <div className="origin-top-right absolute right-0 mt-2 max-w-fit rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none z-10">
          <div
            className="py-1"
            role="menu"
            aria-orientation="vertical"
            aria-labelledby="options-menu"
          >
            {options.map(({ label }, idx) => (
              <div
                key={idx}
                className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 text-nowrap"
                role="menuitem"
              >
                {label}
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default Dropdown;
