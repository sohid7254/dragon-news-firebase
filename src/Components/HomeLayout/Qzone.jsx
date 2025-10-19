import React from 'react';
import Class from "../../assets/class.png"
import playGround from "../../assets/playground.png"
import swimming from "../../assets/swimming.png"

const Qzone = () => {
    return (
        <div className='bg-base-200 p-3'>
            <h2 className='font-bold mb-5'>Q-Zone</h2>
            <div className='space-y-5'>
                <img src={Class} alt="class" />
                <img src={playGround} alt="playground" />
                <img src={swimming} alt="swimming" />
            </div>
        </div>
    );
};

export default Qzone;