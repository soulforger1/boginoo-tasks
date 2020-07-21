import React from 'react';
import { Navigation } from './';

export const Layout = ({ children, status }) => {
    
    return (
        <div className='flex flex-col items-center pa-3' style={{ width: '100vw', height: '100vh' }}>
            {/* NAVIGATION */}
            <Navigation status={status} />

            {/* MAIN CONTENT */}
            <div className='w100 flex-1'>
                {children}
            </div>

            {/* FOOTER */}
            <div className='font-ubuntu fs-16 lh-18'>
                Made with ♥ by Nest Academy ( Student Zolboo)
            </div>
            <div className='font-ubuntu fs-16 lh-18' style={{ opacity: 0.2 }}>
                ©boginoo.io 2020
            </div>
        </div>
    );
};