import { useRive } from '@rive-app/react-canvas-lite';

import smile from '@/assets/smile.riv';

const SmilingRiveComponent = () => {
	const { RiveComponent } = useRive({
		src: smile,
		autoplay: true,
		stateMachines: 'State Machine 1',
	});

	return <RiveComponent className='rive-assets' />;
};

export default SmilingRiveComponent;
