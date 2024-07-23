import Image from 'next/image';
import React from 'react';
import TeamPersoneOne from "@/assets/Team/TeamPersoneOne.jpeg";
import TeamPersonTwo from "@/assets/Team/TeamPersonTwo.jpeg";
import { WhatsappIcon, XIcon } from '../ReusableComponents/IconList';
import SmallGradient from '../ReusableComponents/SmallGradient';

const TeamOfSyncAI = () => {
    return (
        <div className=' mt-[10%]'>

            <p className=' text-[40px] text-center'>The Team of SyncAI</p>

            <div className=' flex flex-row items-center justify-center lg:gap-4 2xl:gap-7 w-full  my-[6%] relative'>
                <div className=' relative rounded-[30px] overflow-hidden w-[30%] h-[60%]'>
                    <Image src={TeamPersoneOne} alt="" className='w-[100%] '/>
                    <div className=' bg-gradient-to-b from-white to-[#2d77b8] opacity-80 absolute top-0 left-0  w-full h-full'>
                    </div>

                    <div className='absolute bottom-0 text-white p-3 my-[4%]'>
                        <p className=' text-[25px] font-semibold'>SAM JEFFERY</p>
                        <p className=' text-[12px]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                        Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi . ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt. ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
                        </p>
                        <div className='text-[30px] flex flex-row items-center gap-2 my-[1%]'>
                            <XIcon/>
                            <WhatsappIcon/>
                        </div>
                    </div>
                </div>
                <Image src={TeamPersonTwo} alt="" className='w-[30%] rounded-[30px] h-[60%] z-50'/>
                <Image src={TeamPersoneOne} alt="" className='w-[30%] rounded-[30px] h-[60%] z-50'/>

                <div className={` absolute 2xl:-right-30 lg:-right-20 2xl:top-[400px] xl:top-[300px] lg:top-[200px] z-0 `}>
                <div className={`bg-[radial-gradient(circle,_rgba(72,233,255,1)_0%,_rgba(26,86,238,1)_100%)] 2xl:w-[500px] lg:w-[300px] h-96 blur-[100px]`} ></div>
            </div>
            </div>
        </div>
    )
}

export default TeamOfSyncAI;