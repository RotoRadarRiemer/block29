import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

function PlayerDetails() {
    const { id } = useParams();
    
    const [player, setPlayer] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        axios.get(`https://fsa-puppy-bowl.herokuapp.com/api/2302-ACC-PT-WEB-PT-B/players/${id}`)
            .then(response => {
                setPlayer(response.data.data.player);
                setLoading(false);
            })
            .catch(err => {
                setError(err.message);
                setLoading(false);
            });
    }, [id]);

    if (loading) return <div>Loading player details...</div>;
    if (error) return <div>Error: {error}</div>;
    if (!player) return <div>No player found!</div>;

    return (
        <div className="player-details">
            <h2>{player.name}</h2>
            <img src={player.imageUrl} alt={player.name} />
            <p>Breed: {player.breed}</p>
            <p>Status: {player.status}</p>
        </div>
    );
}

export default PlayerDetails;