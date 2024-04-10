import { createContext, useReducer } from "react";

// Create a new context for managing workout-related state
export const WorkoutContext = createContext();

// Define a reducer function to manage state transitions
export const workoutReducer = (state, action) => {
    switch (action.type) {
        // Action type for setting workouts
        case 'SET_WORKOUTS':
            // Update state with the provided workouts
            return {
                workouts: action.payload
            };
        // Action type for creating a new workout
        case 'CREATE_WORKOUT':
            // Add the new workout to the beginning of the workouts array
            return {
                workouts: [action.payload, ...state.workouts]
            }
            case 'DELETE_WORKOUT':
                return {
                  workouts: state.workouts.filter((w) => w._id !== action.payload._id)
                }
              default:
                return state
    }
};

// Component to provide the WorkoutContext to its children
export const WorkoutProvider = ({ children }) => {
    // Use the workoutReducer with useReducer hook to manage state
    const [state, dispatch] = useReducer(workoutReducer, { workouts: null });
   
    return (
        // Provide the state and dispatch function to child components via WorkoutContext.Provider
        <WorkoutContext.Provider value={{...state, dispatch }}>
            {/* Render the children components */}
            {children}
        </WorkoutContext.Provider>
    );
};
