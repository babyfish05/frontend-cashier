import React from 'react'
import MainHeader from "./MainHeader"

const MainLayout = ({children} : {children: React.ReactNode})=> {
    return (
        <div className='bg-gray-500 w-full min-h-screen'>
            <MainHeader/>
            <h1>Main Layout</h1>
            <hr />
            <main>{children}</main>
        </div>
    );
};

export default MainLayout;