import React, { createContext, useContext, useReducer } from 'react'

import withThunk from 'utils/withThunk'

import { initialState, Reducer } from 'store/rootReducer'
import { selectors as Selector } from 'store/rootSelectors'

const StoreContext = createContext<StoreTypes.ContextType>({
  state: initialState
} as StoreTypes.ContextType)

export const StoreProvider: React.FC<StoreTypes.Props> = ({
  children
}: StoreTypes.Props): JSX.Element => {
  const [state, dispatch] = useReducer(Reducer, initialState)

  return (
    <StoreContext.Provider value={{ state, dispatch: withThunk(dispatch) }}>
      {children}
    </StoreContext.Provider>
  )
}

const useStore = (): StoreTypes.useStore => {
  const { state, dispatch } = useContext(StoreContext)
  const selectors = Selector()

  return { state, dispatch, selectors }
}

export default useStore
