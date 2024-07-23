'use client'

import React, { useState } from 'react'
import { useSpring, animated } from 'react-spring';
import { BtnTap } from '../animateFunctions';


const Button = ({ text, className }: any) => {
  const {props,handleTap} = BtnTap();

  return (
    <animated.div style={props} onClick={handleTap}>
      <div className={`w-[150px] p-3 text-center rounded-[25px] border-[#11accb] border cursor-pointer hover:shadow-lg ${className}`} onClick={handleTap}>
        {text}
      </div>
    </animated.div>
  )
}

export default Button;