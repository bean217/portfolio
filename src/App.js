import './App.css';
import React from 'react'

// Routing
import About from './pages/About/About';
import Projects from './pages/Projects/Projects';
import Experience from './pages/Experience/Experience';
import Extra from './pages/Extra/Extra';
import { Routes, Route} from 'react-router-dom';

// Hooks
import useNavbar from './components/Navbar/Navbar';

export const NavDimsContext = React.createContext();

function App() {
    console.log("App render")
    const { navDims, navRender } = useNavbar();
    return (
        <div className="App">
            <NavDimsContext.Provider value={navDims}>
                {navRender}
                <Routes>
                    <Route path='/' element={<About />}></Route>
                    <Route path='/projects' element={<Projects />}></Route>
                    <Route path='/experience' element={<Experience />}></Route>
                    <Route path='/extra' element={<Extra />}></Route>
                </Routes>
            </NavDimsContext.Provider>

        </div>
    );
}

export default App;