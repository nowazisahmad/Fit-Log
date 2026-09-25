"use client";

import { useState } from "react";
import { useWorkouts } from "@/context/workoutcontext";
import EmptyPlan from "@/components/shared/EmptyPlan";
import WorkoutPlanCard from "@/components/shared/WorkoutPlanCard";

const MyPlanPage = () => {
  const { todaysPlane, saveForLater } = useWorkouts();
  const [activeTab, setActiveTab] = useState<"today" | "saved">("today");
  const currentWorkouts = activeTab === "today" ? todaysPlane : saveForLater;
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
            <p className="mt-1 text-2xl font-bold text-[#c8ff00]">
              {todaysPlane.length}
            </p>
          </div>
          <div className="border-b border-[#22262e] p-6 md:border-b-0 md:border-r">
            <p className="text-xs text-gray-500">Minutes</p>
            <p className="mt-1 text-2xl font-bold text-white">
              {todaysPlane.reduce(
                (total, workout) => total + workout.duration,
                0,
              )}
            </p>
          </div>
          <div className="p-6">
            <p className="text-xs text-gray-500">Calories</p>
            <p className="mt-1 text-2xl font-bold text-white">
              {todaysPlane.reduce(
                (total, workout) => total + workout.caloriesBurned,
                0,
              )}
            </p>
          </div>
        </div>
        <div className="mt-7">
          <div className="inline-flex rounded-lg bg-[#171a20] p-1">
            <button
              type="button"
              onClick={() => setActiveTab("today")}
              className={`rounded-md px-4 py-2 text-sm transition ${
                activeTab === "today"
                  ? "bg-[#252a32] text-white"
                  : "text-gray-500"
              }`}
            >
              Todays Plan
            </button>
            <button
              type="button"
              onClick={() => setActiveTab("saved")}
              className={`rounded-md px-4 py-2 text-sm transition ${
                activeTab === "saved"
                  ? "bg-[#252a32] text-white"
                  : "text-gray-500"
              }`}
            >
              Saved
            </button>
          </div>
        </div>
        <div className="mt-5">
          {currentWorkouts.length === 0 ? (
            <EmptyPlan saved={activeTab === "saved"} />
          ) : (
            <div className="space-y-2">
              {currentWorkouts.map((workout) => (
                <WorkoutPlanCard
                  key={workout.id}
                  workout={workout}
                  type={activeTab}
                />
              ))}
            </div>
          )}
        </div>
      </div>
    </main>
  );
};

export default MyPlanPage;
