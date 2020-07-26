// setup data layer
// keep tract of the basket
import React, {createContext, useContext, useReducer } from "react";

// Data layer
export const StateContext = createContext();

// Build a provider
export const StateProvider = ({ reducer, initialState, children}) => (

    <StateContext.Provider value={useReducer(reducer, initialState)}>
    
        {children}

    </StateContext.Provider>

);
// This is how use it inside a component.
// eslint-disable-next-line react-hooks/rules-of-hooks
export const useStateValue = () => useContext(StateContext);