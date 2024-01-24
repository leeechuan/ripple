import { createContext, useReducer, useEffect} from "react";

// import { loginUser } from "../../../server/controllers/userControllers";

export const AuthContext = createContext()

// eslint-disable-next-line react-refresh/only-export-components
export const authReducer = (state, action) => {
    switch (action.type) {
        case 'LOGIN' :
            return { user: action.payload }
        case 'LOGOUT' :
            return { user: null }
        default :
            return state
    }
}

export const AuthContextProvider = ({ children }) => {
    const [state, dispatch] = useReducer(authReducer, {
        user: null
    })

    // //On load of the page, check localStorage for token
    useEffect( () => {
        const user = JSON.parse(localStorage.getItem('user'))

        if(user) {
            dispatch({type: 'LOGIN', payload: user})
        }
    }, [])  
    
    console.log('AuthContext state: ', state)

  

    return(
        <AuthContext.Provider value = {{...state, dispatch}}>
            { children }
        </AuthContext.Provider>
    )
}