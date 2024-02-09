import { useState } from 'react'

export const useUpdatePassword = () => {
    const [error, setError] = useState(null)
    const [isLoading, setIsLoading] = useState(null)

    const updatepassword = async (userId, password) => {
        setIsLoading(true)
        setError(null)
        console.log(password, userId)


        const response = await fetch(`${import.meta.env.VITE_REACT_APP_API_URL}/api/users/updatepassword`, {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({userId, password})
        })
        const json = await response.json()

        if (!response.ok){
            setIsLoading(false)
            setError(json.error)
        }

        if(response.ok){
            setIsLoading(false);
            setError("Thank you for submitting!")
            // return json;
        }
    }

    return{updatepassword, isLoading, error }
}