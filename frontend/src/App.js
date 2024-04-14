import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Home from './pages/Home';
import Navbar from './components/Navbar';
import Signup from './pages/Signup';
import Login from './pages/Login';
import WorkoutPage from './pages/WorkoutPage';
import { useAuth } from './CustomHook/UseAuth';

function App() {
  const { user } = useAuth();

  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <div className='pages'>
          <Routes>
            <Route path='/' element={<WorkoutPage />} /> 
            <Route path='/home' element={<Home />} />
            <Route path='/signup' element={!user ? <Signup/> : <Navigate to='/Home'/>}/>
            <Route path='/login' element={!user ? <Login/> : <Navigate to='/Home'/>}/>
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
