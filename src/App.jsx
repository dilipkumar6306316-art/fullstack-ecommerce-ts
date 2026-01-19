
import './App.css'
import { Routes, Route } from "react-router-dom";

import Home from './frontend/pages/home/page'
import Login from './frontend/pages/login/page';





function App() {

  return (
  <>
     <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<div>About Page</div>} />
      <Route path="/login" element={<Login />} />
    </Routes>
  
    </>
  )
}

export default App
