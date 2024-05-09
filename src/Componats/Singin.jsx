import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { createRoot } from "react-dom/client";

import axios from 'axios';

const LoginForm = () => {
  const {  handleSubmit, formState: { errors } } = useForm();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const onSubmit = async (data) => {
    const userInfo = {
      email: data.email,
      password: data.password
    }
  console.log(data);
    try {
      const response = await axios.post("http://localhost:8000/api/v1/user/SingIn", userInfo);
      console.log(response.data);
      alert("Signup successful");
    } catch (error) {
      console.error("Error:", error);
      alert("Error occurred");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-900 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8">
        <div>
          <h2 className="mt-6 text-center text-3xl font-extrabold text-white">Sign in to your account</h2>
        </div>
        <form className="mt-8 space-y-6" onSubmit={handleSubmit(onSubmit)}>
          <input type="hidden" name="remember" value="true" />
          {errors && (
            <div className="rounded-md bg-red-100 p-4">
              <div className="flex">
                <div className="flex-shrink-0">
                  <svg
                    className="h-5 w-5 text-red-400"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 2.5a.5.5 0 01.5.5v6a.5.5 0 01-1 0V3a.5.5 0 01.5-.5zM10 13a1 1 0 100-2 1 1 0 000 2zM9.5 12a.5.5 0 01.5-.5h.5a.5.5 0 010 1h-.5a.5.5 0 01-.5-.5zM17 10a7 7 0 11-14 0 7 7 0 0114 0zm-7-6a1 1 0 00-1 1v4a1 1 0 102 0V5a1 1 0 00-1-1z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
                <div className="ml-3">
                  <p className="text-sm text-red-700">{errors.email && errors.email.message}</p>
                  <p className="text-sm text-red-700">{errors.password && errors.password.message}</p>
                </div>
              </div>
            </div>
          )}
          <div className="rounded-md shadow-sm -space-y-px">
            <div>
              <label htmlFor="email-address" className="sr-only text-white">
                Email address
              </label>
              <input
                id="email-address"
                name="email"
                type="email"
                autoComplete="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="appearance-none rounded-none relative block w-full px-3 py-2 bg-gray-800 border border-gray-500 placeholder-gray-500 text-white rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                placeholder="Email address"
              />
            </div>
            <br />
            <div>
              <label htmlFor="password" className="sr-only text-white">
                Password
              </label>
              <input
                id="password"
                name="password"
                type="password"
                autoComplete="current-password"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="appearance-none rounded-none relative block w-full px-3 py-2 bg-gray-800 border border-gray-500 placeholder-gray-500 text-white rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                placeholder="Password"
              />
            </div>
          </div>

          <div className="text-sm text-indigo-400 text-center">
            <a href="#" className="hover:underline">Forgot your password?</a>
          </div>

          <div>
            <button
              type="submit"
              className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              Sign in
            </button>
          </div>

          <div className="text-center">
            <p className="text-white text-sm">Don't have an account? <a href="/" className="text-indigo-400">Homepage</a></p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default LoginForm;
