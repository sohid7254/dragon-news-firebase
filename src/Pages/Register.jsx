import React, { use, useState } from "react";
import { Link, useNavigate } from "react-router";
import { AuthContext } from "../Provider/AuthProvider";

const Register = () => {
    const {setUser, creatUser, updateUser} = use(AuthContext)
    const [nameError, setNameError] = useState("")

    const navigate = useNavigate()

    const handleRegister = (event) => {
        
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        if(name.length < 5){
            setNameError("Name Should Be more than 5 charecter")
            return
        }else {
            setNameError("")
        }
        const photo = form.photo.value;
        const email = form.email.value;
        const password = form.password.value;
        // console.log(name, photo, email, password)
        creatUser(email, password)
        .then(result => {
            const user = result.user;
            updateUser({displayName:name, photoUrl: photo}).then(() => {
                setUser({ ...user, displayName: name, photoUrl: photo });
                navigate("/")
            }).catch ((error) => {
                console.log(error)
                setUser(user)
            })
            
        })
        .catch( error => {
            const errorMessage = error.message;
            alert(errorMessage)
        })


    }


    return (
        <div className="flex justify-center items-center min-h-screen">
            <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl py-5">
                <h2 className="text-2xl font-semibold text-center">Register Your Account</h2>
                <form onSubmit={handleRegister} className="card-body">
                    <fieldset className="fieldset">
                        {/* Name */}
                        <label className="font-bold">Your Name</label>
                        <input type="text" required name="name" className="input" placeholder="Enter your email address" />
                        {
                            nameError && <p className="font-semibold text-red-400">{nameError}</p>
                        }
                        {/* Photo Url */}
                        <label className="font-bold">Photo Url</label>
                        <input type="text" required name="photo" className="input" placeholder="Enter your email address" />
                        {/* email */}
                        <label className="font-bold">Email Address</label>
                        <input type="email" required name="email" className="input" placeholder="Enter your email address" />
                        {/* password */}
                        <label className="font-bold ">Password</label>
                        <input type="password" required name="password" className="input" placeholder="Enter Your Password" />
                        {/* button */}
                        <button type="submit" className="btn btn-neutral mt-4">
                            Register
                        </button>

                        <p className="text-center font-semibold pt-2">
                            Already Have An Account?{" "}
                            <Link to={"/auth/login"} className="text-red-400 hover:underline">
                                Log In
                            </Link>
                        </p>
                    </fieldset>
                </form>
            </div>
        </div>
    );
};

export default Register;
