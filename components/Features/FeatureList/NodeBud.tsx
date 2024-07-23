// components/CentralIcon.js
import React from 'react';
import Image from 'next/image';
import CoinImage from '@/assets/Features/IconImage.png'; // Update this path to the actual image path

const NodeBude = () => {
  return (
    <div className=" flex items-center justify-center h-[80vh] w-[45%] z-50 relative">

      <div className="relative w-[150px] h-[150px]">
        
        <div className="absolute inset-0 rounded-full bg-black flex items-center justify-center">
          <div className="absolute w-[180px] h-[180px] rounded-full bg-gradient-to-r from-blue-500 to-cyan-500 blur-lg"></div>
          <div className="absolute w-[160px] h-[160px] rounded-full bg-black flex items-center justify-center z-10">
            <Image src={CoinImage} alt="Center Icon" width={140} height={140} />
          </div>
        </div>
        <div className="absolute w-full h-full rounded-full border-4 border-gray-800 animate-ping"></div>
      </div>
      <div className="absolute w-[270px] h-[270px] border-[70px] border-gray-700 rounded-full"></div>
      <div className="absolute w-[300px] h-[300px] border-[4px] border-gray-600 rounded-full"></div>
      <div className="absolute w-[310px] h-[310px] border-[4px] border-gray-600 rounded-full"></div>
    </div>
  );
};

export default NodeBude;
