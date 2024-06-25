export const Footer = () => {
  return (
    <div className="flex justify-between py-28 text-white">
      <div className="flex flex-col justify-between">
        <div>
          <p className="text-8xl lining-nums">LET'S START</p>
          <p className="text-8xl ml-72 lining-nums">CREATING</p>
          <p className="text-8xl ml-24 lining-nums">TOGETHER</p>
          <div className="mt-12 w-12 h-12 bg-white flex items-center justify-center relative animate-spin-slow">
            <div className="absolute w-4 h-4 bg-black top-0 left-0 rounded-br-lg"></div>
            <div className="absolute w-4 h-4 bg-black top-0 right-0 rounded-bl-lg"></div>
            <div className="absolute w-4 h-4 bg-black bottom-0 right-0 rounded-tl-lg"></div>
            <div className="absolute w-4 h-4 bg-black bottom-0 left-0 rounded-tr-lg"></div>
            <div className="w-4 h-4 bg-black top-0 right-0 rounded-lg"></div>
          </div>
        </div>
        <div>
          <p>say hi-</p>
          <div className="flex gap-4">
            <a href="https://www.facebook.com/">Facebook</a>
            <a href="https://www.github.com/">GitHub</a>
            <a href="https://www.instagram.com/">Instagram</a>
            <a href="https://www.youtube.com/">YouTube</a>
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-4 border border-zinc-600 px-8 py-4 rounded-2xl">
        <label htmlFor="">Your Data</label>
        <div className="flex justify-between">
          <input
            type="text"
            placeholder="Name"
            className="border w-[19rem] border-zinc-600 px-4 rounded-xl bg-black py-4"
          />
          <input
            type="text"
            placeholder="Email"
            className="border w-[19rem] border-zinc-600 px-4 rounded-xl bg-black py-4"
          />
        </div>
        <label htmlFor="">You are interested in</label>
        <div className="flex gap-4">
          <button className="border border-zinc-800 px-8 py-4 rounded-full">
            UX/UI Design
          </button>
          <button className="border border-zinc-800 px-8 py-4 rounded-full">
            Web-design
          </button>
          <button className="border border-zinc-800 px-8 py-4 rounded-full">
            Web-development
          </button>
        </div>
        <div className="flex gap-4">
          <button className="border border-zinc-800 px-8 py-4 rounded-full">
            Website creation
          </button>
          <button className="border border-zinc-800 px-8 py-4 rounded-full">
            Animation
          </button>
          <button className="border border-zinc-800 px-8 py-4 rounded-full">
            Other
          </button>
        </div>
        <label htmlFor="">Budget in USD:</label>
        <div className="flex gap-4">
          <button className="border border-zinc-800 px-8 py-4 rounded-full">
            $1k-3k
          </button>
          <button className="border border-zinc-800 px-8 py-4 rounded-full">
            $3k-5k
          </button>
          <button className="border border-zinc-800 px-8 py-4 rounded-full">
            $5k-10k
          </button>
        </div>
        <input
          type="text"
          placeholder="Project details"
          className="border border-zinc-800 px-4 rounded-xl bg-black py-4"
        />
        <button className="w-[40rem] border-2 rounded-xl bg-black text-white py-4">
          Submit Message
        </button>
      </div>
    </div>
  );
};
