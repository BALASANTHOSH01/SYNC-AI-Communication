'use client'

import React from "react";
import { Button } from "../Index";
import { GradientContainer } from "../ReusableComponents";
import Image from "next/image";
import HeroImg from "../../assets/Hero/HeroImg.png";
import PlayIcon from "../../assets/Hero/playIcon.png";
import { BtnTap } from "../ReusableComponents/animateFunctions";
import { animated } from "react-spring";
import { useParallax } from "react-scroll-parallax";

const Hero = () => {
    // Tap animation Function
    const { props, handleTap } = BtnTap();

    const parallaxImage = useParallax<HTMLDivElement>({
        speed: -20,
    });

    const parallaxText = useParallax<HTMLDivElement>({
        speed: -10,
    });

    return (
        <div className="relative">

            <div ref={parallaxText.ref} className="text-center text-[30px] mt-[6%] animate-top">
                <h1 className="text-[60px]">Sync AI</h1>
                <p className="z-50 relative">AI powered Communications layer on top of Cardano</p>
                <p>with built-in SocialFi.</p>
            </div>
            <div className="flex flex-row items-center gap-2 justify-center text-[15px] my-[2%] duration-200">
                <Button className="hover:bg-[#11accb] animate-left" text="Whitepaper" />
                <Button className="hover:bg-[#11accb] animate-right" text="Synced Club" />
            </div>

            {/** Hero Image */}
            <div ref={parallaxImage.ref} className="relative z-20 fade-out-bottom animate-bottom fade-out-top">
                {/** Hero Img */}
                <Image
                    src={HeroImg}
                    className="w-[90%] h-[100vh] rounded-[15px] mx-auto"
                    alt="HeroImage"
                />

                {/** Image play Btn */}
                <animated.div style={props} onClick={handleTap} className="absolute top-[45%] left-[48%] w-[7%] cursor-pointer">
                    <Image src={PlayIcon} alt="PlayIcon" />
                </animated.div>
            </div>

            {/** Gradient */}
            <div>
                {/** Left Gradient */}
                <div className={`animate-left absolute leftGradient -left-28 top-24 xl:-top-[100px] z-0`}>
                    <div className="bg-[radial-gradient(circle,_rgba(72,233,255,1)_0%,_rgba(26,86,238,1)_100%)] w-[450px] h-96 blur-[90px]"></div>
                </div>

                {/** Right Gradient */}
                <div className={`animate-right absolute rightGradient -right-28 top-24 xl:-top-[100px] z-0`}>
                    <div className="bg-[radial-gradient(circle,_rgba(72,233,255,1)_0%,_rgba(26,86,238,1)_100%)] w-[450px] h-96 blur-[90px]"></div>
                </div>
            </div>

        </div>
    );
};

export default Hero;
