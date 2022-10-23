import React from "react";
import { FaRegCopyright } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="text-center shadow-lg fixed-bottom mt-3 bg-light py-1 text-secondary">
      <p className="m-0">
        <small className="flex align-items-center">Copyright Preserved by <FaRegCopyright className="text-warning"></FaRegCopyright> Saifur Rahman</small>
      </p>
    </div>
  );
};

export default Footer;
