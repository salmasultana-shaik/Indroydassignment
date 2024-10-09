// src/App.js
import React, { useState } from 'react';
import { QRCodeCanvas } from 'qrcode.react';
import PlayerJoinForm from './components/PlayerJoinForm';
import QuestionDisplay from './components/QuestionDisplay';
import './App.css';

const App = () => {
    const [players, setPlayers] = useState([]);
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
    const [playerAnswers, setPlayerAnswers] = useState({});
    const [showQuestion, setShowQuestion] = useState(false);

    const questions = [
        {
            question: "What is the capital of France?",
            options: ['A) Paris', 'B) London', 'C) Berlin', 'D) Madrid'],
            correct: 'A',
        },
        {
            question: "Which planet is known as the Red Planet?",
            options: ['A) Earth', 'B) Mars', 'C) Jupiter', 'D) Saturn'],
            correct: 'B',
        },
    ];

    const handleAnswerSubmit = (player, answer) => {
        const currentQuestion = questions[currentQuestionIndex];

        if (answer === currentQuestion.correct) {
            alert(`Congratulations ${player}, you answered correctly!`);
            setCurrentQuestionIndex(prevIndex => prevIndex + 1);
            setPlayerAnswers({});
        } else {
            alert('Wrong answer. Try again next time!');
        }

        setPlayerAnswers(prev => ({ ...prev, [player]: answer }));
    };

    if (currentQuestionIndex >= questions.length) {
        return (
            <div className="App">
                <div className="game-over">
                    <h2>Game Over</h2>
                    <p>All questions have been answered. Thank you for playing!</p>
                </div>
            </div>
        );
    }

    return (
        <div className="App">
            <h1>KBC Game</h1>
            {!showQuestion ? (
                <div className="qr-code">
                    <QRCodeCanvas value={window.location.href} />
                    <p>Scan the QR code to join the game.</p>
                </div>
            ) : (
                <QuestionDisplay 
                    question={questions[currentQuestionIndex]} 
                    players={players}
                    playerAnswers={playerAnswers}
                    handleAnswerSubmit={handleAnswerSubmit}
                />
            )}
            <PlayerJoinForm setPlayers={setPlayers} setShowQuestion={setShowQuestion} />
        </div>
    );
};

export default App;
