import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import Navbar from "./Components/Navbar/Navbar";
import Home from './pages/home/home'
import './App.css'
import SinglePost from './pages/single-post'
import Login from "./pages/login";

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar/>
        <Route path='/' exact component={Home} />
        <Route path='/post' exact component={SinglePost} />
        <Route path='/login' exact component={Login} />
      </Router>

    </div>
  );
}

export default App;
