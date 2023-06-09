import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import NavbarComponent from './NavbarComponent';
import Home from './Home';
import Tool from './Tool';

function App() {
  return (
    <div className="App">
    <Router>
      <NavbarComponent />
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/Tool" element={<Tool />}/>
      </Routes>
      <div className="content">
      </div>
    </Router>
    </div>
  );
}

export default App;
