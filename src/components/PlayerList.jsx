import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import SearchBar from './SearchBar';

function PlayersList() {
    const [players, setPlayers] = useState([]);
    const [filteredPlayers, setFilteredPlayers] = useState([]);

    useEffect(() => {
        axios.get('https://fsa-puppy-bowl.herokuapp.com/api/2302-ACC-PT-WEB-PT-B/players')
            .then(response => {
                setPlayers(response.data.data.players);
                setFilteredPlayers(response.data.data.players);
            })
            .catch(error => console.error('Error fetching players:', error));
    }, []);

    const handleDelete = (id) => {
        axios.delete(`https://fsa-puppy-bowl.herokuapp.com/api/2302-ACC-PT-WEB-PT-B/players/${id}`)
            .then(() => {
                // Remove the deleted player from state
                const updatedPlayers = players.filter(player => player.id !== id);
                setPlayers(updatedPlayers);
                setFilteredPlayers(updatedPlayers);
            })
            .catch(error => console.error('Error deleting player:', error));
    };

    return (
        <div className="main-container">
            <SearchBar setFilteredPlayers={setFilteredPlayers} players={players} />
            <div className="players-container">
                {filteredPlayers.map(player => (
                    <div className="card" key={player.id}>
                        <h2>{player.name}</h2>
                        <img src={player.imageUrl} alt={player.name} />
                        <Link className='link-button' to={`/player/${player.id}`}>See Details</Link>
                        <button onClick={() => handleDelete(player.id)} className='delete-button'>Delete</button>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default PlayersList;