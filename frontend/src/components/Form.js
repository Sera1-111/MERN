import { useState } from "react"
import { useWorkout } from "../CustomHook/UseWorkoutContext"
import { useAuth } from "../CustomHook/UseAuth"
import './Form.css'

const Form = () => {
  const { dispatch } = useWorkout()
  const { user } = useAuth()

  const [title, setTitle] = useState('')
  const [load, setLoad] = useState('')
  const [sets, setSets] = useState('')
  const [error, setError] = useState(null)
  const [emptyFields, setEmptyFields] = useState([])

  const handleSubmit = async (e) => {
    e.preventDefault()

    if (!user) {
      setError('You must be logged in')
      return
    }

    const workout = {title, load, sets}

    const response = await fetch('https://mern-1ogg.onrender.com/api/workouts', {
      method: 'POST',
      body: JSON.stringify(workout),
      headers: {  
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${user.token}`
      }
      
    })
    const json = await response.json()

    if (!response.ok) {
      setError(json.error)
      setEmptyFields(json.emptyFields)
    }
    if (response.ok) {
      setTitle('')
      setLoad('')
      setSets('')
      setError(null)
      setEmptyFields([])
      dispatch({type: 'CREATE_WORKOUT', payload: json})
    }
  }

  return (
    <form className="create" onSubmit={handleSubmit}>
      <h3>Add a New Workout</h3>

      <label>Excersise Title:</label>
      <input 
        type="text"
        onChange={(e) => setTitle(e.target.value)}
        value={title}
        className={emptyFields.includes('title') ? 'error' : ''}
      />

      <label>Load (in kg):</label>
      <input 
        type="number"
        onChange={(e) => setLoad(e.target.value)}
        value={load}
        className={emptyFields.includes('load') ? 'error' : ''}
      />

      <label>Sets:</label>
      <input 
        type="number"
        onChange={(e) => setSets(e.target.value)}
        value={sets}
        className={emptyFields.includes('sets') ? 'error' : ''}
      />

      <button>Add Workout</button>
      {error && <div className="error">{error}</div>}
    </form>
  )
}

export default Form