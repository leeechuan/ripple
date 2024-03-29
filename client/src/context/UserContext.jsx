import { createContext, useReducer } from "react";


export const UserContext = createContext()

// eslint-disable-next-line react-refresh/only-export-components
export const userReducer = (state,action) => {
    switch (action.type) {
        case 'GET_USER':
            return {
                // user: state.user.filter((w) => w._id !== action.payload._id)
                // userdetail: action.payload
                ...state, 
                user: action.payload,
                userdetail: action.payload
            }
        case 'UPDATE_USER':
            return{
                ...state, 
                user: action.payload,
                userdetail: action.payload
                // user: [action.payload, ...state]
            }
        // case 'CREATE_WORKOUT':
        //     return {
        //         workouts: [action.payload, ...state.workouts]
        //     }
        // case 'DELETE_WORKOUT':
        //     return {
        //         workouts: state.workouts.filter((w) => w._id !== action.payload._id)
        //     }
        default:
            return state
    }
}

export const UserContextProvider = ( {children} ) => {
    const [state, dispatch] = useReducer(userReducer, {
        user: null
    })



    return (
        <UserContext.Provider value={{...state, dispatch}}>
            {children}
        </UserContext.Provider>
    )
}