import { useState } from 'react'

export const useVerifyLink = () => {
    const [error, setError] = useState(null)
    const [isLoading, setIsLoading] = useState(null)

    const verifylink = async (token) => {
        setIsLoading(true)
        setError(null)

        const response = await fetch(`${import.meta.env.VITE_REACT_APP_API_URL}/api/users/verifylink`, {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({token})
        })
        const json = await response.json()

        if (!response.ok){
            setIsLoading(false)
            setError(json.error)
        }

        if(response.ok){
            setIsLoading(false);
            return json;
        }
    }

    return{verifylink, isLoading, error }
}