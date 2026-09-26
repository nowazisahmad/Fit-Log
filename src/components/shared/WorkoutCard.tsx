import { IWorkout } from "@/type";
import Image from "next/image";
import Link from "next/link";
const Icon = ({ type }: { type: "clock" | "flame" | "star" }) => (
  <svg
    aria-hidden="true"
    className="h-5 w-5"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
    strokeWidth="2"
  >
    {type === "clock" && (
      <>
        <circle cx="12" cy="12" r="9" />
        <path d="M12 7v5l3 2" />
      </>
    )}
    {type === "flame" && (
      <path d="M12 3c1.5 3 5 4.5 5 9a5 5 0 1 1-10 0c0-2.5 1.5-4.5 3-6.5.5 2 1.5 2.5 2 3.5.5-1.5.5-3.5 0-6Z" />
    )}
    {type === "star" && (
      <path d="m12 3 2.8 5.7 6.2.9-4.5 4.4 1.1 6.2-5.6-2.9-5.6 2.9 1.1-6.2L3 9.6l6.2-.9L12 3Z" />
    )}
  </svg>
);

interface WorkoutCardProps {
  workout: IWorkout;
}

const WorkoutCard = ({ workout }: WorkoutCardProps) => {
  return (
    <Link href={`/workouts/${workout.id}`}>
    <div className="group overflow-hidden rounded-2xl bg-[#15171d] text-white shadow-lg">
      <div className="relative h-62 w-full overflow-hidden">
        <Image
          src={workout.image}
          alt={workout.name}
          fill
          className="object-cover"
        />
      </div>
      <div className="p-7">
        <div className="mb-5 flex flex-wrap gap-2">
          {workout.muscleGroups.map((muscle) => (
            <span
              key={muscle}
              className="rounded-full bg-green-300 px-4 py-1.5 text-sm font-bold uppercase tracking-wide text-black"
            >
              {muscle}
            </span>
          ))}
        </div>
        <h3 className="text-2xl font-extrabold uppercase tracking-wide">
          {workout.name}
        </h3>
        <p className="mt-2 text-base text-gray-400">
          {workout.equipment}
        </p>
        <div className="my-5 h-px bg-gray-700" />
        <div className="flex items-center justify-between text-gray-300">
          <div className="flex items-center gap-2">
            <Icon type="clock" />
            <span>{workout.duration} min</span>
          </div>
          <div className="flex items-center gap-2">
            <Icon type="flame" />
            <span>{workout.caloriesBurned} kcal</span>
          </div>
          <div className="flex items-center gap-2">
            <Icon type="star" />
            <span>{workout.rating}</span>
          </div>
        </div>
      </div>
    </div>
    </Link>
  );
};

export default WorkoutCard;