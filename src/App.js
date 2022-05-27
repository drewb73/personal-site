import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import React from "react";
import Navbar from './Components/Navbar';
import Footer from "./Components/Footer";
import About from './Pages/About';
import Home from './Pages/Home';
import ChronoResume from './Components/ChronoResume';


function App() {
  return (
    <>
    <Router>
    <div className='flex flex-col justify-between h-screen'>
    <Navbar />
    

    {/* routes */}
    <main className='container mx-auto px-3 pb-12'>
      <Routes>
        <Route path='/about' element={<About />} />
        <Route path='/' element={<Home />} />
        <Route path='/resume' element={<ChronoResume />} />
      </Routes>
    </main>



    <Footer />
  </div>
  </Router>

  <ToastContainer />
  </>
  )
}

export default App



