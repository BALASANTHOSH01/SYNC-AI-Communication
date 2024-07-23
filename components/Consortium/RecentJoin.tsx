import Image from 'next/image';
import React from 'react'
import budsIcon from "@/assets/Features/budsIcon.png";
import { RightArrow } from '../ReusableComponents/IconList';

const TableData = [
    {
        image: budsIcon,
        name: "Sam Jeffery",
        username: "samjeffery",
        minutes: "12",
    },
    {
        image: budsIcon,
        name: "Sam Jeffery",
        username: "samjeffery",
        minutes: "12",
    },
    {
        image: budsIcon,
        name: "Sam Jeffery",
        username: "samjeffery",
        minutes: "12",
    },
]

const TableRow = ({ tableData }:any) => {
    return (
        <div className=' flex flex-row z-50 items-center justify-around my-[5%]'>
            <Image
                src={tableData.image}
                alt="UserImage"
                className=" rounded-[50%] w-[40px] h-[40px]"
            />
            <div>
                <p >{tableData.name}</p>
                <p className=" text-gray-400 text-[14px]">@{tableData.username}</p>
            </div>
            <p className='text-gray-400 text-[14px]'>{tableData.minutes}min ago</p>
        </div>
    )
};

const RecentJoin = () => {
    return (
        <div className=" w-[35%] lg:h-[70vh] xl:h-[70vh] 2xl:h-[47vh]   rounded-[15px] bg-[--consotiumTableBG] py-[2%]" >
            <p className=" mt-[5%] ml-[5%] text-[30px] font-bold text-[--navTextColor] ">RECENTLY JOINED</p>
            <p className=' ml-[5%] mt-[2%] text-gray-400 text-[20px]'>Refer a friend and win!</p>

            <div className=' mt-[12%]'>
                {
                    TableData.map((tabelData)=>(
                        <div key={tabelData.name}>
                            <TableRow tableData={tabelData} />
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default RecentJoin;