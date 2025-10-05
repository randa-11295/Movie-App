import React from "react";
import { ButtonProps } from "../../types/moviesTypes";

const ReusableBtn: React.FC<ButtonProps> = ({
  children,
  isLoading = false,
  disabled = false,
  onClick,
  type = "button",
  className = "",
}) => {
  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled || isLoading}
      className={`px-4 cursor-pointer py-2 bg-blue-600 hover:bg-blue-400 text-white font-medium rounded-lg transition-all disabled:opacity-60 ${className}`}
    >
      {isLoading ? "Loading..." : children}
    </button>
  );
};

export default ReusableBtn;
