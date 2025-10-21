import React, { use } from "react";
import user2 from "../../assets/user.png";
import { Link, NavLink } from "react-router";
import { AuthContext } from "../../Provider/AuthProvider";

const Navbar = () => {
    const { user, logOut } = use(AuthContext);

    const handleLogOut = () => {
        // console.log("user trying to log out");
        logOut()
        .then(() => {
            alert("You Have Successfully Log Out")
        })
        .catch(error => {
            console.log(error)
        })
    };

    return (
        <div className="flex justify-between">
            <div className="">{user && user.email}</div>
            <div className="nav flex gap-4 text-accent">
                <NavLink to={"/"}>Home</NavLink>
                <NavLink to={"/about"}>About</NavLink>
                <NavLink to={"/career"}>Career</NavLink>
            </div>
            <div className="login-btn flex gap-3">
                <img className="w-12 rounded-full" src={`${user ? user.photoUrl: user2}`} alt="" />
                {user ? (
                    <button onClick={handleLogOut} className="btn btn-primary px-8">
                        Log Out
                    </button>
                ) : (
                    <Link to={"/auth/login"} className="btn btn-primary px-8">
                        Login
                    </Link>
                )}
            </div>
        </div>
    );
};

export default Navbar;
