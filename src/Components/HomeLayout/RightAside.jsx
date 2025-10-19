import React from 'react';
import SocialLogIn from './SocialLogIn';
import FindUs from './FindUs';
import Qzone from './Qzone';

const RightAside = () => {
    return (
        <div className='space-y-5'>
            <SocialLogIn/>
            <FindUs/>
            <Qzone/>
        </div>
    );
};

export default RightAside;