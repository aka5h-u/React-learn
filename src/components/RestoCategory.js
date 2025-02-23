import RestoItemList from "./RestoItemList";
import { useState } from "react";

const RestoCategory = ({ data, showItems, setShowIndex }) => {
  //console.log(data)
  const handleClick = () => {
    setShowIndex();
  };
  return (
    <div className="">
      <div
        className="w-6/12 mx-auto my-4 bg-gray-50 shadow-md p-2  cursor-pointer "
        onClick={handleClick}
      >
        <div className=" flex justify-between ">
          <span className="font-bold">
            {data?.title}
            {" (" + data?.itemCards?.length + ")"}
          </span>
          <span>{" ▼ "}</span>
        </div>
        {showItems && <RestoItemList items={data?.itemCards} />}
      </div>
    </div>
  );
};

export default RestoCategory;

//  {" (" + data.itemCards.length +")"}
