import './App.css';
import React from 'react'

// Components
import Navbar from './components/Navbar/Navbar'

// Routing
import About from './pages/About/About';
import Projects from './pages/Projects/Projects';
import Experience from './pages/Experience/Experience';
import Extra from './pages/Extra/Extra';
import { Routes, Route} from 'react-router-dom';

function App() {
    console.log("App render")
    return (
        <div className="App">
            <Navbar/>
            <Routes>
                <Route path='/' element={<About />}></Route>
                <Route path='/projects' element={<Projects />}></Route>
                <Route path='/experience' element={<Experience />}></Route>
                <Route path='/extra' element={<Extra />}></Route>
            </Routes>

        </div>
    );
}

export default App;