import { useEffect } from "react";
import WorkoutsDetails from "../components/ExerciseData";
import { useAuth } from "../CustomHook/UseAuth";
import Form from "../components/Form";
import { useWorkout } from "../CustomHook/UseWorkoutContext";
const Home = ()=>{
 const{workouts, dispatch} = useWorkout()
 const {user} = useAuth()
    useEffect(()=>{
        const fetchWorkout = async ()=>{
         const response = await fetch('https://mern-1ogg.onrender.com/api/workouts', {
            headers : {
                'Authorization': `Bearer ${user.token}`
            }
         })
         const json = await response.json()  //parse json from response object

         if(response.ok){
         dispatch({type : 'SET_WORKOUTS', payload : json})
         }
        }
        if(user){              //if user is logged in fetch workout
            fetchWorkout()
        }
        
    }, [user, dispatch])  // it will only fire once with the empty array
    return(
        <div className="home">
            <div className="workouts">
                {workouts && workouts.map((workout)=>(
                    <WorkoutsDetails key={workout._id} workout={workout}/>
                ))}
            </div>
            <Form/>
        </div>
    )
}

export default Home;