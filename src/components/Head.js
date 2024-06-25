"use client";
import { useRef } from "react";
import { ThemeToggle } from "./ThemeToggle";
export const Head = () => {
  const modalRef = useRef(null);

  const openModal = () => {
    if (modalRef.current) {
      modalRef.current.showModal();
    }
  };
  return (
    <div className="w-11/12 flex justify-between">
      <button
        className="bg-black btn border-2 dark:bg-green-500 border-white px-4 py-2 rounded-xl text-white"
        onClick={openModal}>
        click
      </button>
      <dialog ref={modalRef} className="modal modal-bottom sm:modal-middle">
        <div className="modal-box bg-black border-2 border-zinc-600">
          <h1 className="font-bold text-white text-lg">Your data</h1>
          <p className="py-4">ESC</p>
          <form method="dialog">
            <h1>Hello</h1>
            {/* if there is a button in form, it will close the modal */}
            <button className="bg-black border-2 border-white px-4 py-2 rounded-xl text-white">
              Sumbit Message
            </button>
          </form>
        </div>
      </dialog>
      <div>Say hi</div>
      {/* <ThemeToggle /> */}
    </div>
  );
};
