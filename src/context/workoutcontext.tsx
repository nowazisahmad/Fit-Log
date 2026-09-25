import { IWorkout } from "@/type";
import { createContext, ReactNode, useState } from "react";

interface IWorkoutsContext {
  todaysPlane: IWorkout[];
  setTodaysPlane: React.Dispatch<React.SetStateAction<IWorkout[]>>;
  saveForLater: IWorkout[];
  setSaveForLater: React.Dispatch<React.SetStateAction<IWorkout[]>>;
}

export const WorkoutsContext = createContext<IWorkoutsContext>({
  todaysPlane: [],
  setTodaysPlane: () => {},
  saveForLater: [],
  setSaveForLater: () => {},
});

const WorkoutsProvider = ({ children }: { children: ReactNode }) => {
    const [todaysPlane, setTodaysPlane] = useState<IWorkout[]>([]);
    const [saveForLater, setSaveForLater] = useState<IWorkout[]>([]);

  const sharedData = {
    todaysPlane,
    setTodaysPlane,
    saveForLater,
    setSaveForLater,
  };
    return (
        <WorkoutsContext.Provider value={sharedData}>{children}</WorkoutsContext.Provider>
    );
};

export default WorkoutsProvider;