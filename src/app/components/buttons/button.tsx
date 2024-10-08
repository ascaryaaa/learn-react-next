"use client";

import React from "react";

interface ButtonProps {
  label: string;
  onClick: () => void;
}

const Button: React.FC<ButtonProps> = ({ label, onClick }) => {
    return (
        <view
            onClick={onClick}
            className="py-2 px-2 cursor-pointer text-gray-700 font-bold bg-BNI_Torquise hover:bg-BNI_LTorquise hover:text-black rounded-md"
        >
        {label}
        </view>
    );
};

export default Button;
