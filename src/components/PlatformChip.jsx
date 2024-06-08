import React from "react";
import { capitalizeFirstLetter } from "../utils";

function PlatformChip({ platform }) {
  const priorityColors = {
    web: "bg-[#4F1DDE]",
    mobile: "bg-[#e26479]",
  };

  return (
    <>
      {platform ? (
        <span
          className={`rounded-md px-2 py-1 text-sm text-white ${
            platform == "mobile" ? priorityColors.mobile : priorityColors.web
          }`}
        >
          {" "}
          {capitalizeFirstLetter(platform)}
        </span>
      ) : (
        <></>
      )}
    </>
  );
}

export default PlatformChip;
