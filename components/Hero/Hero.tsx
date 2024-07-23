'use client'

import React from "react";
import { Button } from "../Index";
import { GradientContainer } from "../ReusableComponents";
import Image from "next/image";
import HeroImg from "../../assets/Hero/HeroImg.png";
import PlayIcon from "../../assets/Hero/playIcon.png";


const Hero = () => {
    return (
        <div className=" relative">

            <div className=" text-center text-[30px] mt-[6%]">
                <h1 className="text-[60px]">Sync AI</h1>
                <p className="z-50 relative">AI powered Communications layer on top of Cardano</p>
                <p>with built-in SocialFi.</p>
            </div>
            <div className=" flex flex-row items-center gap-2 justify-center text-[15px] my-[2%] duration-200">
                <Button className="hover:bg-[#11accb]" text="Whitepaper" />
                <Button className="hover:bg-[#11accb] " text="Synced Club" />
            </div>

            {/** Hero Image */}
            <div className="relative z-20">

                <Image
                    src={HeroImg}
                    className="w-[90%] h-[100vh] rounded-[15px] mx-auto"
                    alt="HeroImage"
                />

                <Image src={PlayIcon} alt="PlayIcon" className="absolute top-[45%] left-[48%] w-[7%] cursor-pointer" />
            </div>

            {/** Gradient  */}
            <div>
                <div className={`absolute -left-28 top-24 xl:-top-[100px] z-0`}>
                    <div className=" bg-[radial-gradient(circle,_rgba(72,233,255,1)_0%,_rgba(26,86,238,1)_100%)] w-[450px] h-96 blur-[90px]"></div>
                </div>
                <div className={`absolute -right-28 top-24 xl:-top-[100px] z-0`}>
                    <div className="bg-[radial-gradient(circle,_rgba(72,233,255,1)_0%,_rgba(26,86,238,1)_100%)] w-[450px] h-96 blur-[90px]"></div>
                </div>
            </div>

        </div>
    );
};

export default Hero;
