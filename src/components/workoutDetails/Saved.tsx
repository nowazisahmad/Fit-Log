"use client";

import { IWorkout } from "@/type";
import { useWorkouts } from "@/context/workoutcontext";
import { toast } from "react-toastify";
import { FaRegBookmark } from "react-icons/fa";

interface SavedProps {
  workout: IWorkout;
}

const Saved = ({ workout }: SavedProps) => {
  const { saveWorkoutForLater, isSavedForLater } = useWorkouts();

  const alreadySaved = isSavedForLater(workout.id);

  const handleSaveForLater = () => {
    const saved = saveWorkoutForLater(workout);

    if (!saved) {
      toast.info("Already Saved");
      return;
    }

    toast.success(`${workout.name} Saved for Later`);
  };

  return (
    <button
      type="button"
      onClick={() => handleSaveForLater()}
      aria-disabled={alreadySaved}
      className={`flex w-full items-center justify-center gap-2 rounded-[10px] border px-4 py-2.5 text-sm font-medium transition ${
        alreadySaved
          ? "cursor-not-allowed border-[#30343d] bg-[#20242b] text-gray-500"
          : "border-[#353942] bg-transparent text-white hover:bg-[#1b1f26]"
      }`}
    >
      <span>{alreadySaved ? "✓" : <FaRegBookmark />}</span>

      <span>
        {alreadySaved ? "Saved for later" : "Save for later"}
      </span>
    </button>
  );
};

export default Saved;