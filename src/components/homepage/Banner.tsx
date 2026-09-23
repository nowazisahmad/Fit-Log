import banner from "@/assets/banner.png"
import Image from "next/image";

const Banner = () => {
  return (
    <div className="hero bg-base-300 rounded-2xl min-h-screen flex flex-col  md:flex-row md:justify-between lg:flex lg:justify-between px-15">
        <div>
          <h4 className="text-[12px] text-green-300 font-normal my-5">WORKOUT LIBRARY</h4>
          <h2 className="text-4xl font-bold my-5">TRAIN WITH INTENT. LOG <br/> EVERY SET.</h2>
          <h5 className="text-[12px] font-leight my-5">FitLog is a dark, no-nonsense gym companion: pick a lift, lock it into todays plan, and watch the weeks work add up.</h5>
          <button className="btn bg-green-300 text-slate-900 my-5">BROWSE WORKOUTS</button>
        </div>
      <div>
        <Image className="max-w-sm rounded-lg shadow-2xl" src={banner} alt="Banner Image"/>
      </div>
    </div>
  );
};

export default Banner;
