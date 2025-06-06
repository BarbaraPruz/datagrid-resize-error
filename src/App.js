import React from 'react';

import DesignDashboard from './components/designDashboard';

import './App.css';

import { LicenseInfo } from '@mui/x-license';

LicenseInfo.setLicenseKey(process.env.REACT_APP_MUI_LICENSE);

function App() {
    return <DesignDashboard />;
}

export default App;
