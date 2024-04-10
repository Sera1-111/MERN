import React from 'react';
import './WorkoutPage.css';

const WorkoutPage = () => {
  return (
    <div className="workout-container">
     <div className="workout-card">
        <img src="https://images.pexels.com/photos/1954524/pexels-photo-1954524.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="Cardio" />
        <div className="workout-info">
          <h3>Cardio Workout</h3>
          <p>Aerobic exercise that involves endurance and cardiovascular health.</p>
          <button onClick={() => { window.location.href = '/signup'; }}>Start Workout</button>
        </div>
      </div>
      <div className="workout-card">
        <img src="https://images.pexels.com/photos/841130/pexels-photo-841130.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="Strength Training" />
        <div className="workout-info">
          <h3>Strength Training</h3>
          <p>Focuses on building muscle strength and endurance.</p>
          <button onClick={() => { window.location.href = '/signup'; }}>Start Workout</button>
        </div>
      </div>
      {/* Add more workout cards as needed */}
      <div className="workout-card">
        <img src="https://images.pexels.com/photos/317155/pexels-photo-317155.jpeg?auto=compress&cs=tinysrgb&w=600" alt="Yoga" />
        <div className="workout-info">
          <h3>Yoga</h3>
          <p>Combines physical postures, breathing techniques, and meditation or relaxation.</p>
          <button onClick={() => { window.location.href = '/signup'; }}>Start Workout</button>
        </div>
      </div>
      <div className="workout-card">
        <img src="https://images.pexels.com/photos/866019/pexels-photo-866019.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="Pilates" />
        <div className="workout-info">
          <h3>Pilates</h3>
          <p>Focuses on core strength, flexibility, and overall body awareness.</p>
          <button onClick={() => { window.location.href = '/signup'; }}>Start Workout</button>
        </div>
        
      </div>
    </div>
  );
};

export default WorkoutPage;
