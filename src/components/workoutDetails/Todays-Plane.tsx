"use client";

import { IWorkout } from "@/type";
import { useWorkouts } from "@/context/workoutcontext";
import { toast } from "react-toastify";
import { FaRegCalendarPlus } from "react-icons/fa";

interface TodaysPlanProps {
  workout: IWorkout;
}

const TodaysPlan = ({ workout }: TodaysPlanProps) => {
  const { addToTodaysPlan, isInTodaysPlan } = useWorkouts();
  const alreadyAdded = isInTodaysPlan(workout.id);
  const handleAddToTodaysPlan = () => {
    const added = addToTodaysPlan(workout);
    if (!added) {
      toast.info("Already Added");
      return;
    }
    toast.success(`${workout.name} Added to today's plan`);
  };

  return (
    <button
      type="button"
      onClick={() => handleAddToTodaysPlan()}
      aria-disabled={alreadyAdded}
      className={`flex w-full items-center justify-center gap-2 rounded-[10px] px-4 py-2.5 text-sm font-medium transition
        ${
          alreadyAdded
            ? "cursor-not-allowed border border-[#30343d] bg-[#20242b] text-gray-500"
            : "bg-green-300 text-black"
        }
      `}
    >
      <span className="text-base">
        {alreadyAdded ? "✓" : <FaRegCalendarPlus />}
      </span>

      <span>
        {alreadyAdded
          ? "Added to today's plan"
          : "Add to today's plan"}
      </span>
    </button>
  );
};

export default TodaysPlan;