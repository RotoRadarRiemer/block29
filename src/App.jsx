import React, { useState } from 'react';
import { BrowserRouter, Route, Routes, Link } from 'react-router-dom';
import PlayersList from './components/PlayerList';
import PlayerDetails from './components/PlayerDetails';
import AddPlayerForm from './components/AddPlayerForm';
import PlayerContext from './components/PlayerContext';
import './app.css'

function App() {
    const [players, setPlayers] = useState([]);

    return (
      <PlayerContext.Provider value={{ players, setPlayers }}>
          <BrowserRouter>
            <div className="navbar">
                <Link to="/">Player List</Link>
                <Link to="/add-player">Add New Player</Link>
            </div>
  
            <div className="centered-container">
              <Routes>
                  <Route path="/" element={<PlayersList />} />
                  <Route path="/player/:id" element={<PlayerDetails />} />
                  <Route path="/add-player" element={<AddPlayerForm />} />
              </Routes>
            </div>
          </BrowserRouter>
      </PlayerContext.Provider>
  )
};
  
export default App;
