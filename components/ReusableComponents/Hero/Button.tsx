import React from 'react'

const Button = ({text,className}:any) => {
  return (
    <div>
        <div className={`w-[150px] p-3 text-center rounded-[25px] border-[#11accb] border cursor-pointer hover:shadow-lg ${className}`} >
            {text}
        </div>
    </div>
  )
}

export default Button;