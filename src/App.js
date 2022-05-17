import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import React from "react";
import Navbar from './Components/Navbar';
import Footer from "./Components/Footer";
import About from './Pages/About';
import Home from './Pages/Home';


function App() {
  return (
    <Router>
    <div className='flex flex-col justify-between h-screen'>
    <Navbar />
    

    {/* routes */}
    <main className='container mx-auto px-3 pb-12'>
      <Routes>
        <Route path='/about' element={<About />} />
        <Route path='/' element={<Home />} />
      </Routes>
    </main>



    <Footer />
  </div>
  </Router>
  )
}

export default App



