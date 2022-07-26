import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NavLink from './components/NavLink';
import Rockets from './components/Rockets';
import Missions from './components/Missions';
import MyProfile from './components/MyProfile';

function App() {
  return (
    <div className="App">
      <Router>
        <NavLink />
        <Routes>
          <Route path="/" element={<Rockets />} />
          <Route path="/missions" element={<Missions />} />
          <Route path="/my-profile" element={<MyProfile />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
