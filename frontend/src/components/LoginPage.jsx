import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios'

const LoginPage = () => {
    const [loginDetails, setloginDetails] = useState({
        email: '',
        password: ''
    })
    const [errorMessage, setErrorMessage] = useState("");
    const [loading, setLoading] = useState(false);
    const [showPassword, setShowPassword] = useState(false);

    const navigate = useNavigate()
    const handleChanges = (e) => {
        setloginDetails({ ...loginDetails, [e.target.name]: e.target.value })
        setErrorMessage('');
    }
    const handleSubmit = async (e) => {
        e.preventDefault()
        setLoading(true);
        try {
            const response = await axios.post('http://localhost:3000/auth/login', loginDetails)

            if (response.status === 200) {
                localStorage.setItem("token", response.data.token);
                navigate('/')
            }

        } catch (err) {
            if (err.response?.status === 401) {
                setloginDetails(prev => ({ ...prev, password: "" }));
                setErrorMessage("Wrong password");
            } else if (err.response?.status === 402) {
                setErrorMessage("No account found");
            } else {
                console.error(err);
                setErrorMessage("Something went wrong");
            }
        } finally {
            setLoading(false);
        }

    }

    return (
        <div>
            <div className="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8 bg-black h-screen">
                <div className="sm:mx-auto sm:w-full sm:max-w-sm">
                    <h1 className="mt-10 text-center text-4xl font-bold tracking-tight  text-indigo-400">Authentication Page</h1>
                    <h2 className="mt-10 text-center text-2xl/9 font-bold tracking-tight text-white">
                        Sign in to your account
                    </h2>
                </div>

                <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
                    <form onSubmit={handleSubmit} method="POST" className="space-y-6">
                        <div>
                            <label
                                htmlFor="email"
                                className="block text-sm/6 font-medium text-gray-100"
                            >
                                Email address
                            </label>
                            <div className="mt-2">
                                <input
                                    id="email"
                                    name="email"
                                    type="email"
                                    onChange={handleChanges}
                                    required
                                    autoComplete="email"
                                    className="block w-full rounded-md bg-white/5 px-3 py-1.5 text-base text-white outline-1 -outline-offset-1 outline-white/10 placeholder:text-gray-500 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-500 sm:text-sm/6"
                                />
                            </div>
                        </div>

                        <div>
                            <div className="flex items-center justify-between">
                                <label
                                    htmlFor="password"
                                    className="block text-sm/6 font-medium text-gray-100"
                                >
                                    Password
                                </label>
                                <div className="text-sm">
                                    <a
                                        href="#"
                                        className="font-semibold text-indigo-400 hover:text-indigo-300"
                                    >
                                        Forgot password?
                                    </a>
                                </div>
                            </div>
                            <div className="mt-2">
                                <input
                                    id="password"
                                    name="password"
                                    type={showPassword ? "text" : "password"}
                                    onChange={handleChanges}
                                    required
                                    autoComplete="current-password"
                                    className="block w-full rounded-md bg-white/5 px-3 py-1.5 text-base text-white outline-1 -outline-offset-1 outline-white/10 placeholder:text-gray-500 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-500 sm:text-sm/6"
                                />
                                <button type="button" onClick={() => setShowPassword(!showPassword)}>
                                    {showPassword ? "Hide" : "Show"}
                                </button>
                                {errorMessage && (
                                    <p className="text-red-500 text-sm mt-2" aria-live="polite">
                                        {errorMessage}
                                    </p>
                                )}


                            </div>
                        </div>

                        <div>
                            <button
                                disabled={loading}
                                type="submit"
                                className={`flex w-full justify-center rounded-md px-3 py-1.5 text-sm/6 font-semibold text-white 
                                    ${loading ? "bg-indigo-300 cursor-not-allowed" : "bg-indigo-500 hover:bg-indigo-400"}`}                                
                            >
                                {loading ? "Signing in..." : "Sign in"}
                            </button>
                        </div>
                    </form>

                    <p className="mt-10 text-center text-sm/6 text-gray-400">
                        Not have a account{" "}
                        <Link
                            to="/register"
                            className="font-semibold text-indigo-400 hover:text-indigo-300"
                        >
                            ? Register
                        </Link>
                    </p>
                </div>
            </div>

        </div>
    )
}

export default LoginPage;
