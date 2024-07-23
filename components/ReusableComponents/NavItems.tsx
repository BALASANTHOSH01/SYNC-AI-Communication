import React from 'react';
import { BtnTap } from './animateFunctions';

// animation library
import { animated } from 'react-spring';

const NavItems = ({ text, className, isActive, setIsActive }:any) => {
    const {props,handleTap} = BtnTap();
    return (
        <animated.a 
        style={props}
            href={``} 
            className={`font-medium ${className} ${isActive === text ? "text-[#44dbf5]" : ""}`}
            onClick={() => {
                setIsActive(text);
                handleTap();
            }}
        >
            {text}
        </animated.a>
    );
}

export default NavItems;
