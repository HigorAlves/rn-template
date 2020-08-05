import React, { createContext, useReducer, useContext } from 'react';

import { Reducer, initialState } from './store';
import { RootTypes } from './types';

const StoreContext = createContext<RootTypes.ContextType>({} as RootTypes.ContextType);

export const StoreProvider: React.FC<RootTypes.Props> = ({ children }: RootTypes.Props): React.ReactElement => {
	const [state, dispatch] = useReducer(Reducer, initialState);

	return <StoreContext.Provider value={{ state, dispatch }}>{children}</StoreContext.Provider>;
};

export const useStore = (): RootTypes.ContextType => {
	const { state, dispatch } = useContext(StoreContext);
	return { state, dispatch };
};
