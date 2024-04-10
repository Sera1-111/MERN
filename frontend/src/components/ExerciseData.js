import { useWorkout } from '../CustomHook/UseWorkoutContext'
import { useAuth } from '../CustomHook/UseAuth'
import formatDistanceToNow from 'date-fns/formatDistanceToNow'
import './ExerciseData.css'

const WorkoutDetails = ({ workout }) => {
    const { dispatch } = useWorkout()
    const { user } = useAuth()

    const handleClick = async () => {
        if (!user) {
            return
        }

        try {
            const response = await fetch(`${process.env.REACT_APP_BACKEND_URL}/api/workouts/${workout._id}`, {
                method: 'DELETE',
                headers: {
                    'Authorization': `Bearer ${user.token}`
                }
            });

            if (response.ok) {
                const json = await response.json();
                dispatch({ type: 'DELETE_WORKOUT', payload: json });
            } else {
                console.error('Failed to delete workout:', response.statusText);
            }
        } catch (error) {
            console.error('Error occurred while deleting workout:', error);
        }
    }

    return (
        <div className="Exercise-Data">
            <h4>{workout.title}</h4>
            <p><strong>Load (kg): </strong>{workout.load}</p>
            <p><strong>Sets: </strong>{workout.sets}</p>
            <p>{formatDistanceToNow(new Date(workout.createdAt), { addSuffix: true })}</p>
            <span className="material-symbols-outlined" onClick={handleClick}>delete</span>
        </div>
    )
}

export default WorkoutDetails;
