import React from 'react';
import Page from '../page';
import DesignTable from '../designTable';

const designData = {
    projects: [
        {
            Number: 'HP-0003',
            Name: '1240 Laurie',
            City: 'SAN JOSE',
            'Project Status': 'Vertical In Progress',
            'Serial Number': '123',
            'NTA Version': 'v1.1',
            'NTA Permit Submission': null,
            'Submit Building Permit': null,
            'Foundation FID': null,
            'Shops / Kits / FIDs / Sub': '2023-12-20',
            'Mfg Start': '2023-12-22',
            'Ship Mods': '2023-12-22',
            CofO: null,
        },
        {
            Number: 'HP-0007',
            Name: '1272 Malone',
            City: 'SAN JOSE',
            'Project Status': 'Permit Issued',
            'Serial Number': null,
            'NTA Version': 'v1',
            'NTA Permit Submission': null,
            'Submit Building Permit': null,
            'Foundation FID': null,
            'Shops / Kits / FIDs / Sub': null,
            'Mfg Start': null,
            'Ship Mods': null,
            CofO: null,
        },
        {
            Number: 'HP-0017',
            Name: '3942 Paladin',
            City: 'SAN JOSE',
            'Project Status': 'Vertical scheduled to start',
            'Serial Number': null,
            'NTA Version': null,
            'NTA Permit Submission': null,
            'Submit Building Permit': null,
            'Foundation FID': null,
            'Shops / Kits / FIDs / Sub': null,
            'Mfg Start': null,
            'Ship Mods': null,
            CofO: null,
        },
        {
            Number: 'HP-0019',
            Name: '1772 Barcelona',
            City: 'SAN JOSE',
            'Project Status': 'Horizontal in Progress',
            'Serial Number': null,
            'NTA Version': null,
            'NTA Permit Submission': null,
            'Submit Building Permit': null,
            'Foundation FID': null,
            'Shops / Kits / FIDs / Sub': null,
            'Mfg Start': null,
            'Ship Mods': null,
            CofO: null,
        },
    ],
    query_params: {},
};

function DesignDashboard() {
    return (
        <Page>
            <div className="ps-0 ps-md-4 pe-2 pe-sm-0 pe-xs-0">
                <h1 className="mt-2">Design Dashboard</h1>
                <DesignTable projects={designData?.projects} />
            </div>
        </Page>
    );
}

export default DesignDashboard;
