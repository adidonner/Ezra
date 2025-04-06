import React, { JSX } from 'react';
// import Menu from '../Menu/Menu.tsx';
import Header from '../Header/Header.tsx';
import Footer from '../Footer/Footer.tsx';
import './Layout.css';
// import Routing from '../Routing/Routing.tsx';
// import Routing from '../Routing/Routing.tsx';
import Content from '../../ContentArea/Content/Content.tsx';
import PageContent from '../../ContentArea/Content/PageContent.tsx';
import Menu from '../Menu/Menu.tsx';

function Layout(): JSX.Element {
    return (
        <div className="Layout">
                <Menu/>
                <Header/>
                {/* <Routing/> */}
                <Content/>
                <PageContent/>
                <Footer/>
        </div>
    );
}

export default Layout;