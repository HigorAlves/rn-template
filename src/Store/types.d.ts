import * as Example from './example/types';

export namespace RootTypes {
	export type StateType = {
		example: Example.Type.StateType;
	};

	export type ActionTypes = Example.Type.ActionType;

	export type ContextType = {
		state: StateType;
		dispatch: React.Dispatch<ActionTypes>;
	};

	type Props = {
		children: React.ReactChild;
	};
}
