import React from 'react';
import Marquee from 'react-fast-marquee';

const LeatestNews = () => {
    return (
        <div className='flex items-center gap-4 bg-base-200 p-3'>
            <p className='bg-secondary text-base-100 px-3 py-2'>Leatest</p>
            <Marquee className='flex gap-8' pauseOnHover={true} speed={60}>
              <p className='font-bold'>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>  
              <p className='font-bold'>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>  
              <p className='font-bold'>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>  
              <p className='font-bold'>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>  
              <p className='font-bold'>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>  
            </Marquee>
        </div>
    );
};

export default LeatestNews;