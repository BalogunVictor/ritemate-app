import React from 'react';
import { FaAngleDown } from 'react-icons/fa';
import { TfiComment } from 'react-icons/tfi';

const Footer = () => {
  return (
    <div className="h-[270px] bg-[#17478F] px-20 text-white">
      <div className="flex justify-between pt-16">
        <div className="flex items-center gap-4">
          <TfiComment color="yellow" />
          <span>Comment</span>
          <FaAngleDown />
        </div>
        <p>Powered by Ritemate Technologies</p>
      </div>
      <div className="flex gap-12 p-12">
        <p>Privacy And Data Protection Policy</p>
        <p>Terms & Conditions</p>
      </div>
      <p>@ 2023 ALL RIGHTS RESERVED.</p>
    </div>
  );
};

export default Footer;
