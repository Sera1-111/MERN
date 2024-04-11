import { createContext, useReducer } from "react";

// Creating a new context for managing workout-related state
export const WorkoutContext = createContext();

export const workoutReducer = (state, action) => {
    switch (action.type) {
        case 'SET_WORKOUTS':
            return {
                workouts: action.payload
            };
       
        case 'CREATE_WORKOUT':
            return {
                workouts: [action.payload, ...state.workouts]
            }
            case 'DELETE_WORKOUT':
                return {
                    //Filtering out  the id that matches
                  workouts: state.workouts.filter((w) => w._id !== action.payload._id)
                }
              default:
                return state
    }
};

export const WorkoutProvider = ({ children }) => {
    const [state, dispatch] = useReducer(workoutReducer, { workouts: null });
   
    return (
        <WorkoutContext.Provider value={{...state, dispatch }}>
            {children}
        </WorkoutContext.Provider>
    );
};
