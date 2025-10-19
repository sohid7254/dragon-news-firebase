import React from 'react';
import logo from "../../assets/logo.png"
import { format } from 'date-fns';

const Header = () => {
    return (
        <div className="flex justify-center flex-col items-center gap-3">
            <img src={logo} alt="" className="w-[400px]" />
            <p className="text-accent">Journalism without Fear and Favour</p>
            <p className='font-semibold text-accent'>{format(new Date(), "EEEE, MMMM MM, 	yyyy.")}</p>
        </div>
    );
};

export default Header;