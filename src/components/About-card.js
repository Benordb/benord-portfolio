"use client";
import { useState, useEffect } from "react";
import { Contact } from "./assets/Contact";
export const About = () => {
  return (
    <div
      className={
        "w-11/12 h-24 fixed bg-black top-[64rem] rounded-3xl flex items-center justify-between py-1 px-6 border border-zinc-600 text-white"
      }>
      <a href="">Personal portfolio&copy;2024</a>
      <div className="flex gap-24">
        <a href="">About me</a>
        <a href="">Playground</a>
      </div>
      {/* <button className="border px-4 py-2 rounded-xl">Contact me</button> */}
      <Contact />
    </div>
  );
};
