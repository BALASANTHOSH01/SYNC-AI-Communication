"use client"

import React, { useState } from 'react'
import HelperCard from './HelperCard'
import { GeneralFAQ, WebsiteFAQ } from "./QuestionsList";

const Questions = () => {
    const [contentIs, setContentIs] = useState<string>("generalfaq");
    const handleGeneralFAQ = (data: string) => {
        setContentIs(data)
    };
    const handleWebsiteFAQ = (data: string) => {
        setContentIs(data)
    };


    return (
        <div className='py-[4%] mb-[15%]'>
            <p className=' text-[40px] text-center'>Frequently Asked Questions</p>

            <div className=' flex flex-row items-start justify-center gap-5 my-[5%]'>
                <HelperCard contentIs={contentIs} handleGeneralFAQ={handleGeneralFAQ} handleWebsiteFAQ={handleWebsiteFAQ} />

                {
                    contentIs === "generalfaq" ? (
                        <div className=' w-[60%] z-50 relative'>
                            <div className='flex flex-col gap-2 my-[2%]'>
                                <p className=" font-bold text-[24px]">{GeneralFAQ[0].question }</p>
                                <p className="text-[14px]" >{GeneralFAQ[0].answer } </p>
                            </div>

                            <div className='flex flex-col gap-2 my-[2%]'>
                                <p className=" font-bold text-[24px]">{GeneralFAQ[1].question }</p>
                                <p className="text-[14px]" >{GeneralFAQ[1].answer }</p>
                            </div>
                        </div>
                    ) : (
                        <div className=' w-[60%] z-50 relative'>
                            <div className='flex flex-col gap-2 my-[2%]'>
                                <p className=" font-bold text-[24px]">{WebsiteFAQ[0].question }</p>
                                <p className="text-[14px]" >{WebsiteFAQ[0].answer } </p>
                            </div>

                            <div className='flex flex-col gap-2 my-[2%]'>
                                <p className=" font-bold text-[24px]">{WebsiteFAQ[1].question }</p>
                                <p className="text-[14px]" >{WebsiteFAQ[1].answer }</p>
                            </div>
                        </div>
                    )
                }



            </div>
        </div>
    )
}

export default Questions