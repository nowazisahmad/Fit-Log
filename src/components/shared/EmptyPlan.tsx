"use client";

import Link from "next/link";

interface EmptyPlanProps {
  saved?: boolean;
}

const EmptyPlan = ({ saved = false }: EmptyPlanProps) => {
  return (
    <div className="flex min-h-55 flex-col items-center justify-center rounded-xl border border-dashed border-[#272b33] bg-[#0f1115] px-6 text-center">
      <h3 className="text-xl font-extrabold tracking-wide text-white">
        NOTHING HERE YET
      </h3>
      <p className="mt-2 max-w-md text-sm text-gray-500">
        {saved
          ? "Save workouts for later and they will appear here."
          : "Browse the library and add a lift to get today moving."}
      </p>
      {!saved && (
        <Link
          href="/workouts"
          className="mt-5 rounded-full bg-[#c8ff00] px-5 py-2 text-sm font-semibold text-black transition hover:bg-[#d8ff45]"
        >
          Go to workouts
        </Link>
      )}
    </div>
  );
};

export default EmptyPlan;