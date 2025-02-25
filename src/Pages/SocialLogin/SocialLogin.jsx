import React, { useContext } from 'react';
import { FaGoogle } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../../Provider/AuthProviders';

const SocialLogin = () => {
    const { googleSignIn } = useContext(AuthContext);
    const navigate = useNavigate();

    const handleGoogleSignIn = () => {
        googleSignIn()
            .then(res => {
                console.log(res.user);  // Display the user data
                navigate('/');  // Redirect after successful login
            })
            .catch(error => {
                console.error('Error signing in with Google:', error.message);
            });
    };

    return (
        <div className='p-6'>
            <div className='divider'></div>
            <div>
                <button onClick={handleGoogleSignIn} className='btn'>
                    <FaGoogle className='mr-4' />
                    Google
                </button>
            </div>
        </div>
    );
};

export default SocialLogin;
