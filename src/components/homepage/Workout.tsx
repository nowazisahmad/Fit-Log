
import { IWorkout } from "@/type";
import WorkoutCard from "../shared/WorkoutCard";

const getWorkout = async () => {
  try{

    const response = await fetch("https://api.abcz.workers.dev/api/fitlog");
    const data = await response.json();
    return data;
  }catch(error){
    console.error("Error fetching workout data:", error);
    return [];
  }
};

const Workout = async() => {
    const workoutData = await getWorkout();
  return (
    <section className="container mx-auto my-[70px] px-4">
       <div className="mb-10">
        <h2 className="mb-2 text-3xl font-bold">
          THE LIBRARY
        </h2>
        <p className="text-sm font-semibold text-slate-500">
          Twelve lifts covering every major muscle group.
        </p>
      </div>
      <div className="grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {workoutData.map((Workout: IWorkout, ind: number) => {
          return <WorkoutCard key={ind} workout={Workout} />;
        })}
      </div>
    </section>
  )
};

export default Workout;
