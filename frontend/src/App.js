import { BrowserRouter, Routes, Route } from 'react-router-dom';
// import { useAuth } from './CustomHook/UseAuth';
import Home from './pages/Home';
import Navbar from './components/Navbar';
import Signup from './pages/Signup';
import Login from './pages/Login';
import WorkoutPage from './pages/WorkoutPage'; // Import the IntroPage component

 function App() {
//   const { user } = useAuth();

  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <div className='pages'>
          <Routes>
            <Route path='/' element={<WorkoutPage />} /> 
            <Route path='/home' element={<Home />} />
            <Route path='/signup' element={<Signup/>}/>
            <Route path='/login' element={<Login/>}/>
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
