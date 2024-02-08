import { useState } from 'react'
// import { useAuthContext } from './useAuthContext'

export const useForgotPassword = () => {
    const [error, setError] = useState(null)
    const [isLoading, setIsLoading] = useState(null)
    // const { dispatch } = useAuthContext()

    const forgotpassword = async (email) => {
        setIsLoading(true)
        setError(null)
        console.log(email)

        const response = await fetch(`${import.meta.env.VITE_REACT_APP_API_URL}/api/users/forgotpassword`, {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({email})
        })
        const json = await response.json()

        if (!response.ok){
            setIsLoading(false)
            setError(json.error)
        }

        if(response.ok){
            setIsLoading(false)
            setError("Email has been sent!")
        }
    }

    return{ forgotpassword, isLoading, error }
}