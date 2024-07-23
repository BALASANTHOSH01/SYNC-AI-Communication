import React from 'react'

const NavItems = ({text,to,className}:any) => {
  return (
    <a href={`/${to}`} className={`hover:text-[var(--navTextColor)] font-medium text-white ${className}`}>
        {text}
    </a>
  )
}

export default NavItems;