import React from 'react'
import { NavItems } from '../ReusableComponents';
import Image from 'next/image';
import favicon from "../../assets/favicon.ico";
// icons
import {LinkedInIcon,FaceBookIcon,TwitterIcon} from "../ReusableComponents/IconList";
const NavBar = () => {
  return (
    <div>
        <div className='flex flex-row items-center justify-between px-[4%] py-[1%] bg-transparent duration-200 z-50'>
            {/** Icons */}
            <div className=' w-[10%] z-50 relative cursor-pointer'>
                <Image src={favicon} width={50} height={50} alt='IconImage'/>
            </div>
            {/** NavBar Items */}
            <div className='text-[14px] flex flex-row items-center justify-between w-[40%]'>
                <NavItems to="home" text={"Home"} className="text-[#44dbf5]" />
                <NavItems to="about" text={"About"} className=""/>
                <NavItems to="features" text={"Features"} className=""/>
                <NavItems to="node" text={"Node"} className=""/>
                <NavItems to="contact" text={"Contact"} className=""/>
            </div>
            {/** Icons */}
            <div className=' flex flex-row items-center justify-around w-[10%]'>
                <LinkedInIcon className=' cursor-pointer hover:text-[var(--navTextColor)] z-50'/>
                <TwitterIcon className=' cursor-pointer hover:text-[var(--navTextColor)] z-50'/>
                <FaceBookIcon className=' cursor-pointer hover:text-[var(--navTextColor)] z-50'/>
            </div>
        </div>
        <hr className='h-[0.5px] bg-gray-500 w-[90%] mx-auto'/>
    </div>
  )
}

export default NavBar;