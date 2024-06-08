import React, { useState } from "react";
import Button from "./Button";

function NavBar() {
  const [projectName, setProjectName] = useState("");
  const [draft, setDraft] = useState(`Project Id - #${Math.floor(Math.random() *1000000)}`);
  return (
    <nav className="bg-[#4F1DDE] text-white h-[70px] flex justify-between items-center px-6 fixed w-full">
      <div className="flex gap-2 items-center">
        <img
          className=" h-[50px] rounded-full overflow-hidden"
          src="https://logowik.com/content/uploads/images/google-tasks7052.logowik.com.webp"
        />
        {projectName ? (
          <>
            {" "}
            <h3 className="font-extrabold">{projectName}</h3>
          </>
        ) : (
         <div className="flex gap-2">
         <input
            type="text"
            placeholder="Enter text"
            value={draft}
            onChange={(e)=>{
              setDraft(e.target.value)
            }}
            class="w-full px-4 py-3 border rounded-lg  text-black font-extrabold"
          ></input>
           <Button onClick={()=>{
            setProjectName(draft)
           }} type={'bordered'}>Set</Button>
         </div>
        )}
      </div>
    </nav>
  );
}

export default NavBar;
