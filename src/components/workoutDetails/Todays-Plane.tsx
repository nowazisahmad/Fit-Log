"use client";
import { WorkoutsContext } from "@/context/workoutcontext";
import { IWorkout } from "@/type";
import { useContext } from "react";

const TodaysPlane = ({workout}: {workout: IWorkout}) => {
    const {todaysPlane, setTodaysPlane} = useContext(WorkoutsContext);
    const handleAddToTodaysPlan = () => {
        setTodaysPlane([...todaysPlane, workout]);
    };

    return (
        <button onClick={() => handleAddToTodaysPlan()}>
            Add to todays plan
        </button>
    );
};

export default TodaysPlane;