import Image from "next/image";
import { IWorkout } from "@/type";

interface IworkoutDetailsPageProps {
  params: Promise<{
    id: string;
  }>;
}

const getWorkout = async () => {
  try{

    const response = await fetch("https://api.abcz.workers.dev/api/fitlog");
    const data = await response.json();
    return data;
  }catch(error){
    console.error("Error fetching workout data:", error);
    return [];
  }
};

const WorkoutDetailsPage = async ({ params }: IworkoutDetailsPageProps) => {
  const { id } = await params;
  const workoutsData = await getWorkout();
  const workout = workoutsData.find((workout: IWorkout) => String(workout.id) === String(id),) as IWorkout;
  const stats = [
    {
      label: "EQUIPMENT",
      value: workout.equipment,
    },
    {
      label: "DIFFICULTY",
      value: workout.difficulty,
    },
    {
      label: "SETS",
      value: workout.sets,
    },
    {
      label: "REPS",
      value: workout.reps,
    },
    {
      label: "DURATION",
      value: `${workout.duration} min`,
    },
    {
      label: "CALORIES",
      value: `${workout.caloriesBurned} kcal`,
    },
    {
      label: "RATING",
      value: workout.rating,
    },
  ];
    return (
      <main className="min-h-screen bg-[#0b0d10] px-4 py-8 text-white sm:px-6 lg:px-10">
      <div className="mx-auto max-w-7xl">

        {/* Main Card */}
        <section className="overflow-hidden rounded-2xl border border-[#242832] bg-[#101318] shadow-2xl">
          <div className="grid lg:grid-cols-[48%_52%]">

            {/* ================= LEFT ================= */}
            <div className="relative min-h-105 bg-[#15181e] lg:min-h-170">
              <Image
                src={workout.image}
                alt={workout.name}
                fill
                sizes="(max-width: 1024px) 100vw, 48vw"
                className="absolute inset-0 h-full w-full object-cover"
              />

              {/* Image overlay */}
              <div className="absolute inset-0 bg-linear-to-t from-black/40 via-transparent to-transparent" />
            </div>

            {/* ================= RIGHT ================= */}
            <div className="flex flex-col p-6 sm:p-8 lg:p-10">

              {/* Header */}
              <div>
                {/* Muscle Groups */}
                <div className="mb-4 flex flex-wrap gap-2">
                  {workout.muscleGroups.map((group) => (
                    <span
                      key={group}
                      className="rounded-full bg-[#c8ff00] px-3 py-1 text-[10px] font-bold text-black"
                    >
                      {group}
                    </span>
                  ))}
                </div>

                {/* Title */}
                <h1 className="text-3xl font-black uppercase tracking-tight text-white sm:text-4xl">
                  {workout.name}
                </h1>

                {/* Description */}
                <p className="mt-3 max-w-2xl text-sm leading-6 text-gray-400">
                  {workout.description}
                </p>
              </div>

              {/* ================= STATS ================= */}
              <div className="mt-8 overflow-hidden rounded-xl border border-[#292e38] bg-[#151920]">
                {stats.map((stat, index) => (
                  <div
                    key={stat.label}
                    className={`flex min-h-12.75 items-center justify-between px-4 py-3 ${
                      index !== stats.length - 1
                        ? "border-b border-[#292e38]"
                        : ""
                    }`}
                  >
                    <span className="text-[10px] font-bold uppercase tracking-wider text-gray-400">
                      {stat.label}
                    </span>

                    <span className="text-sm font-medium text-gray-200">
                      {stat.value}
                    </span>
                  </div>
                ))}
              </div>

              {/* ================= INSTRUCTIONS ================= */}
              <div className="mt-7">
                <h2 className="text-sm font-black uppercase tracking-wide text-white">
                  INSTRUCTIONS
                </h2>

                <ol className="mt-4 space-y-3">
                  {workout.instructions.map((instruction, index) => (
                    <li
                      key={instruction}
                      className="flex gap-3 text-sm leading-5 text-gray-400"
                    >
                      <span className="shrink-0 text-xs font-medium text-gray-500">
                        {index + 1}.
                      </span>

                      <span>{instruction}</span>
                    </li>
                  ))}
                </ol>
              </div>

              {/* ================= BUTTONS ================= */}
              <div className="mt-auto flex flex-col gap-3 pt-8 sm:flex-row">

              

              </div>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
};

export default WorkoutDetailsPage;
