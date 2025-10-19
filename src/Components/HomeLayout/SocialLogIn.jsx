import React from 'react';
import { FaGithub } from 'react-icons/fa';
import { FcGoogle } from 'react-icons/fc';


const SocialLogIn = () => {
    return (
        <div>
            <h2 className="font-bold mb-5">LogIn With</h2>
            <div className="space-y-3">
                <button className="btn w-full btn-outline btn-secondary">
                    <FcGoogle size={20} />
                    Login With Google
                </button>
                <button className="btn w-full btn-outline btn-primary">
                    <FaGithub size={20} />
                    Login With Github
                </button>
            </div>
        </div>
    );
};

export default SocialLogIn;