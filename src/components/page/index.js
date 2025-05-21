import React, { useState } from 'react';

import AroToast from '../aroToast';
import Navigation from '../navigation';
import { MenuCloseIcon, MenuIcon } from '../../icons';
import './page.css';

const Page = ({ children }) => {
    const [navOpen, setNavOpen] = useState(false);

    const handleToggle = () => setNavOpen((isOpen) => !isOpen);

    return (
        <div className="container-fluid pe-3">
            <div id="content" className={`page-content ${!navOpen && 'active'}`}>
                <div className="d-block d-md-none">
                    <button
                        id="sidebarCollapse"
                        type="button"
                        className="btn btn-outline-dark nav-button"
                        onClick={handleToggle}
                    >
                        {navOpen ? <MenuCloseIcon /> : <MenuIcon />}
                    </button>
                </div>
                <AroToast />
                <div className="pt-4 pt-md-2 ps-0 ps-md-4 ms-md-5 ">{children}</div>
            </div>
            <Navigation navOpen={navOpen} />
        </div>
    );
};

export default Page;
