import React from "react";

function Button({ type, children ,onClick}) {
  if (type == "danger")
    return (
      <button onClick={onClick} className="bg-[#DE1D3E] text-white font-bold py-2 px-3 rounded-md hover:bg-[#281317] active:bg-[#df6963] transition-colors duration-300">
        {children}
      </button>
    );
  if (type == "rounded")
    return (
      <button  onClick={onClick} className="bg-[#DE1D3E] text-white font-bold p-4 h-12 w-12 flex items-center justify-center rounded-full hover:bg-[#281317] active:bg-[#df6963] transition-colors duration-300">
        {children}
      </button>
    );
  if (type == "bordered")
    return (
      <button  onClick={onClick} className="bg-[#4f1dde] border text-white font-bold py-2 px-3 rounded-md hover:bg-[#3a14a8] active:bg-[#2d0e81] transition-colors duration-300">
        {children}
      </button>
    );

  return (
    <button  onClick={onClick} className="bg-[#4f1dde] text-white font-bold py-2 px-3 rounded-md hover:bg-[#3a14a8] active:bg-[#2d0e81] transition-colors duration-300">
      {children}
    </button>
  );
}

export default Button;
