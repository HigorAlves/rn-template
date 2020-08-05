import { Type } from './types';

export const InitialState: Type.StateType = {
	message: '👩‍🚀 Click to run an action',
};

export function exampleReducer(state = InitialState, action: Type.ActionType): Type.StateType {
	switch (action.type) {
		case Type.Types.CHANGE_TEXT:
			return { ...state, message: action.payload.message };
		default:
			return state;
	}
}
