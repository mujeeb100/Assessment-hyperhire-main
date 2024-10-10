import { IButtonProps } from "@/types/button.type";
import React from "react";

const theme = {
  primary:
    "bg-white hover:bg-gray-100 font-semibold py-2 px-4 border border-gray-400 rounded shadow text-[#4A77FF]",
};

function Button({
  label,
  varient = "primary",
  className,
  ...props
}: IButtonProps) {
  return (
    <button
      className={`${theme[varient]} ${className && className}`}
      {...props}
    >
      {label}
    </button>
  );
}

export default Button;
