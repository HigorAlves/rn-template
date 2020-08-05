import { exampleReducer, InitialState as InitialStateExample } from './example/reducer';
import { RootTypes } from './types';

export const initialState: RootTypes.StateType = {
	example: InitialStateExample,
};

export const Reducer: React.Reducer<RootTypes.StateType, RootTypes.ActionTypes> = (
	state: RootTypes.StateType,
	action: RootTypes.ActionTypes
) => {
	return {
		example: exampleReducer(state.example, action),
	};
};
