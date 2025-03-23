import ReactDom from 'react-dom/client'
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Layout from './Components/LayoutArea/Layout.tsx';
import { BrowserRouter } from 'react-router-dom';
// import interceptors from './Utils/interceptors';

// interceptors.create();

const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
);
root.render(
    <BrowserRouter>
        <Layout/>
    </BrowserRouter>
);


