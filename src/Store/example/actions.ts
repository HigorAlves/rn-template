import { Type } from './types';

function changeText(message: string): Type.ActionType {
	return {
		type: Type.Types.CHANGE_TEXT,
		payload: {
			message,
		},
	};
}

export default changeText;
