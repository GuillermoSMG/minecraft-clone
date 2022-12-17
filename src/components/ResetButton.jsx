import { useStore } from '../hooks/useStore';

export default function ResetButton() {
	const [resetWorld] = useStore(state => [state.resetWorld]);

	return <button className='resetButton' onClick={resetWorld}>Reset</button>;
}
