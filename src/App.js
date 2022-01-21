import './App.css';
import Navbar from './components/Navbar/Navbar';
import Main from './routing/Main';
import React from 'react'

export const NavDimsContext = React.createContext();

function App() {
    return (
        <div className="App">
            <Navbar/>
            <NavDimsContext.Provider value={null}>
                <Main />
            </NavDimsContext.Provider>
        </div>
    );
}

export default App;