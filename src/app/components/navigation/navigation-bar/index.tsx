"use client";
import React from "react";
import logoWondr from "@/app/assets/logo-wondr.png";

const NavigationBar = () => {
  return (
    <nav className="bg-white p-4 flex flex-row justify-between">
      <ul className="flex justify-start">
        <a href="/" className="hover:text-gray-600">
          <img src={logoWondr.src} alt="logo" className="h-10" />
        </a>
      </ul>
      <ul className="flex justify-end space-x-4 py-2 text-black">
        <li>
          <a href="/" className="hover:text-gray-600">
            Home
          </a>
        </li>
        <li>
          <a href="/about" className="hover:text-gray-600">
            About
          </a>
        </li>
        <li>
          <a href="/contact" className="hover:text-gray-600">
            Contact
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default NavigationBar;