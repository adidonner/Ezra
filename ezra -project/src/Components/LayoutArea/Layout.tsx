import React from 'react';
import Header from './Header/Header.tsx';
import './Layout.css';
import Content from '../ContentArea/Content/Content.tsx';

function Layout() {
    return (
        <div className="layout">
            <header>
                <Header/>
            </header>
            {/* <hr /> */}
            <main>
                <Content></Content>
            </main>
        </div>
    );
}

export default Layout;