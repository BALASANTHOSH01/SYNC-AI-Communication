import React from 'react'

const SmallGradient = ({innerClass,outerClass}:any) => {
  return (
    <div>
        <div className={` absolute -right-20 -top-20 z-0 ${outerClass}`}>
                <div className={`bg-[radial-gradient(circle,_rgba(72,233,255,1)_0%,_rgba(26,86,238,1)_100%)] w-[500px] ${ innerClass || "w-[500px]"} h-96 blur-[100px]`} ></div>
            </div>
    </div>
  )
}

export default SmallGradient