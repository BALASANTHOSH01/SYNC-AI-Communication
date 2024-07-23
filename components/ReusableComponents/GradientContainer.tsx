import React from 'react'

const GradientContainer = () => {
    return (
        <div>
            <div className={` absolute -left-28 top-24 z-0`}>
                <div className=" bg-[radial-gradient(circle,_rgba(72,233,255,1)_0%,_rgba(26,86,238,1)_100%)] w-[500px] h-96 blur-[90px]"></div>
            </div>
            <div className={` absolute -right-28 top-24 z-0`}>
                <div className="bg-[radial-gradient(circle,_rgba(72,233,255,1)_0%,_rgba(26,86,238,1)_100%)] w-[500px] h-96 blur-[90px]"></div>
            </div>
        </div>
    )
}

export default GradientContainer;