import React from "react";
import PlatformChip from "./PlatformChip";
import PriorityChip from "./PriorityChip";
import Avatar from "./Avatar";

function TaskCard({ data, from, index }) {
  function ondragStart(e) {
    console.log("ondragStart", e);
    e.dataTransfer.setData("id", data?.id);
    e.dataTransfer.setData("from", from);
    e.dataTransfer.setData("index", index);
  }
  return (
    <div
      draggable="true"
      className="w-[300px] border-2 border-[#666666] rounded-md  bg-white p-2 flex flex-col gap-2 cursor-pointer"
      onDragStart={ondragStart}
    >
      {/* //chip */}
      <div>
        <PriorityChip priority={data?.priority} />
      </div>

      {/* task name */}
      <h3 className="font-bold">{data?.name}</h3>

      <div>
        {/* platform chip */}
        <PlatformChip platform={data?.platform} />
      </div>

      {/* date */}
      <p></p>

      {/* avatar right side */}
      <div className="flex justify-end">
        <Avatar />
      </div>
    </div>
  );
}

export default TaskCard;
