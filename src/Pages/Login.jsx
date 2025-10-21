import React, { use, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router';
import { AuthContext } from '../Provider/AuthProvider';

const Login = () => {
    const [error, setError] = useState()
    const {signIn} = use(AuthContext)
    const location = useLocation();
    const navigate = useNavigate()

    const handleLogIn = (event) => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        // console.log(email, password)
        signIn(email, password)
        .then((result) =>{
            const user = result.user
            console.log(user)
            navigate(`${location.state ? location.state : "/"}`);
        })
        .catch(error => {
            const errorCode = error.code;
            // const errorMessage = error.message;
            // alert(errorCode, errorMessage)
            setError(errorCode, )
            
        })

    }

    return (
        <div className="flex justify-center items-center min-h-screen">
            <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl py-5">
                <h2 className="text-2xl font-semibold text-center">Log In Your Account</h2>
                <form onSubmit={handleLogIn} className="card-body">
                    <fieldset className="fieldset">
                        {/* email */}
                        <label className="font-bold">Email Address</label>
                        <input type="email" name='email' className="input" placeholder="Enter your email address" required/>
                        {/* password */}
                        <label className="font-bold ">Password</label>
                        <input type="password" name='password' className="input" placeholder="Enter Your Password" required/>
                        <div>
                            <a className="link link-hover">Forgot password?</a>
                        </div>
                        {
                            error && <p className='font-semibold text-red-400'>{error}</p>
                        }
                        <button type='submit' className="btn btn-neutral mt-4">Login</button>
                        <p className='text-center font-semibold pt-2'>
                            Don't Have An Account? <Link to={"/auth/register"} className='text-red-400 hover:underline'>Register</Link>
                        </p>
                    </fieldset>
                </form>
            </div>
        </div>
    );
};

export default Login;