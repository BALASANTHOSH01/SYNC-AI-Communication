import React from 'react';

const NavItems = ({ text, to, className, isActive, setIsActive }:any) => {
    return (
        <a 
            href={`/${to}`} 
            className={`font-medium ${className} ${isActive === text ? "text-[#44dbf5]" : ""}`}
            onClick={() => setIsActive(text)}
        >
            {text}
        </a>
    );
}

export default NavItems;
