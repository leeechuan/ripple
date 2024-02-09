import { useState } from 'react'
import { useAuthContext } from './useAuthContext'

export const useLogin = () => {
    const [error, setError] = useState(null)
    const [isLoading, setIsLoading] = useState(null)
    const { dispatch } = useAuthContext()


    const login = async (email, password) => {
        setIsLoading(true)
        setError(null)


        const response = await fetch(`${import.meta.env.VITE_REACT_APP_API_URL}/api/users/login`, {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({email, password})
        })
        const json = await response.json()

        if (!response.ok){
            setIsLoading(false)
            setError(json.error)
        }

        if(response.ok){
            //Save user to local storage
            localStorage.setItem('user', JSON.stringify(json))

            //Update the auth context
            dispatch({type: 'LOGIN', payload: json})

            //Set isLoading
            setIsLoading(false)
        }
    }

    return{ login, isLoading, error }
}