"use client";

import Link from "next/link";
import { IWorkout } from "@/type";
import { useWorkouts } from "@/context/workoutcontext";
import { toast } from "react-toastify";
import Image from "next/image";
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

interface WorkoutPlanCardProps {
  workout: IWorkout;
  type: "today" | "saved";
}

const WorkoutPlanCard = ({ workout, type }: WorkoutPlanCardProps) => {
  const { removeFromTodaysPlan, removeFromSaved } = useWorkouts();

  const handleRemove = () => {
    if (type === "saved") {
      removeFromSaved(workout.id);
      toast.success(`${workout.name} Removed from Saved`);
      return;
    }
    removeFromTodaysPlan(workout.id);
    toast.success(`${workout.name} Removed from Today's Plan`);
  };
  const handleMarkAsDone = () => {
    if (type === "saved") {
      removeFromSaved(workout.id);
      return;
    }
    removeFromTodaysPlan(workout.id);
    toast.success(`${workout.name} Mark As Done`);
  }
  return (
    <div className="flex flex-col gap-4 rounded-xl border border-[#22262e] bg-[#14171d] p-3 sm:flex-row sm:items-center">
      <Image
        src={workout.image}
        alt={workout.name}
        width={88}
        height={64}
        className="h-[64px] w-[88px] shrink-0 rounded-lg object-cover"
      />
      <div className="min-w-0 flex-1">
        <h3 className="truncate text-sm font-bold uppercase text-white">
          {workout.name}
        </h3>
        <p className="mt-1 text-xs text-gray-500">{workout.equipment}</p>
        <div className="my-5 h-px bg-gray-700" />
        <div className="flex items-center gap-5 text-gray-300">
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
      <div className="flex shrink-0 items-center gap-2">
        <Link
          href={`/workouts/${workout.id}`}
          className="rounded-lg border border-[#30353d] px-3 py-2 text-xs text-gray-300"
        >
          View Details
        </Link>
        {type === "today" && (
          <button 
          onClick={() => handleMarkAsDone()}
          className="rounded-lg bg-green-300 px-3 py-2 text-xs font-semibold text-black">
            ✓ Mark as Done
          </button>
        )}
        <button
          onClick={() => handleRemove()}
          className="px-2 text-lg text-gray-500"
          aria-label={`Remove ${workout.name}`}
        >
          ×
        </button>
      </div>
    </div>
  );
};

export default WorkoutPlanCard;
