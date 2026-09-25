"use client";

import Link from "next/link";
import { IWorkout } from "@/type";
import { useWorkouts } from "@/context/workoutcontext";
import { toast } from "react-toastify";
import Image from "next/image";

interface WorkoutPlanCardProps {
  workout: IWorkout;
  type: "today" | "saved";
}

const WorkoutPlanCard = ({
  workout,
  type,
}: WorkoutPlanCardProps) => {
  const {
    removeFromTodaysPlan,
    removeFromSaved,
  } = useWorkouts();

  const handleRemove = () => {
    if (type === "saved") {
      removeFromSaved(workout.id);
      toast.success(`${workout.name} removed from saved`);
      return;
    }
    removeFromTodaysPlan(workout.id);
    toast.success(`${workout.name} removed from today's plan`);
  };
  return (
    <div className="flex flex-col gap-4 rounded-xl border border-[#22262e] bg-[#14171d] p-3 transition hover:border-[#30353e] sm:flex-row sm:items-center">
      <Image
        src={workout.image}
        alt={workout.name}
        className="h-20 w-full rounded-lg object-cover sm:w-28"
      />
      <div className="min-w-0 flex-1">
        <h3 className="truncate text-sm font-bold uppercase text-white">
          {workout.name}
        </h3>
        <p className="mt-1 text-xs text-gray-500">
          {workout.equipment}
        </p>
        <div className="mt-2 flex flex-wrap gap-3 text-xs text-gray-400">
          <span>
            {workout.duration} min
          </span>
          <span>
            {workout.caloriesBurned} kcal
          </span>
          <span>
            {workout.rating}
          </span>
        </div>
      </div>
      <div className="flex shrink-0 items-center gap-2">
        <Link
          href={`/workouts/${workout.id}`}
          className="rounded-lg border border-[#30353d] px-3 py-2 text-xs text-gray-300 transition hover:bg-[#20242b]"
        >
          View Details
        </Link>
        {type === "today" && (
          <button
            type="button"
            className="rounded-lg bg-[#c8ff00] px-3 py-2 text-xs font-semibold text-black"
          >
            ✓ Mark as Done
          </button>
        )}
        <button
          type="button"
          onClick={handleRemove}
          className="px-2 text-lg text-gray-500 transition hover:text-white"
          aria-label={`Remove ${workout.name}`}
        >
          ×
        </button>
      </div>
    </div>
  );
};

export default WorkoutPlanCard;