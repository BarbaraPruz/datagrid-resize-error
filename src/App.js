import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import DesignDashboard from './components/designDashboard';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'jquery/dist/jquery.min.js';
import 'bootstrap/dist/js/bootstrap.min.js';
import './App.css';

import { LicenseInfo } from '@mui/x-license';

LicenseInfo.setLicenseKey(process.env.REACT_APP_MUI_LICENSE);

function MyRoutes() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<DesignDashboard />} />
            </Routes>
        </BrowserRouter>
    );
}

function App() {
    return <MyRoutes />;
}

export default App;
