import { Separator } from "@heroui/react";
import Link from "next/link";

const Banner = () => {
  return (
    <div className="bg-[url('/assets/Banner.png')] bg-cover bg-center text-white flex flex-col justify-between items-center min-h-[500px] sm:min-h-[600px] lg:min-h-[650px]">

      <div className="flex-1 flex flex-col justify-center items-center text-center px-4 sm:px-10 py-12 gap-4 sm:gap-6 max-w-4xl mx-auto">
        <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold leading-tight">
          Discover Your <br /> Next Adventure
        </h1>

        <p className="text-base sm:text-lg lg:text-2xl max-w-2xl opacity-90">
          Explore breathtaking destinations and create unforgettable memories
          with our curated travel experiences.
        </p>

        <div className="flex flex-wrap justify-center gap-3 sm:gap-5 mt-2">
          <Link href="/destinations">
            <button className="uppercase bg-cyan-500 hover:bg-cyan-600 active:scale-95 transition-all px-6 py-3 text-sm sm:text-base font-semibold tracking-wide cursor-pointer">
              Explore Now
            </button>
          </Link>
          <Link href="/destinations">
            <button className="uppercase px-6 py-3 bg-white/30 hover:bg-white/45 active:scale-95 transition-all text-sm sm:text-base font-semibold tracking-wide cursor-pointer backdrop-blur-sm">
              View Destinations
            </button>
          </Link>
        </div>
      </div>

 
      <div className="w-full bg-white/30 backdrop-blur-md">
      
        <div className="hidden sm:flex justify-between items-stretch w-full">
          <div className="px-6 py-4 flex-1">
            <h3 className="text-sm font-semibold">Location</h3>
            <p className="text-xs opacity-80 mt-0.5">Address, City or Zip</p>
          </div>

          <div className="w-px bg-white/30 my-3" />

          <div className="px-6 py-4 flex-1">
            <h3 className="text-sm font-semibold">Date / Duration</h3>
            <p className="text-xs opacity-80 mt-0.5">Anytime / 3 Days</p>
          </div>

          <div className="w-px bg-white/30 my-3" />

          <div className="px-6 py-4 flex-1">
            <h3 className="text-sm font-semibold">Budget</h3>
            <p className="text-xs opacity-80 mt-0.5">$0 – $3,000</p>
          </div>

          <div className="w-px bg-white/30 my-3" />

          <div className="px-6 py-4 flex-1">
            <h3 className="text-sm font-semibold">People</h3>
            <p className="text-xs opacity-80 mt-0.5">5 – 10</p>
          </div>

          <button className="bg-cyan-500 hover:bg-cyan-600 active:scale-95 transition-all px-8 font-semibold tracking-wide text-sm uppercase">
            Search
          </button>
        </div>

        
        <div className="sm:hidden">
          <div className="grid grid-cols-2 divide-x divide-y divide-white/20">
            <div className="px-4 py-3">
              <h3 className="text-xs font-semibold">Location</h3>
              <p className="text-[11px] opacity-75 mt-0.5">Address, City or Zip</p>
            </div>
            <div className="px-4 py-3">
              <h3 className="text-xs font-semibold">Date / Duration</h3>
              <p className="text-[11px] opacity-75 mt-0.5">Anytime / 3 Days</p>
            </div>
            <div className="px-4 py-3">
              <h3 className="text-xs font-semibold">Budget</h3>
              <p className="text-[11px] opacity-75 mt-0.5">$0 – $3,000</p>
            </div>
            <div className="px-4 py-3">
              <h3 className="text-xs font-semibold">People</h3>
              <p className="text-[11px] opacity-75 mt-0.5">5 – 10</p>
            </div>
          </div>
          <button className="w-full bg-cyan-500 hover:bg-cyan-600 active:scale-95 transition-all py-3 font-semibold tracking-widest text-sm uppercase">
            Search
          </button>
        </div>
      </div>
    </div>
  );
};

export default Banner;