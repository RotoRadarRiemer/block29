import React from 'react';

function SearchBar({ setFilteredPlayers, players }) {

    const handleSearchChange = (e) => {
        const searchTerm = e.target.value.toLowerCase();
        const filtered = players.filter(player => player.name.toLowerCase().includes(searchTerm));
        setFilteredPlayers(filtered);
    };

    return (
        <div className="search-container">
            <input 
                type="text" 
                onChange={handleSearchChange} 
                placeholder="Search for a player..." 
                className="search-input"
            />
        </div>
    );
}

export default SearchBar;

