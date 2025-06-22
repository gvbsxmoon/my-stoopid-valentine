import './App.css';
import React, { useEffect, useState } from 'react';

import SmilingRiveComponent from './components/SmilingRiveComponent';
import Copyrights from './components/Copyrights';

const Countdown: React.FC<{ targetDate: string }> = ({ targetDate }) => {
	const [timeLeft, setTimeLeft] = useState('00:00:00:00');
	const [finished, setFinished] = useState(false);

	const calculateTimeLeft = () => {
		const diff = +new Date(targetDate) - +new Date();
		if (diff <= 0) {
			setFinished(true);
			return '00:00:00:00';
		}

		const days = Math.floor(diff / (1000 * 60 * 60 * 24));
		const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
		const minutes = Math.floor((diff / 1000 / 60) % 60);
		const seconds = Math.floor((diff / 1000) % 60);

		return [String(days).padStart(2, '0'), String(hours).padStart(2, '0'), String(minutes).padStart(2, '0'), String(seconds).padStart(2, '0')].join(':');
	};

	useEffect(() => {
		const update = () => {
			const newTime = calculateTimeLeft();
			setTimeLeft(newTime);
		};

		update();

		const timer = setInterval(update, 1000);

		return () => clearInterval(timer);
	}, [targetDate]);

	return (
		<div className='countdown'>
			{!finished ? (
				<>
					this poco <br />
					<span>{timeLeft}</span>
					<br />
					and we gonna cuddle
				</>
			) : (
				<span>I'm cooooooooming</span>
			)}
		</div>
	);
};

const App: React.FC = () => {
	return (
		<>
			<div id='container'>
				<SmilingRiveComponent />
				<Countdown targetDate='2025-08-01T22:00:00+02:00' />
			</div>
			<Copyrights />
		</>
	);
};

export default App;
