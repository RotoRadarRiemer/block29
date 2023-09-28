import React, { useState } from 'react';
import axios from 'axios';

function AddPlayerForm() {
    const [newPlayer, setNewPlayer] = useState({
        name: '',
        breed: '',
        status: 'bench',
        imageUrl: ''
    });

    const handleChange = (e) => {
        setNewPlayer({ ...newPlayer, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        axios.post('https://fsa-puppy-bowl.herokuapp.com/api/2302-ACC-PT-WEB-PT-B/players', newPlayer)
            .then(response => {
                console.log('Player added:', response.data);
                setNewPlayer({ name: '', breed: '', status: 'bench', imageUrl: '' });
            })
            .catch(error => console.error('Error adding player:', error));
    };

    return (
        <div className="form-wrapper">
            <form onSubmit={handleSubmit}>
                <div className="form-control">
                    <input name="name" value={newPlayer.name} onChange={handleChange} placeholder="Player name" />
                </div>
                <div className="form-control">
                    <input name="breed" value={newPlayer.breed} onChange={handleChange} placeholder="Breed" />
                </div>
                <div className="form-control">
                    <select name="status" value={newPlayer.status} onChange={handleChange}>
                        <option value="bench">Bench</option>
                        <option value="field">Field</option>
                    </select>
                </div>
                <div className="form-control">
                    <input name="imageUrl" value={newPlayer.imageUrl} onChange={handleChange} placeholder="Image URL" />
                </div>
                <button type="submit">Add Player</button>
            </form>
        </div>
    );
}

export default AddPlayerForm;
