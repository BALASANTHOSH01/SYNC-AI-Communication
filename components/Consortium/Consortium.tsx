'use client'

import React from 'react'
import LeaderBoard from './LeaderBoard';
import RecentJoin from './RecentJoin';
import { RightArrow } from '../ReusableComponents/IconList';
import { AnimatedSection } from '../ReusableComponents';

const Consortium = () => {
  return (
    <div className=' w-[90%] mx-auto mt-[10%]'>
      <div>
        <p className=' text-[40px] text-center'>The Synced Club Consortium</p>
      </div>

      <AnimatedSection className='animate-bottom '>
      <div className='relative flex flex-row items-center gap-5 w-full my-[5%]'>
        <LeaderBoard />
        <RecentJoin />
        <div className='bg-gradient-to-b from-transparent to-[--darkBg] w-[100%] 2xl:h-[35vh] xl:h-[40vh] lg:h-[60vh] blur-sm absolute lg:bottom-[-100px] 2xl:bottom-[-90px]'></div>
      </div>
      </AnimatedSection>

      <div className=' justify-center flex flex-row items-center text-[20px] mx-aut0 gap-3 relative z-50 cursor-pointer hover:text-[#35a1c0]'>
        <div className=' p-2 rounded-[50%] border text-[--primaryBlue]'>
          <RightArrow />
        </div>
        <p>VIEW MORE</p>
      </div>
      
    </div>
  )
}

export default Consortium;