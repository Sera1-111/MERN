import { WorkoutContext } from "../ReactContext/WorkoutContext";
import { useContext } from "react";

export const useWorkout =()=>{
    const context = useContext(WorkoutContext)
    if(!context){
        throw Error('useWorkout must be used inside provider')
    }
    return context;
}