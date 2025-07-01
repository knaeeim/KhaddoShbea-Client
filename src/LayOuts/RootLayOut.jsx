import React from 'react';
import Navbar from '../Pages/Shared/Navbar';
import { Outlet } from 'react-router';
import Footer from '../Pages/Shared/Footer';

const RootLayOut = () => {
    return (
        <div className=''>
            <Navbar></Navbar>
            <div className='min-h-[calc(100vh-300px)]'>
                <Outlet></Outlet>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default RootLayOut;