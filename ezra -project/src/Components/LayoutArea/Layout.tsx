import React, { JSX } from 'react';
import Header from './Header/Header.tsx';
import './Layout.css';
import Content from '../ContentArea/Content/Content.tsx';
import PageContent from '../ContentArea/Content/PageContent.tsx';

function Layout(): JSX.Element {
    return (
        <div className="layout">
            <header>
                <Header/>
            </header>
            {/* <hr /> */}
            <main>
                <Content/>
                <PageContent/>
            </main>
        </div>
    );
}

export default Layout;