import Image from 'next/image';
import React from 'react'
import Logo from "@/assets/favicon.ico";
import { TelegramIcon, WhatsappIcon } from '../ReusableComponents/IconList';
import SmallGradient from '../ReusableComponents/SmallGradient';

const Gradient = ({innerClass,outerClass}) => {
    return (
        <div className={`absolute  z-0 ${innerClass} `}>
            <div className={`bg-[radial-gradient(circle,_#163b96_0%,_#163b96_100%)] w-[400px] h-96 blur-[90px] ${outerClass}`}></div>
        </div>
    )
};

const Footer = () => {
    return (
        <div>
            <hr className='bg-gray-400'/>
            <div className=' flex flex-row items-start justify-around px-[4%] py-[6%] '>

                <div className=' w-[50%] flex flex-row justify-around  '>
                    {/** First Column */}
                    <div className='flex flex-col gap-4 relative z-50'>
                        <div className=' flex flex-row items-center'>
                            <Image src={Logo} alt='Logo' className='w-[80px] h-[80px] z-50' />
                            <p className=' text-[15px] z-50'>AI powered Communications<br />
                                layer on top of Cardano with<br />
                                built-in SocialFi.
                            </p>
                        </div>

                        <div className=' flex flex-col gap-2 ml-[15%] z-50'>
                            <p>Privacy Policy</p>
                            <p>Terms</p>
                            <p>Careers</p>
                        </div>

                        <Gradient innerClass={"lg:-left-[100px] 2xl:-left-[300px] lg:-top-[130px] 2xl:-top-[200px]"} outerClass="2xl:w-[600px] h-[600px] 2xl:blur-[130px]" />
                    </div>

                    {/** Second Column */}
                    <div className='flex flex-col gap-6 relative'>
                        <p className=' font-bold text-[30px] z-50'>PAGES</p>
                        <div className=' flex flex-col gap-2 z-50'>
                            <p>Home</p>
                            <p>About</p>
                            <p>Features</p>
                            <p>Node</p>
                        </div>

                        <Gradient innerClass={"lg:-left-[100px] 2xl:-left-[290px] lg:-top-[100px] 2xl:-top-[200px]"} outerClass="2xl:w-[600px] h-[600px] 2xl:blur-[130px]" />
                    </div>
                </div>

                <div className='w-[50%] flex flex-row justify-around'>
                    {/** Third Column */}
                    <div className='flex flex-col gap-6 relative'>
                        <p className=' text-[30px] font-bold  z-50'>SOCIAL</p>

                        <div className=' flex flex-row items-center gap-1 z-50'>
                            <WhatsappIcon />
                            <p>Whatsapp</p>
                        </div>
                        <div className=' flex flex-row items-center gap-1 z-50'>
                            <TelegramIcon />
                            <p>Whatsapp</p>
                        </div>

                        <Gradient innerClass={"lg:-left-[40px] 2xl:-left-[70px] lg:-top-[100px] 2xl:-top-[200px]"} outerClass="2xl:w-[400px] h-[600px] 2xl:blur-[130px]" />

                       
                    </div>

                    {/** Fourth Column */}
                    <div className=' flex flex-col gap-6 relative'>
                        <p className=' text-[30px] z-50 font-bold '>CONTACT US</p>

                        <div className=' flex flex-col gap-2 z-50'>
                            <p>Address</p>
                            <p>Address About</p>
                        </div>

                        <div className=' flex flex-col gap-2 z-50'>
                            <p>Contact No.</p>
                            <p>012345667 8900</p>
                        </div>
                        <Gradient innerClass={"lg:-left-[10px] 2xl:-left-[70px] lg:-top-[100px] 2xl:-top-[200px]"} outerClass="2xl:w-[600px] h-[600px] 2xl:blur-[130px]" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer;