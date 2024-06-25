export const Carousel = () => {
  return (
    <div className="h-20 relative overflow-hidden">
      <div className="h-20 animate-loop-scroll-carousel bg-red-200">
        <div className="w-[300%] flex gap-20 h-20 bg-green-200 -left-full absolute">
          <div className="bg-blue-700 w-96"></div>
          <div className="bg-blue-700 w-96"></div>
          <div className="bg-blue-700 w-96"></div>
          <div className="bg-blue-700 w-96"></div>
          <div className="bg-blue-700 w-96"></div>
          <div className="bg-blue-700 w-96"></div>
          <div className="bg-blue-700 w-96"></div>
          <div className="bg-blue-700 w-96"></div>
          <div className="bg-blue-700 w-96"></div>
          <div className="bg-cyan-700 w-96"></div>
        </div>
      </div>
    </div>
  );
};
