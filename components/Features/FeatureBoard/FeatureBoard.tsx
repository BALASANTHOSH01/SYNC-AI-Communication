'use client'

import { GradientContainer } from '@/components/ReusableComponents';
import SmallGradient from '@/components/ReusableComponents/SmallGradient';
import React from 'react'
import BentoGrid from '../BentoGrid/BentoGrid';
import Image from 'next/image';
import { FeatureBGImg } from '@/assets/Features';
import { RightArrow } from '@/components/ReusableComponents/IconList';
import { BtnTap } from '@/components/ReusableComponents/animateFunctions';
import { useParallax } from 'react-scroll-parallax';

const FeatureBoard = () => {
    const parallaxFeatureText = useParallax<HTMLDivElement>({ speed: -11 });
    const parallaxFeatureImage = useParallax<HTMLDivElement>({ speed: -5 });

    return (
        <div className='my-[10%] relative'>
            <SmallGradient innerClass=" " outerClass=" " />
            <p className=' text-gray-400 font-semibold absolute left-[5%]'>Our Features</p>

            <div ref={parallaxFeatureText.ref} className='relative text-[50px] text-end px-[5%] z-50 tracking-[-0.1em]'>
                <p>SyncAI is an unified<span className=' ml-[2%]'>Social-Fi</span></p>
                <p className="mt-[-2%]">architecture with abstract programming</p>
                <p className="mt-[-2%]">bringing a new age of user-centric experience</p>
            </div>

            <BentoGrid />

            <div ref={parallaxFeatureImage.ref} className=" relative my-[10%]">
                <Image src={FeatureBGImg} alt="FeatureBackground" className=" object-cover grayscale-[50%]" />
                <div className="absolute inset-0 bg-black opacity-50 z-10"></div>

                <div className="absolute top-[3%] lg:left-[21%] xl:left-[23%] 2xl:left-[30%] p-5 z-20">
                    <div className="text-[40px] text-white text-center">
                        <p>A new era for dApp-User Interactions</p>
                        <p>Get yourself Synced</p>
                    </div>

                    <div className="flex flex-row justify-center items-center gap-2 text-[20px] my-[1%] cursor-pointer">
                        <div className="border border-white rounded-full p-[6px] text-[var(--primaryBlueText)]">
                            <RightArrow />
                        </div>
                        <p>SYNCED CLUB</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default FeatureBoard;
