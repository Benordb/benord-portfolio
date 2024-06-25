"use client";
import { animatePageIn, animatePageInY } from "../utils/animations";
import { useEffect } from "react";

export const TemplateX = ({ Children }) => {
  useEffect(() => {
    animatePageIn();
  }, []);
  return (
    <div>
      <div
        id="banner"
        className="min-h-screen bg-white z-10 fixed top-0 left-0 w-1/6"></div>
      <div
        id="banner"
        className="min-h-screen bg-white z-10 fixed top-0 left-[16.666667%] w-1/6"></div>
      <div
        id="banner"
        className="min-h-screen bg-white z-10 fixed top-0 left-[33.333333%] w-1/6"></div>
      <div
        id="banner"
        className="min-h-screen bg-white z-10 fixed top-0 left-1/2 w-4/6"></div>
      <div
        id="banner"
        className="min-h-screen bg-white z-10 fixed top-0 left-[66.666667%] w-1/6"></div>
      <div
        id="banner"
        className="min-h-screen bg-white z-10 fixed top-0 left-[83.333333%] w-1/6"></div>

      {Children}
    </div>
  );
};
export const TemplateY = ({ Children }) => {
  useEffect(() => {
    animatePageInY();
  }, []);
  return (
    <div>
      <div
        id="banner"
        className="min-w-full bg-white z-10 fixed top-0 left-0 h-1/6"></div>
      <div
        id="banner"
        className="min-w-full bg-white z-10 fixed top-[16.666667%] left-0 h-1/6"></div>
      <div
        id="banner"
        className="min-w-full bg-white z-10 fixed top-[33.333333%] left-0 h-1/6"></div>
      <div
        id="banner"
        className="min-w-full bg-white z-10 fixed top-1/2 left-0 h-1/6"></div>
      <div
        id="banner"
        className="min-w-full bg-white z-10 fixed top-[66.666667%] left-0 h-1/6"></div>
      <div
        id="banner"
        className="min-w-full bg-white z-10 fixed top-[83.333333%] left-0 h-1/6"></div>

      {Children}
    </div>
  );
};
