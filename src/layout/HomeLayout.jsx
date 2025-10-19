import React from 'react';
import { Outlet } from 'react-router';
import Header from '../Components/Header/Header';
import LeatestNews from '../Components/LeatestNews/LeatestNews';
import Navbar from '../Components/Navbar/Navbar';
import LeftAside from '../Components/HomeLayout/LeftAside';
import RightAside from '../Components/HomeLayout/RightAside';

const HomeLayout = () => {
    return (
        <div>
            <header>
                <Header />
                <section className="w-11/12 mx-auto my-3">
                    <LeatestNews></LeatestNews>
                </section>
                <nav className="w-11/12 mx-auto my-5">
                    <Navbar></Navbar>
                </nav>
            </header>
            <main className='w-11/12 mx-auto my-10 grid grid-cols-12 gap-3'>
                <aside className='col-span-3 sticky top-0 h-fit'>
                    <LeftAside></LeftAside>
                </aside>
                <section className="main col-span-6">
                    <Outlet />
                </section>
                <aside className='col-span-3 sticky top-0 h-fit'>
                    <RightAside></RightAside>
                </aside>
            </main>
        </div>
    );
};

export default HomeLayout;