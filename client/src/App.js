import Navbar from "./Components/Navbar/Navbar";
import Home from './Components/Pages/home/home'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import './App.css'

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar/>
        <Home />
      </Router>
      
    </div>
  );
}

export default App;
