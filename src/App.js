import './App.css';
//import Navbar from './components/Navbar/Navbar';
import Main from './routing/Main';
import React from 'react'

import useNavbar from './components/Navbar/Navbar';

export const NavDimsContext = React.createContext();

function App() {
    const { navDims, navRender } = useNavbar();

    return (
        <div className="App">
            {navRender}
            <NavDimsContext.Provider value={navDims}>
                <Main />
            </NavDimsContext.Provider>
        </div>
    );
}

export default App;