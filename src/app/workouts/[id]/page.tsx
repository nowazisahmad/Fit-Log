"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import {
  ArrowLeft,
  Bookmark,
  BookmarkCheck,
  CalendarPlus,
  Clock3,
  Flame,
  Dumbbell,
  Gauge,
  ListChecks,
  Star,
} from "lucide-react";

type Workout = {
  id: number;
  image: string;
  name: string;
  muscleGroups: string[];
  description: string;
  equipment: string;
  difficulty: string;
  sets: number;
  reps: number;
  duration: number;
  caloriesBurned: number;
  rating: number;
  instructions: string[];
};

const WorkoutDetailsPage = () => {
  const [workout, setWorkout] = useState<Workout | null>(null);
  const [addedToPlan, setAddedToPlan] = useState(false);
  const [saved, setSaved] = useState(false);

  useEffect(() => {
    fetch("https://api.abcz.workers.dev/api/fitlog")
      .then((res) => res.json())
      .then((data: Workout[]) => {
        const selectedWorkout = data.find((item) => item.id === 1);
        setWorkout(selectedWorkout ?? null);
      });
  }, []);

  const handleAddToPlan = () => {
    setAddedToPlan(true);
  };

  if (!workout) {
    return (
      <section className="min-h-screen bg-[#0b0d10] px-4 py-8 text-white">
        Loading workout...
      </section>
    );
  }

  const stats = [
    {
      label: "Equipment",
      value: workout.equipment,
      icon: Dumbbell,
    },
    {
      label: "Difficulty",
      value: workout.difficulty,
      icon: Gauge,
    },
    {
      label: "Sets",
      value: workout.sets,
      icon: ListChecks,
    },
    {
      label: "Reps",
      value: workout.reps,
      icon: ListChecks,
    },
    {
      label: "Duration",
      value: `${workout.duration} min`,
      icon: Clock3,
    },
    {
      label: "Calories",
      value: `${workout.caloriesBurned} kcal`,
      icon: Flame,
    },
    {
      label: "Rating",
      value: workout.rating,
      icon: Star,
    },
  ];
  return (
    <section className="min-h-screen bg-[#0b0d10] px-4 py-8 text-white sm:px-6 lg:px-10">
      <div className="mx-auto max-w-7xl">
        <button
          type="button"
          className="mb-6 flex items-center gap-2 text-sm font-medium text-gray-400 transition hover:text-white"
          onClick={() => window.history.back()}
        >
          <ArrowLeft size={18} />
          Back to workouts
        </button>
        <section className="overflow-hidden rounded-2xl border border-[#242832] bg-[#101318] shadow-2xl">
          <div className="grid lg:grid-cols-[48%_52%]">
            <div className="relative min-h-[420px] bg-[#15181e] lg:min-h-[680px]">
              <Image
                src={workout.image}
                alt={workout.name}
                className="absolute inset-0 h-full w-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
              <div className="absolute left-5 top-5 flex items-center gap-2 rounded-full border border-white/10 bg-black/50 px-3 py-2 text-sm backdrop-blur-md">
                <Star size={15} className="fill-yellow-400 text-yellow-400" />
                <span className="font-semibold">{workout.rating}</span>
              </div>
            </div>
            <div className="flex flex-col p-6 sm:p-8 lg:p-10">
              <div>
                <div className="mb-4 flex flex-wrap gap-2">
                  {workout.muscleGroups.map((group) => (
                    <span
                      key={group}
                      className="rounded-full bg-[#c8ff00] px-3 py-1 text-xs font-bold text-black"
                    >
                      {group}
                    </span>
                  ))}
                </div>
                <h1 className="text-3xl font-black uppercase tracking-tight text-white sm:text-4xl">
                  {workout.name}
                </h1>
                <p className="mt-3 max-w-2xl text-sm leading-6 text-gray-400">
                  {workout.description}
                </p>
              </div>
              <div className="mt-8 overflow-hidden rounded-xl border border-[#292e38] bg-[#151920]">
                {stats.map((stat, index) => {
                  const Icon = stat.icon;
                  return (
                    <div
                      key={stat.label}
                      className={`flex min-h-[51px] items-center justify-between px-4 py-3 ${
                        index !== stats.length - 1
                          ? "border-b border-[#292e38]"
                          : ""
                      }`}
                    >
                      <div className="flex items-center gap-3">
                        <Icon size={14} className="text-gray-500" />
                        <span className="text-[10px] font-bold uppercase tracking-wider text-gray-400">
                          {stat.label}
                        </span>
                      </div>
                      <span className="text-sm font-medium text-gray-200">
                        {stat.value}
                      </span>
                    </div>
                  );
                })}
              </div>
              <div className="mt-7">
                <h2 className="text-sm font-black uppercase tracking-wide text-white">
                  Instructions
                </h2>
                <ol className="mt-4 space-y-3">
                  {workout.instructions.map((instruction, index) => (
                    <li
                      key={instruction}
                      className="flex gap-3 text-sm leading-5 text-gray-400"
                    >
                      <span className="shrink-0 text-xs font-bold text-gray-600">
                        {index + 1}.
                      </span>

                      <span>{instruction}</span>
                    </li>
                  ))}
                </ol>
              </div>
              <div className="mt-auto flex flex-col gap-3 pt-8 sm:flex-row">
                <button
                  type="button"
                  onClick={handleAddToPlan}
                  className={`flex h-11 flex-1 items-center justify-center gap-2 rounded-lg px-5 text-sm font-bold transition ${
                    addedToPlan
                      ? "bg-[#9dcc00] text-black"
                      : "bg-[#c8ff00] text-black hover:bg-[#d4ff3b]"
                  }`}
                >
                  <CalendarPlus size={17} />
                  {addedToPlan
                    ? "Added to today's plan"
                    : "Add to today's plan"}
                </button>
                <button
                  type="button"
                  onClick={() => setSaved((value) => !value)}
                  className="flex h-11 items-center justify-center gap-2 rounded-lg border border-[#363b45] bg-transparent px-5 text-sm font-semibold text-gray-300 transition hover:border-gray-500 hover:bg-[#191c22] hover:text-white"
                >
                  {saved ? <BookmarkCheck size={17} /> : <Bookmark size={17} />}
                  {saved ? "Saved" : "Save for later"}
                </button>
              </div>
            </div>
          </div>
        </section>
      </div>
    </section>
  );
};

export default WorkoutDetailsPage;
