import { WorkCard } from "./assets/work-card";
export const Works = () => {
  return (
    <div className="text-center text-white">
      <h1 className="text-9xl">WORKS</h1>
      <div className="grid grid-cols-2 grid-rows-4 w-full h-48 gap-2">
        <div className="bg-cyan-400 col-span-2 row-span-2"></div>
        <div className="bg-cyan-400"></div>
        <div className="bg-cyan-400"></div>
        <div className="bg-cyan-400"></div>
        <div className="bg-cyan-400"></div>
      </div>
      <WorkCard title="Tyne Partners" year="2024"></WorkCard>
    </div>
  );
};
