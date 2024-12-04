import React, { useState } from 'react';
import authService from '../appwrite/auth';
import { Link, useNavigate } from 'react-router-dom';
import { login } from '../store/authSlice';
import { Button, Input, Logo } from './index';
import { useDispatch } from 'react-redux';
import { useForm } from 'react-hook-form';

function Signup() {
    const navigate = useNavigate();
    const [error, setError] = useState('');
    const dispatch = useDispatch();
    const { register, handleSubmit } = useForm();
  
    const create = async (data) => {
      setError('');
      try {
        const userData = await authService.createAccount(data);
        if (userData) {
          const currentUser = await authService.getCurrentUser();
          if (currentUser) dispatch(login(currentUser));
          navigate('/');
        }
      } catch (error) {
        setError(error.message);
      }
    };
  
    return (
      <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-blue-50 to-white">
        <div className="w-full max-w-md bg-white rounded-xl shadow-lg p-8 border border-gray-200">
          <div className="mb-6 text-center">
            <Logo width="100%" />
          </div>
          <h2 className="text-2xl font-semibold text-gray-800">Sign Up to Create an Account</h2>
          <p className="mt-2 text-sm text-gray-600">
            Already have an account?{' '}
            <Link
              to="/login"
              className="text-blue-600 hover:text-blue-800 transition duration-200"
            >
              Sign In
            </Link>
          </p>
          {error && <p className="text-red-600 mt-4 text-center">{error}</p>}
          <form onSubmit={handleSubmit(create)} className="mt-6 space-y-5">
            <Input
              label="Full Name"
              placeholder="Enter your full name"
              {...register('name', { required: 'Full Name is required' })}
            />
            <Input
              label="Email"
              type="email"
              placeholder="Enter your email"
              {...register('email', {
                required: 'Email is required',
                pattern: {
                  value: /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/,
                  message: 'Please enter a valid email address',
                },
              })}
            />
            <Input
              label="Password"
              type="password"
              placeholder="Set your password"
              {...register('password', { required: 'Password is required' })}
            />
            <Button type="submit" className="w-full py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg shadow-md">
              Create Account
            </Button>
          </form>
        </div>
      </div>
    );
  }

  export default Signup;
  