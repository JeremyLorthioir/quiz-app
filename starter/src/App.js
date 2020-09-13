import React, { useState } from 'react';

export default function App() {
	// State 
	const [currentQuestion, setCurrentQuestion] = useState(0);
	const [showScore, setShowScore] = useState(false);
	const [score, setScore] = useState(0);

	// Data
	const questions = [
		{
			questionText: 'Qui engager pour votre entreprise ?',
			answerOptions: [
				{ answerText: 'Jérémy Lorthioir', isCorrect: true },
				{ answerText: 'Lorthioir Jérémy', isCorrect: true },
				{ answerText: 'Moi', isCorrect: true },
				{ answerText: 'Le créateur de cette application (moi)', isCorrect: true },
			],
		},
		{
			questionText: 'Ou m\'engager ?',
			answerOptions: [
				{ answerText: 'Lyon', isCorrect: true },
				{ answerText: 'Grenoble', isCorrect: true },
				{ answerText: 'Paris', isCorrect: false },
				{ answerText: 'Singapour', isCorrect: true },
			],
		},
		{
			questionText: 'Quelle technologie je n\'utilises pas ? ',
			answerOptions: [
				{ answerText: 'React', isCorrect: false },
				{ answerText: 'Javascript', isCorrect: false },
				{ answerText: 'Java', isCorrect: true },
				{ answerText: 'Python', isCorrect: false },
			],
		},
		{
			questionText: 'Combien me payer ? ',
			answerOptions: [
				{ answerText: 'Un ticket restaurant', isCorrect: false },
				{ answerText: '28 - 30K', isCorrect: true },
				{ answerText: '3 peanuts et une barre chocolatée', isCorrect: false },
				{ answerText: '3 chèques emplois service', isCorrect: false },
			],
		},
	];

	// Handle changes
	const handleAnswerOptionClick = (isCorrect) => {
		if (isCorrect) {
			setScore(score + 1);
		}

		const nextQuestion = currentQuestion + 1;
		nextQuestion < questions.length ? setCurrentQuestion(nextQuestion) : setShowScore(true);;
	};

	// App
	return (
		<div className='app'>
			{showScore ? (
				<div className='score-section'>
					You scored {score} out of {questions.length}
				</div>
			) : (
					<>
						<div className='question-section'>
							<div className='question-count'>
								<span>Question {currentQuestion + 1}</span>/{questions.length}
							</div>
							<div className='question-text'>{questions[currentQuestion].questionText}</div>
						</div>
						<div className='answer-section'>
							{questions[currentQuestion].answerOptions.map((answerOption) => (
								<button onClick={() => handleAnswerOptionClick(answerOption.isCorrect)}>{answerOption.answerText}</button>
							))}
						</div>
					</>
				)}
		</div>
	);
}
