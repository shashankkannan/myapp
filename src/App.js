import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'; // Import necessary components
import './App.css';
import X from './Components/Xx';
import Y from './Components/Yy';

// Define your components for the routes
function Home() {
  return (
    <div className="App">
      <header className="App-header">
        <p>Hello, This is Shashank!!</p>
      </header>
    </div>
  );
}

function App() {
  return (
    <Router> {/* Wrap your app with the Router */}
      <div className="App">
        <nav> {/* Navigation links */}
        <ul className="horizontal-list">
            <li><Link to="/">Home</Link></li>
            <li><Link to="/x">X</Link></li>
            <li><Link to="/y">Y</Link></li>
          </ul>
        </nav>

        <Routes> {/* Define your routes */}
          <Route path="/" element={<Home />} /> {/* Route for the home page */}
          <Route path="/x" element={<X />} /> {/* Route for /x */}
          <Route path="/y" element={<Y />} /> {/* Route for /y */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;