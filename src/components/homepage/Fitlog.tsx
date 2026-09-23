import { IFitlog } from "@/type";
import FitlogCard from "../shared/FitlogCard";

const getFitlog = async () => {
  try {
    const res = await fetch("https://api.abcz.workers.dev/api/fitlog");
    const data = await res.json();
    return data;
  } catch (error) {
    console.error("Error fetching fitlog data:", error);
    return [];
  }
};

const Fitlog = async() => {
    const fitlogData = await getFitlog();
  return (
    <section className="container mx-auto my-[70px] px-4">
       <div className="mb-10 text-center">
        <h2 className="mb-2 text-3xl font-bold">
          THE LIBRARY
        </h2>
        <p className="text-sm font-semibold text-slate-800">
          Twelve lifts covering every major muscle group.
        </p>
      </div>
      {/* <div className="grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {fitlogData.map((fitlog: IFitlog, ind: number) => {
          return <FitlogCard key={ind} fitlog={fitlog} />;
        })}
      </div> */}
    </section>
  )
};

export default Fitlog;
