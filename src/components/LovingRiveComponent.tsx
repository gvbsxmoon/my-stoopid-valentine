import { useRive } from '@rive-app/react-canvas-lite';

import love from '@/assets/love.riv';

const LovingRiveComponent = () => {
	const { RiveComponent } = useRive({
		src: love,
		autoplay: true,
		stateMachines: 'State Machine 1',
	});

	return <RiveComponent className='rive-assets' />;
};

export default LovingRiveComponent;
