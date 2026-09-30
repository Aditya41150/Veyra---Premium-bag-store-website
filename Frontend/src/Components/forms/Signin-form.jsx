import React, { useState } from 'react'
import { Eye } from 'lucide-react';
import { EyeOff } from 'lucide-react';

const SigninForm = ({ onNavigate, onSuccess }) => {

    const [password, setPassword] = useState("");
    const [email, setEmail] = useState("");
    const [type, setType] = useState('password');
    const [icon, setIcon] = useState(EyeOff);
    const [message, setMessage] = useState("");
    const [isError, setIsError] = useState(false);
    const [isLoading, setIsLoading] = useState(false);

    //jab password dal rahe hai tab -> eye off else eye on 

    // password icon toggle function
    const handleToggle = () => {
        if (type === 'password') {
            setIcon(Eye);
            setType("text");
        }
        else {
            setIcon(EyeOff);
            setType('password')
        }
    }
    const handleLogin = async (event) => {
        event.preventDefault();
        setMessage("Logging you in...");
        setIsError(false);
        setIsLoading(true);
        try {
            const response = await fetch('http://localhost:3000/login', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ email, password })
            });
            const data = await response.json();
            if (!response.ok) {
                throw new Error(data.message || "Login Failed")
            }
            setMessage("Welcome back!");
            setTimeout(() => {
                setIsLoading(false);
                onSuccess();
            }, 1500);
        } catch (error) {
            setIsLoading(false);
            setIsError(true);
            setMessage(error.message);
        }

    }
    const Icon = icon;
    return (
        <div className="min-h-screen bg-white relative overflow-x-hidden overflow-y-auto">
            {/* Diagonal background */}
            {/* <div className="absolute inset-0 bg-linear-to-br from-cyan-700 to-cyan-900 transform -skew-y-6 origin-top-right z-0"></div> */}

            {/* BG color */}
            <div className="absolute inset-0 bg-[#006682]"></div>

            <div className="min-h-screen flex relative z-10">
                <div className="flex-1 flex flex-col justify-center py-12 px-4 sm:px-6 lg:flex-none lg:px-20 xl:px-24">
                    <div className="mx-auto w-full max-w-sm lg:w-96 bg-white p-8 rounded-lg border border-gray-100">
                        <div>
                            <h2 className="mt-2 text-3xl font-extrabold text-gray-900">
                                Sign in
                            </h2>
                            <p className="mt-2 text-sm text-gray-600">
                                Don't have an account?{' '}
                                <button type="button" onClick={() => onNavigate('signup')} className="font-medium text-cyan-700 hover:text-cyan-600 border-cyan-700 pb-0.5">
                                    Register here
                                </button>
                            </p>
                        </div>

                        <div className="mt-8">
                            <div className="mt-6">
                                <form onSubmit={handleLogin} className="space-y-6">
                                    <div>
                                        <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                                            Email address
                                        </label>
                                        <div className="mt-1 relative rounded-md">
                                            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                                <svg className="h-5 w-5 text-gray-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                                                    <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                                                    <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                                                </svg>
                                            </div>
                                            <input
                                                id="email"
                                                name="email"
                                                value={email}
                                                onChange={(event) => setEmail(event.target.value)}
                                                type="email"
                                                autoComplete="email"
                                                required
                                                className="appearance-none block w-full pl-10 pr-3 py-3 border-b-2 border-gray-200 placeholder-gray-400 focus:outline-none focus:border-cyan-700 sm:text-sm rounded-t-md bg-gray-50"
                                            />
                                        </div>
                                    </div>

                                    <div className="space-y-1">


                                        <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                                            Password
                                        </label>
                                        <div className="mt-1 relative rounded-md">
                                            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                                {/* the lock icon */}
                                                <svg className="h-5 w-5 text-gray-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                                                    <path
                                                        fillRule="evenodd"
                                                        d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z"
                                                        clipRule="evenodd"
                                                    />
                                                </svg>
                                            </div>
                                            <input id="password"
                                                name="password"
                                                type={type}
                                                autoComplete="current-password"
                                                value={password}
                                                onChange={(event) => setPassword(event.target.value)}
                                                required
                                                className="appearance-none block w-full pl-10 pr-10 py-3 border-b-2 border-gray-200 placeholder-gray-400 focus:outline-none focus:border-cyan-700 sm:text-sm rounded-t-md bg-gray-50"
                                            />
                                            <button
                                                type="button"
                                                onClick={handleToggle}
                                                className="absolute inset-y-0 right-0 pr-3 flex items-center text-gray-400 hover:text-gray-600"
                                                aria-label={type === 'password' ? 'Show password' : 'Hide password'}
                                            >
                                                <Icon className="h-5 w-5" />
                                            </button>
                                        </div>
                                        {message && (
                                            <p className={`text-xl mt-5 ${isError ? 'text-red-600' : 'text-green-600'}`}>
                                                {message}
                                            </p>
                                        )}
                                    </div>
                                    {/* below password field */}
                                    {/* Forgot pass and Remember me...  */}
                                    {/* 
                                    <div className="flex items-center justify-between">
                                        <div className="flex items-center">
                                            <input
                                                id="remember-me"
                                                name="remember-me"
                                                type="checkbox"
                                                className="h-4 w-4 text-cyan-700 focus:ring-cyan-500 border-gray-300 rounded"
                                            />
                                            <label htmlFor="remember-me" className="ml-2 block text-sm text-gray-900">
                                                Remember me
                                            </label>
                                        </div>
                                        
                                        <div className="text-sm">
                                            <a href="#" className="font-medium text-cyan-700 hover:text-cyan-600 border-b border-cyan-700 pb-0.5">
                                                Forgot password?
                                            </a>
                                        </div>
                                    </div> 
                                 */}

                                    <div>
                                        <button
                                            type="submit"
                                            disabled={isLoading}
                                            aria-busy={isLoading}
                                            className="w-full flex justify-center py-3 px-4 border border-transparent rounded-md text-sm font-medium text-white bg-cyan-700 hover:bg-cyan-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-cyan-500 disabled:cursor-not-allowed disabled:opacity-70"
                                        >
                                            {isLoading ? 'Logging you in...' : 'Sign in'}
                                        </button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="hidden lg:block relative w-0 flex-1">
                    <div className="absolute inset-0 flex items-center justify-center">
                        <div className="max-w-md w-full p-6">
                            <div className="text-white text-center">
                                <h2 className="text-4xl font-bold mb-6">Welcome to Veyra</h2>
                                <p className="text-cyan-100 mb-8">Carry It Beautifully.</p>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SigninForm;