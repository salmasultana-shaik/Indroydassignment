// src/components/QuestionDisplay.js
import React from 'react';

const QuestionDisplay = ({ question, players, playerAnswers, handleAnswerSubmit }) => {
    const handleAnswerClick = (player, answer) => {
        handleAnswerSubmit(player, answer);
    };

    return (
        <div>
            <h2>{question.question}</h2>
            <div>
                {question.options.map((option) => (
                    <button 
                        key={option} 
                        onClick={() => handleAnswerClick(players[0], option.charAt(0))} // Assuming single player for simplicity
                    >
                        {option}
                    </button>
                ))}
            </div>
        </div>
    );
};

export default QuestionDisplay;
