import React from "react";
import { Link } from "react-router-dom";

const Button = ({ label }) => {
  return (
    <Link to="/contact">
      <button className="px-6 py-3 rounded-full bg-[#ffc857] text-black font-semibold shadow-md hover:bg-[#ffdb70] transition-colors duration-300 ease-in-out">
        {label}
      </button>
    </Link>
  );
};

export default Button;
