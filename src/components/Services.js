"use client";
import { useTypewriter, Cursor } from "react-simple-typewriter";

export const Services = () => {
  const [text] = useTypewriter({
    words: ["SERVICE", "BENORD"],
    loop: {},
    typeSpeed: 120,
    deleteSpeed: 80,
    delaySpeed: 3000,
  });

  return (
    <div className="flex-col w-full">
      {/* <div className="divider divider-primary">Hello Ben</div> */}
      <div className="bg-black text-white text-[240px] font-ben text-center">
        B_{text}
        <Cursor cursorColor="#F0B63A" cursorStyle="<" />
      </div>
    </div>
  );
};

export default Services;
