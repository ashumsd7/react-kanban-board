import React from "react";

function Sidebar() {
  const pages = [
    {
      name: "Home",
      route: "/home",
      isActive:true
    },
    // {
    //   name: "Bookmarks",
    //   route: "/home",
    // },
    // {
    //   name: "+ Add new page",
    //   route: "/home",
    // },
  ];
  return (
    <div className=" w-[280px] h-screen fixed bg-gray-300 mb-6 mt-[70px]">
      {pages?.map((item) => {
        return (
        <div className="flex flex-col gap-4">
        <div className="border border-white rounded-md flex justify-start px-4 py-2 bg-[#7a5bcf] cursor-pointer ">
            <h1 className={`text-white ${item?.isActive ? 'font-extrabold underline':''}`}> {item.name}</h1>
          </div>

          <p className="text-xs font-semibold underline italic text-black animate-bounce ml-2">Drag and drop you tasks</p>
        </div>
          
        );
      })}
    </div>
  );
}

export default Sidebar;
