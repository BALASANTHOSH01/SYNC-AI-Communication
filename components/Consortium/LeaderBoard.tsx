import Image from "next/image";
import React from "react";
import budsIcon from "@/assets/Features/budsIcon.png";

const TableData = [
  {
    sno: "#",
    image: "",
    name: "NAME",
    username: "",
    chips: "CHIPS",
  },
  {
    sno: "1",
    image: budsIcon,
    name: "Sam Jeffery",
    username: "samjeffery",
    chips: "20",
  },
  {
    sno: "2",
    image: budsIcon,
    name: "Sam Jeffery",
    username: "samjeffery",
    chips: "20",
  },
  {
    sno: "3",
    image: budsIcon,
    name: "Sam Jeffery",
    username: "samjeffery",
    chips: "20",
  },
];

const TableRow = ({ tableData }) => {
  return (
    <div>
      <div className=" flex flex-row w-[100%] items-center justify-between px-[5%] my-[2.5%]">
      <div className="flex flex-row items-center gap-10">
        {/** SNO */}
        <p className={`${tableData.name === "NAME" && "font-bold" }`}>{tableData.sno}</p>

        {/** Name and Image */}
        <div className=" flex flex-row items-center gap-2">
          {
            tableData.image && <Image
            src={tableData.image}
            alt="UserImage"
            className=" rounded-[50%] w-[45px] h-[45px]"
          />
          }
          <div>
            <p className={`${tableData.name === "NAME" && "font-bold" }`} >{tableData.name}</p>
            {tableData.username && <p className=" text-gray-400 text-[14px]">@{tableData.username}</p>}
          </div>
        </div>
      </div>

      {/** Chips */}
      <p className={`${tableData.name === "NAME" && "font-bold" }`}>{tableData.chips}</p>
    </div>
    {tableData.name === "NAME" && <hr className=" border w-[92%] bg-gray-400  mx-auto"/>}
    </div>
  );
};

const LeaderBoard = () => {
  return (
    <div className=" w-[65%] lg:h-[70vh] xl:h-[70vh] 2xl:h-[47vh]  rounded-[15px] bg-[--consotiumTableBG] overflow-hidden" >
      <p className=" mt-[5%] ml-[5%] text-[30px] font-bold text-[--navTextColor] ">LEADERBOARD</p>

      <div className=" mt-[2%]">
        {TableData.map((tableData) => (
          <div key={tableData.sno}>
            <TableRow tableData={tableData} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default LeaderBoard;
