import React, { useEffect, useState } from "react";
import '../styles/login.css';
// import LoginSpiral from "../scripts/loginspiral.js";
import { useSignup } from "../hooks/useSignup.js";
import { useParams } from 'react-router-dom';
import PasswordStrengthMeter from "../components/passwordmeter.jsx";
import { useVerifyLink } from "../hooks/useVerifyLink.js";
import { useNavigate } from "react-router-dom";
import { useUpdatePassword } from "../hooks/useUpdatePassword.js";

function ResetPassword(){

    const { token } = useParams(); // Extract the token from the URL parameters
    const { verifylink } = useVerifyLink(); // Use the custom hook to get the verifylink function
    const { updatepassword } = useUpdatePassword() // Use the custom hook to get the updatepassword function
    const [userId ,setUserId] = useState('')
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('');
    const {signup, resError, isLoading} = useVerifyLink()
    const [error, setError] = useState('');
    const navigate = useNavigate();


    useEffect(() => {


        const verifyLinkAndProceed = async () => {

            try {
                // Call the function to verify the reset password link
                const verificationResult = await verifylink(token);
                console.log('Verification result:', verificationResult);
                // Proceed based on the verification result (e.g., show success message, redirect to reset password page)
                console.log()
                if (error || !verificationResult ) {
                    // Navigate to invalid page
                    navigate('/invalidlink');
                }

                setUserId(verificationResult.userId)


            } catch (error) {
                // Handle errors from the verification function (e.g., network error, invalid token)
                console.error('Error verifying reset password link:', error);
                // Handle the error (e.g., show error message, redirect to error page)
            }
        }

        verifyLinkAndProceed(); // Call the function when the component mounts

    }, []);




    // const [email ,setEmail] = useState('')


    const handleSubmit = async (e) => {
        e.preventDefault()
        // Check if password and confirm password match
        if (password !== confirmPassword) {
            setError("Passwords don't match!");
            return;
        }

    // Call the update password function
    try {
        await updatepassword(userId, password);
        
        // If update password is successful, redirect to the login screen
        alert("Password Successfully Changed")
        navigate('/login');

    } catch (error) {
        console.error('Password update error:', error);
        // Handle error (e.g., display error message)
    }


        
    }




    return(    
    
    <div className="reset-password-page">
    
        <div className="bg-default-full">

            <div className="spiral-container">
                <div id="spiral" className="spiral"></div>
                <div id="spiral2" className="spiral"></div>
            </div>

            <div className="login-container secondary-default-20 rounded-lg shadow md:mt-0 sm:max-w-md xl:p-0">
            <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
            <h2 className="font-bold text-center f-h2-title text-default">
                Reset Password
            </h2>
            <form onSubmit={handleSubmit} className="space-y-4 md:space-y-6" action="#">
                {/* <div>
                    <label htmlFor="email" className="block mb-2 f-label text-default">Email</label>
                    <input onChange={(e) => setEmail(e.target.value)} type="email" name="email" id="email" className="input-outline focus:outline-none focus:ring-0 border f-label rounded-lg block w-full p-2.5" placeholder="Email" required=""></input>
                </div> */}


                <div>
                    <label htmlFor="password" className="block mb-2 f-label text-default">Password</label>
                    <input onChange={(e) => setPassword(e.target.value)} type="password" name="password" id="password" placeholder="••••••••" className="input-outline focus:outline-none focus:ring-0 border f-label rounded-lg block w-full p-2.5" required=""></input>
                    <div className="mt-3">
                        <PasswordStrengthMeter password={password} />
                    </div>

                    
                    
                </div>

                <div className="pb-5">
                    <label htmlFor="confirmPassword" className="block mb-2 f-label text-default">Confirm Password</label>
                    <input onChange={(e) => setConfirmPassword(e.target.value)} type="password" name="confirmPassword" id="confirmPassword" placeholder="••••••••" className="input-outline focus:outline-none focus:ring-0 border f-label rounded-lg block w-full p-2.5" required="" />
                </div>               

                
                {/* <div className="flex items-center justify-between">
                    <div className="flex items-start">
                    </div>
                </div> */}
                
                <button disabled = {isLoading} 
                type="submit" 
                className={`w-full btn-primary text-white bg-primary-600 hover:bg-primary-700 
                focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 
                py-2.5 text-center " ${isLoading ? 'disabled cursor-not-allowed' : ''} `}>Reset Password</button>

                {error && <div className="error"> {error} </div>}
            </form>

        </div>





        </div>



        
    </div>
</div>



    
    )
}

export default ResetPassword