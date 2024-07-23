import React from 'react'
import { PlusIcon, SubtractionIcon } from '../ReusableComponents/IconList'

const HelperCard = ({contentIs,handleGeneralFAQ,handleWebsiteFAQ}:any) => {
  return (
    <div className='w-[220px] h-[220px] text-white bg-[--consotiumTableBG] rounded-[20px] mt-[3%] relative'>
      <div className=' flex flex-col gap-5 py-[8%] p-3 '>
        <p className='ml-[2%]'>Whitepaper</p>

        <hr className='h-[1px]' />

        <div className='ml-[2%] flex flex-row items-center justify-between relative z-50'>
          <p>General FAQ </p>
          {
            contentIs === "generalfaq" ? <SubtractionIcon className='cursor-pointer' onClick={()=>handleGeneralFAQ("websitefaq")}/> : <PlusIcon className='cursor-pointer' onClick={()=>handleWebsiteFAQ("generalfaq")}/>
          }
          
        </div>

        <hr className='h-[1px]' />

        <div className='ml-[2%] flex flex-row items-center justify-between relative z-50'>
          <p>Website & XP</p>
          {
            contentIs === "websitefaq" ? <SubtractionIcon className='cursor-pointer' onClick={()=>handleGeneralFAQ("generalfaq")}/> : <PlusIcon className='cursor-pointer' onClick={()=>handleWebsiteFAQ("websitefaq")}/>
          }
        </div>


      </div>

        <div className='bg-gradient-to-b from-transparent to-[--darkBg] w-[250px] h-[150px] blur-sm absolute bottom-[-5px] left-[-5px]'></div>
    </div>
  )
}

export default HelperCard