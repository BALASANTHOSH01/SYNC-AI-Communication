import React from 'react'
import HelperCard from './HelperCard'

const Questions = () => {
    return (
        <div className='py-[4%] mb-[15%]'>
                <p className=' text-[40px] text-center'>Frequently Asked Questions</p>

            <div className=' flex flex-row items-start justify-center gap-5 my-[5%]'>
                <HelperCard />
                <div className=' w-[60%] z-50 relative'>
                    <div className='flex flex-col gap-2 my-[2%]'>
                        <p className=" font-bold text-[24px]">What is Sync AI?</p>
                        <p className="text-[14px]" >Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi . ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt. ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt. At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. </p>
                    </div>

                    <div className='flex flex-col gap-2 my-[2%]'>
                        <p className=" font-bold text-[24px]">How Sync AI will be used ?</p>
                        <p className="text-[14px]" >Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi . ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt. ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt. At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Questions