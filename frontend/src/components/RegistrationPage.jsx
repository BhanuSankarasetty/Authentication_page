import axios from 'axios'
import React from 'react'
import { useState, useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'

const RegistrationPage = () => {
    const [details,setdetails] = useState({
        username: '',
        email: '',
        password: '',
    })

    const navigate = useNavigate();

    const handlechanges =(e)=>{
        setdetails({ ...details,[e.target.name]: e.target.value })
    }

    const handlesubmit = async (e)=>{
        e.preventDefault();
        try {
            const response = await axios.post('http://localhost:3000/auth/register',details)
            if(response.status == 201){
                navigate('/login')
            }
            
            if(response.status === 409){
                console.log('user already exists')
            }

        }catch(err){
            console.log(err)
        }
    }

    return (
        <div>
            <div className="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8 bg-black h-screen">
                <div className="sm:mx-auto sm:w-full sm:max-w-sm">
                   
                    <h2 className="mt-10 text-center text-2xl/9 font-bold tracking-tight text-white">
                        Create your account
                    </h2>
                </div>

                <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
                    <form action="#" method="POST" className="space-y-6" onSubmit={handlesubmit}>
                        <div>
                            <label
                                htmlFor="username"
                                className="block text-sm/6 font-medium text-gray-100"
                            >
                                User name
                            </label>
                            <div className="mt-2">
                                <input
                                    id="username"
                                    name="username"
                                    placeholder='User name'
                                    type="text"
                                    onChange={handlechanges}
                                    required
                                    autoComplete="username"
                                    className="block w-full rounded-md bg-white/5 px-3 py-1.5 text-base text-white outline-1 -outline-offset-1 outline-white/10 placeholder:text-gray-500 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-500 sm:text-sm/6"
                                />
                            </div>
                        </div>
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
                                    placeholder='Email'
                                    type="email"
                                    onChange={handlechanges}
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
                                    placeholder='Password'
                                    type="password"
                                    onChange={handlechanges}
                                    required
                                    autoComplete="current-password"
                                    className="block w-full rounded-md bg-white/5 px-3 py-1.5 text-base text-white outline-1 -outline-offset-1 outline-white/10 placeholder:text-gray-500 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-500 sm:text-sm/6"
                                />
                            </div>
                        </div>

                        <div>
                            <button
                                type="submit"
                                className="flex w-full justify-center rounded-md bg-indigo-500 px-3 py-1.5 text-sm/6 font-semibold text-white hover:bg-indigo-400 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500"
                            >
                                Sign Up
                            </button>
                        </div>
                    </form>

                    <p className="mt-10 text-center text-sm/6 text-gray-400">
                        Have an account?{" "}
                        <Link
                        to="/login"
                        className="font-semibold text-indigo-400 hover:text-indigo-300" >
                            Login
                        </Link>
                    </p>
                </div>
            </div>


        </div>

    )
}

export default RegistrationPage
