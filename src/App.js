import './App.css';
import React from 'react'

// Components
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';

// Routing
import About from './pages/About/About';
import Projects from './pages/Projects/Projects';
import Experience from './pages/Experience/Experience';
import Blog from './pages/Blog/Blog';
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
                <Route path='/blog' element={<Blog />}></Route>
                <Route path='/extra' element={<Extra />}></Route>
            </Routes>
            <Footer/>
        </div>
    );
}

export default App;