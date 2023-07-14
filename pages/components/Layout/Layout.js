"use client"

import * as React from 'react';
import TopNav from './TopNav'; 

const Layout = ({children}) => {

    return (
        <main>
            <TopNav />
            <div style={{marginTop:"85px"}}>
                {children}
            </div>
        </main>
    );
}

export default Layout;