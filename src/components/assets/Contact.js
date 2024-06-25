"use client";
import { useState, useEffect } from "react";
export const Contact = () => {
  const [action, setAction] = useState("Login");
  useEffect(() => {
    // const card = document.querySelector("bb");
    console.log("hello");
  }, [action]);
  //   const handleCheckboxChange = (event) => {
  //     if (event.target.onmouseover) {
  //       setAction("Login");
  //     } else {
  //       setAction("Login");
  //     }
  //   };
  return (
    <a
      href=""
      className="bb border-2 rounded-xl w-36 h-14 flex-col overflow-hidden"
      //   onmouseover={() => {
      //     // setAction("Login");
      //   }}
      // onChange={handleCheckboxChange}
    >
      <div className="h-28 flex flex-col">
        <span className="block flex-1 flex-all text-center">Contact me</span>
        <span className="flex-all flex-1 bg-white text-black block">
          Contact me
        </span>
      </div>
    </a>
  );
};
