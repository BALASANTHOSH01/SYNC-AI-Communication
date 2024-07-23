import { BellIcon } from '@/components/ReusableComponents/IconList';
import React from 'react';

const FeatureLayer = ({ title, items }) => {
  return (
    <div className="bg-[#141414] text-white text-center rounded-[30px] shadow-lg space-y-4 my-3 lg:w-[200px]  2xl:w-[300px] py-4 relative z-50">

      <h2 className="text-md font-bold">{title}</h2>
      
      <div className="space-y-2 text-[14px] text-start px-3 border-t-[1px] mx-auto z-50 relative py-[10%]">
        {items.map((item, index) => (
          <div key={index} className='flex flex-col items-center my-2 z-50 relative'>

            <div className={`flex ${item.text === "Sync ID" ? "text-center justify-center py-[10%]" : " gap-2 items-center"} border border-[#44dbf5] border-b-gray-400 w-full rounded-[10px] p-2 z-50 relative`}>

              {/** Icon */}
              <div className="p-2 rounded-full relative">
                {(item.icon === BellIcon && item.text !== "Sync ID") && (
                  <div className='absolute w-[8px] h-[8px] right-[25%] top-[20%] rounded-full bg-blue-500 opacity-60'></div>
                )}

                {item.text !== "Sync ID" && <item.icon className="w-5 h-5 text-blue-500" />}

              </div>

              {/** Text */}
              {item.text === "Sync ID" ? <p className='text-[20px]'>{item.text}</p> : <p className='text-[12px]'>{item.text}</p>}
              
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FeatureLayer;
