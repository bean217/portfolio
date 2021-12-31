import './App.css';
import Navbar from './components/Navbar/Navbar';
import Main from './routing/Main';

function App() {
    return (
        <div className="App">
            <Navbar title="Benjamin Piro"/>
            <Main />
        </div>
    );
}

export default App;