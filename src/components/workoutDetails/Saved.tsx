"use client";
import { WorkoutsContext } from "@/context/workoutcontext";
import { IWorkout } from "@/type";
import { useContext } from "react";

const Saved = ({workout}: {workout: IWorkout}) => {
    const {saveForLater, setSaveForLater} = useContext(WorkoutsContext);
    const handleSaveForLater = () => {
        setSaveForLater([...saveForLater, workout]);
    };

    return (
        <button onClick={() => handleSaveForLater()}>
            Save for later
        </button>
    );
};

export default Saved;