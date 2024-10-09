// src/components/PlayerJoinForm.js
import React, { useState } from 'react';

const PlayerJoinForm = ({ setPlayers, setShowQuestion }) => {
    const [name, setName] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        if (name) {
            setPlayers(prevPlayers => [...prevPlayers, name]);
            setShowQuestion(true);
            setName(''); // Clear the input field after joining
        } else {
            alert('Please enter your name.');
        }
    };

    return (
        <div className="player-form">
            <p>Enter your name</p>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Your Name"
                />
                <button type="submit">Join Game</button>
            </form>
        </div>
    );
};

export default PlayerJoinForm;
