"use client";

import { createContext, useContext, useState, ReactNode } from "react";
import { IWorkout } from "@/type";

interface WorkoutsContextProps {
  todaysPlane: IWorkout[];
  saveForLater: IWorkout[];

  addToTodaysPlan: (workout: IWorkout) => boolean;
  saveWorkoutForLater: (workout: IWorkout) => boolean;

  isInTodaysPlan: (id: number) => boolean;
  isSavedForLater: (id: number) => boolean;

  removeFromTodaysPlan: (id: number) => void;
  removeFromSaved: (id: number) => void;
}

const WorkoutsContext = createContext<WorkoutsContextProps | undefined>(
  undefined
);

export const WorkoutsProvider = ({ children }: { children: ReactNode }) => {
  const [todaysPlane, setTodaysPlane] = useState<IWorkout[]>([]);
  const [saveForLater, setSaveForLater] = useState<IWorkout[]>([]);

  const isInTodaysPlan = (id: number) => {
    return todaysPlane.some((item) => item.id === id);
  };
  const isSavedForLater = (id: number) => {
    return saveForLater.some((item) => item.id === id);
  };
  const addToTodaysPlan = (workout: IWorkout) => {
    if (isInTodaysPlan(workout.id)) {
      return false;
    }
    setTodaysPlane((prev) => [...prev, workout]);
    return true;
  };
  const saveWorkoutForLater = (workout: IWorkout) => {
    if (isSavedForLater(workout.id)) {
      return false;
    }
    setSaveForLater((prev) => [...prev, workout]);
    return true;
  };
  const removeFromTodaysPlan = (id: number) => {
    setTodaysPlane((prev) => prev.filter((item) => item.id !== id));
  };
  const removeFromSaved = (id: number) => {
    setSaveForLater((prev) => prev.filter((item) => item.id !== id));
  };
  return (
    <WorkoutsContext.Provider
      value={{
        todaysPlane,
        saveForLater,
        addToTodaysPlan,
        saveWorkoutForLater,
        isInTodaysPlan,
        isSavedForLater,
        removeFromTodaysPlan,
        removeFromSaved,
      }}
    >
      {children}
    </WorkoutsContext.Provider>
  );
};

export const useWorkouts = () => {
  const context = useContext(WorkoutsContext);
  if (!context) {
    throw new Error("useWorkouts must be used inside WorkoutsProvider");
  }
  return context;
};