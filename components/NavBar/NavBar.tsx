'use client'

import React, { useState } from 'react'
import Image from 'next/image';
import favicon from "../../assets/favicon.ico";
// icons
import { LinkedInIcon, FaceBookIcon, TwitterIcon } from "../ReusableComponents/IconList";
import NavItems from '../ReusableComponents/NavItems';

const NavBar = () => {
    const [isActive, setIsActive] = useState("Home");

    return (
        <div>
            <div className='flex flex-row items-center justify-between px-[4%] py-[1%] bg-transparent duration-200 z-50'>
                {/** Icons */}
                <div className='w-[10%] z-50 relative cursor-pointer'>
                    <Image src={favicon} width={50} height={50} alt='IconImage' />
                </div>
                {/** NavBar Items */}
                <div className='text-[14px] flex flex-row items-center justify-between w-[40%]'>
                    <NavItems isActive={isActive} setIsActive={setIsActive} to="home" text="Home" className="hover:text-[#44dbf5]" />
                    <NavItems isActive={isActive} setIsActive={setIsActive} to="about" text="About" className="hover:text-[#44dbf5]" />
                    <NavItems isActive={isActive} setIsActive={setIsActive} to="features" text="Features" className="hover:text-[#44dbf5]" />
                    <NavItems isActive={isActive} setIsActive={setIsActive} to="node" text="Node" className="hover:text-[#44dbf5]" />
                    <NavItems isActive={isActive} setIsActive={setIsActive} to="contact" text="Contact" className="hover:text-[#44dbf5]" />
                </div>
                {/** Icons */}
                <div className='flex flex-row items-center justify-around w-[10%]'>
                    <LinkedInIcon className='cursor-pointer hover:text-[var(--navTextColor)] z-50' />
                    <TwitterIcon className='cursor-pointer hover:text-[var(--navTextColor)] z-50' />
                    <FaceBookIcon className='cursor-pointer hover:text-[var(--navTextColor)] z-50' />
                </div>
            </div>
            <hr className='h-[0.5px] bg-gray-500 w-[90%] mx-auto' />
        </div>
    )
}

export default NavBar;
