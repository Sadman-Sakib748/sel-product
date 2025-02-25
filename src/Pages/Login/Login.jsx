import { useForm } from 'react-hook-form';
import { useContext, useState } from 'react';
import { Eye, EyeOff } from 'lucide-react';
import './style.css'; // Importing the CSS file for animation
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import { AuthContext } from '../../Provider/AuthProviders';
import SocialLogin from '../SocialLogin/SocialLogin';

const Login = () => {
    const { signIn } = useContext(AuthContext);
    const [showPassword, setShowPassword] = useState(false);
    const { register, handleSubmit, reset, formState: { errors }, } = useForm();
    const navigate = useNavigate();

    // Submit handler
    const onSubmit = (data) => {
        console.log(data);
        signIn(data.email, data.password)
            .then((userCredential) => {
                const loggedUser = userCredential.user;
                console.log(loggedUser);

                // Success alert
                Swal.fire({
                    title: 'Success!',
                    text: 'You have logged in successfully.',
                    icon: 'success',
                    confirmButtonText: 'Great!',
                });

                // Redirect to dashboard or home page
                navigate('/'); // Change '/dashboard' to wherever you'd like to redirect
            })
            .catch((error) => {
                console.error(error.message);

                // Error alert
                Swal.fire({
                    title: 'Error!',
                    text: error.message,
                    icon: 'error',
                    confirmButtonText: 'Try Again',
                });
            });
    };

    return (
        <div className="w-full h-screen mt-24 my-40 items-center bg-gray-100 bg-animation">
            <div className="w-full p-8 space-y-6 bg-white shadow-lg rounded-lg form-animation">
                <div className="w-full space-y-2 mb-8">
                    <h1 className="text-2xl font-bold tracking-tight">MY ACCOUNT</h1>
                    <p className="text-muted-foreground">MANAGE YOUR ACCOUNT AND SEE YOUR ORDERS</p>
                </div>

                <div className="space-y-6">
                    <h2 className="text-xl font-semibold">LOGIN</h2>

                    <form className="space-y-4 w-full" onSubmit={handleSubmit(onSubmit)}>
                        {/* Email Address */}
                        <div className="space-y-2">
                            <label htmlFor="email" className="font-medium">Username or email address *</label>
                            <input
                                id="email"
                                type="text"
                                {...register('email', {
                                    required: 'Username or email is required',
                                    pattern: {
                                        value: /\S+@\S+\.\S+/,
                                        message: 'Email address is invalid',
                                    }
                                })}
                                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                            />
                            {errors.email && <div className="text-red-500 text-sm">{errors.email.message}</div>}
                        </div>

                        {/* Password */}
                        <div className="space-y-2">
                            <label htmlFor="password" className="font-medium">Password *</label>
                            <div className="relative">
                                <input
                                    id="password"
                                    type={showPassword ? 'text' : 'password'}
                                    {...register('password', { required: 'Password is required' })}
                                    className={`w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 ${errors.password ? 'vibration' : ''}`}
                                />
                                <button
                                    type="button"
                                    className="absolute right-2 top-1/2 -translate-y-1/2"
                                    onClick={() => setShowPassword(!showPassword)}
                                >
                                    {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                                    <span className="sr-only">{showPassword ? 'Hide password' : 'Show password'}</span>
                                </button>
                            </div>
                            {errors.password && <div className="text-red-500 text-sm">{errors.password.message}</div>}
                        </div>

                        {/* Remember Me */}
                        <div className="flex items-center space-x-2">
                            <input id="remember" type="checkbox" {...register('remember')} />
                            <label htmlFor="remember" className="leading-none">Remember me</label>
                        </div>

                        {/* Submit Button */}
                        <div className="w-24">
                            <input
                                type="submit"
                                className="bg-zinc-900 text-white hover:bg-zinc-800 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-white transition-all duration-200 transform focus:scale-105"
                            />
                        </div>

                        {/* Forgot Password */}
                        <div className="text-start">
                            <a href="#" className="text-sm text-muted-foreground hover:underline">
                                Lost your password?
                            </a>
                        </div>
                    </form>
                    <SocialLogin />
                </div>
            </div>
        </div>
    );
};

export default Login;
