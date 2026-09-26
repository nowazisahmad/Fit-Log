"use client";

import { useState } from "react";
import { useWorkouts } from "@/context/workoutcontext";
import EmptyPlan from "@/components/shared/EmptyPlan";
import WorkoutPlanCard from "@/components/shared/WorkoutPlanCard";
import { IWorkout } from "@/type";

const MyPlanPage = () => {
  const { todaysPlan, saveForLater } = useWorkouts();
  const [activeTab, setActiveTab] = useState<"today" | "saved">("today");
  const [sortBy, setSortBy] = useState<"Duration" | "Calories" | "Rating">(
    "Duration",
  );
  const sortWorkouts = (workouts: IWorkout[]) => {
    const sortedWorkouts = [...workouts];
    if (sortBy === "Duration") {
      sortedWorkouts.sort((a, b) => b.duration - a.duration);
    } else if (sortBy === "Calories") {
      sortedWorkouts.sort((a, b) => b.caloriesBurned - a.caloriesBurned);
    } else if (sortBy === "Rating") {
      sortedWorkouts.sort((a, b) => b.rating - a.rating);
    }
    return sortedWorkouts;
  };
  const sortedTodaysPlan = sortWorkouts(todaysPlan);
  const sortedSaved = sortWorkouts(saveForLater);
  return (
    <main className="min-h-screen bg-[#0c0e12] px-4 py-8 text-white md:px-8">
      <div className="mx-auto max-w-6xl">
        <div>
          <h1 className="text-3xl font-black uppercase">MY PLAN</h1>
          <p className="mt-1 text-sm text-gray-500">
            Cap of five lifts for today. Finish them, then load more.
          </p>
        </div>
        <div className="mt-8 grid grid-cols-1 overflow-hidden rounded-xl border border-[#22262e] bg-[#12151b] md:grid-cols-3">
          <div className="border-b border-[#22262e] p-6 md:border-b-0 md:border-r">
            <p className="text-xs text-gray-500">Exercises</p>
            <p className="mt-1 text-2xl font-bold text-green-300">
              {todaysPlan.length}
            </p>
          </div>
          <div className="border-b border-[#22262e] p-6 md:border-b-0 md:border-r">
            <p className="text-xs text-gray-500">Minutes</p>
            <p className="mt-1 text-2xl font-bold text-white">
              {todaysPlan.reduce(
                (total, workout) => total + workout.duration,
                0,
              )}
            </p>
          </div>
          <div className="p-6">
            <p className="text-xs text-gray-500">Calories</p>
            <p className="mt-1 text-2xl font-bold text-white">
              {todaysPlan.reduce(
                (total, workout) => total + workout.caloriesBurned,
                0,
              )}
            </p>
          </div>
        </div>
        <div className="mt-7">
          <div className="flex items-center justify-between border-b border-gray-800 pb-4">
            <div role="tablist" className="flex gap-6">
              <button
                role="tab"
                onClick={() => setActiveTab("today")}
                className={`pb-2 text-sm font-medium transition-colors cursor-pointer ${
                  activeTab === "today"
                    ? "text-white border-b-2 border-white"
                    : "text-gray-500 border-transparent hover:text-gray-300"
                }`}
              >
                Today's Plan
              </button>
              <button
                role="tab"
                onClick={() => setActiveTab("saved")}
                className={`pb-2 text-sm font-medium transition-colors cursor-pointer ${
                  activeTab === "saved"
                    ? "text-white border-b-2 border-white"
                    : "text-gray-500 border-transparent hover:text-gray-300"
                }`}
              >
                Saved
              </button>
            </div>
            <div className="shrink-0">
              <span>Sort By </span> 
              <select
                value={sortBy}
                onChange={(e) =>
                  setSortBy(
                    e.target.value as "Duration" | "Calories" | "Rating",
                  )
                }
                className="bg-transparent border border-gray-700 text-gray-300 text-sm rounded-md px-3 py-1.5 focus:outline-none focus:border-white"
              >
                <option value="Duration" className="bg-[#171a20]">
                  Duration
                </option>
                <option value="Calories" className="bg-[#171a20]">
                  Calories
                </option>
                <option value="Rating" className="bg-[#171a20]">
                  Rating
                </option>
              </select>
            </div>
          </div>
          <div className="mt-6 flex flex-col gap-4">
            {activeTab === "today" ? (
              sortedTodaysPlan.length > 0 ? (
                sortedTodaysPlan.map((workout) => (
                  <WorkoutPlanCard
                    key={workout.id}
                    workout={workout}
                    type="today"
                  />
                ))
              ) : (
                <EmptyPlan />
              )
            ) : sortedSaved.length > 0 ? (
              sortedSaved.map((workout) => (
                <WorkoutPlanCard
                  key={workout.id}
                  workout={workout}
                  type="saved"
                />
              ))
            ) : (
              <EmptyPlan saved={true} />
            )}
          </div>
        </div>
      </div>
    </main>
  );
};

export default MyPlanPage;
