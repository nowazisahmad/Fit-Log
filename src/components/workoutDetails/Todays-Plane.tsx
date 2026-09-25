"use client";

import { IWorkout } from "@/type";
import { useWorkouts } from "@/context/workoutcontext";
import { toast } from "react-toastify";

interface TodaysPlaneProps {
  workout: IWorkout;
}

const TodaysPlane = ({ workout }: TodaysPlaneProps) => {
  const { addToTodaysPlan, isInTodaysPlan } = useWorkouts();
  const alreadyAdded = isInTodaysPlan(workout.id);
  const handleAddToTodaysPlan = () => {
    const added = addToTodaysPlan(workout);
    if (!added) {
      toast.info("Already Add to today's plan");
      return;
    }
    toast.success(`${workout.name} Added to today's plan`);
  };

  return (
    <button
      type="button"
      onClick={handleAddToTodaysPlan}
      aria-disabled={alreadyAdded}
      className={`flex w-full items-center justify-center gap-2 rounded-[10px] px-4 py-2.5 text-sm font-medium transition
        ${
          alreadyAdded
            ? "cursor-not-allowed border border-[#30343d] bg-[#20242b] text-gray-500"
            : "bg-[#c8ff00] text-black hover:bg-[#d5ff33]"
        }
      `}
    >
      <span className="text-base">
        {alreadyAdded ? "✓" : "+"}
      </span>

      <span>
        {alreadyAdded
          ? "Added to today's plan"
          : "Add to today's plan"}
      </span>
    </button>
  );
};

export default TodaysPlane;