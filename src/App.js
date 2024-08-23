import logo from './logo.svg';
import './App.css';
import { Route, Router, Routes } from 'react-router-dom';
import HomePage from './Pages/HomePage/Home';
import Login from './Pages/Login/Login';
import Profile from './Pages/Profile/Profile';

function App() {
  return (
        <Routes>
          <Route path='/' element={<HomePage/>}></Route>
          <Route path='/login' element={<Login/>}></Route>
          <Route path='/profile' element={<Profile/>}></Route>
        </Routes>  
  );
}

export default App;
