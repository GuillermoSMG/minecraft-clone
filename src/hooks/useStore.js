import { nanoid } from 'nanoid';
import create from 'zustand';

export const useStore = create(set => ({
	texture: '',
	cubes: [],
	addCube: (x, y, z) => {
		set(state => ({
			cubes: [
				...state.cubes,
				{
					id: nanoid(),
					texture: state.texture,
					pos: [x, y, z],
				},
			],
		}));
	},
	removeCube: id => {
		set(state => ({
			cubes: state.cubes.filter(cube => cube.id !== id),
		}));
	},
	setTexture: texture => {
		set(() => ({ texture }));
	},
	saveWorld: () => {
		set(() => ({}));
	},
	resetWorld: () => {
		set(() => ({
			cubes: [],
		}));
	},
}));
