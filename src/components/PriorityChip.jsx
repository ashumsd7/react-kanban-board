import React from "react";
import { capitalizeFirstLetter } from "../utils";

function PriorityChip({ priority }) {
  const priorityColors = {
    low: "bg-[#B8EBB0]",
    medium: "bg-[#F0CA81]",
    high: "bg-[#e26479]",
  };

  return (
    <>
      {priority ? (
        <span
          className={` rounded-3xl px-2 py-[2px] text-sm ${priority=='low' || priority=='medium' ?'text-black' :'text-white'}   ${
            priority == "high"
              ? priorityColors.high
              : priority == "medium"
              ? priorityColors.medium
              : priorityColors.low
          }`}
        >
          {capitalizeFirstLetter(priority)}
        </span>
      ) : (
        <></>
      )}
    </>
  );
}

export default PriorityChip;
