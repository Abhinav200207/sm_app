import './App.css';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import Header from './Component/Headers/Header';
import Login from './Component/Login/Login';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { loadUser } from './Actions/User';

function App() {
  const dispatch = useDispatch();
  useEffect(()=>{
    dispatch(loadUser());
  },[dispatch])


  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Login />} />
      </Routes>
    </Router>
  );
}

export default App;
