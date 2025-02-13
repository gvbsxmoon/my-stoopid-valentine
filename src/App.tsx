import './App.css';
import { useState, useCallback, useEffect } from 'react';
import clickSound from '@/assets/click.mp3';
import backgroundSound from '@/assets/background.mp3';
import successSound from '@/assets/success.mp3';
import LovingRiveComponent from './components/LovingRiveComponent';
import SmilingRiveComponent from './components/SmilingRiveComponent';
import Copyrights from './components/Copyrights';

const phrases: string[] = [
	'Nope!',
	'Think again!',
	'Really? :(',
	'Are you sure?',
	'Bunny is sad...',
	'Please reconsider!',
	'Give it another thought!',
	"Don't make bunny cry!",
	'One more chance?',
	'But why? :(',
	'My heart is breaking...',
	'Maybe you misclicked?',
	"I'll be so lonely...",
	'Just one yes?',
	'Pretty please?',
	"Don't hop away!",
	"Let's try again!",
	"I'll be the best valentine!",
	"You're breaking my fluffy heart!",
	"But we're perfect together!",
];

const playNoSound = (): void => {
	const audio = new Audio(clickSound);
	audio.play();
};

const playSuccessSound = (): void => {
	const audio = new Audio(successSound);
	audio.play();
};

const playBackgroundSound = (): void => {
	const audio = new Audio(backgroundSound);
	audio.play();
};

const App: React.FC = () => {
	const [showLove, setShowLove] = useState<boolean>(false);
	const [noButtonIndex, setNoButtonIndex] = useState<number>(0);

	const handleNoClick = useCallback(() => {
		playNoSound();
		setNoButtonIndex(prevIndex => {
			let newIndex;
			do {
				newIndex = Math.floor(Math.random() * phrases.length);
			} while (newIndex === prevIndex);
			return newIndex;
		});
	}, []);

	const handleYesClick = useCallback(() => {
		playSuccessSound();
		setShowLove(true);
	}, []);

	useEffect(playBackgroundSound, []);

	return (
		<>
			<div id='container'>
				{showLove ? <LovingRiveComponent /> : <SmilingRiveComponent />}

				<div className='action'>
					<p className='prompt'>{showLove ? "YAYYY! I'M SO HAPPY! ❤️" : "Hei hello, I'm here to ask you somethin! Would you be my valentine?"}</p>

					{!showLove && (
						<div className='button-container'>
							<button className='first' onClick={handleYesClick}>
								YES I LOVE YOYO SO MUCH
							</button>

							<button className='second' onClick={handleNoClick}>
								{phrases[noButtonIndex]}
							</button>
						</div>
					)}
				</div>
			</div>
			<Copyrights />
		</>
	);
};

export default App;
