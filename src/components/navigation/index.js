import React, { useEffect, useMemo, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

import {
    AroLogoHouse,
    DesignIcon,
} from '../../icons';
import './navigation.css';

const showToggleMaxWidth = 768;

const options = [
    {
        path: '/design',
        title: 'DesignDashboard',
        Icon: DesignIcon,
    },
];

function getWindowSize() {
    const { innerWidth, innerHeight } = window;
    return { innerWidth, innerHeight };
}

const Navigation = ({ navOpen }) => {
    const { pathname } = useLocation();
    const [windowSize, setWindowSize] = useState(getWindowSize());

    useEffect(() => {
        function handleWindowResize() {
            setWindowSize(getWindowSize());
        }
        window.addEventListener('resize', handleWindowResize);
        return () => {
            window.removeEventListener('resize', handleWindowResize);
        };
    }, []);

    const isVisible = useMemo(
        () => (windowSize.innerWidth < showToggleMaxWidth ? navOpen : true),
        [windowSize, navOpen]
    );

    const visibilityClass = isVisible ? 'd-block' : 'inActive';

    const getBackgroundClass = (path) => (path === pathname ? 'highlight' : '');

    return (
        <div className={`verticalNav bg-white ${visibilityClass}`} id="sidebar">
            <div className="py-4 d-flex flex-column align-items-center">
                <div>
                    <AroLogoHouse size={84} />
                    <ul className="mt-3 nav flex-column bg-white gap-2">
                        {options.map((opt) => {
                            const { path, title, Icon } = opt;
                            return (
                                <li
                                    key={title}
                                    className={`nav-item text-center rounded mx-3 ${getBackgroundClass(
                                        path
                                    )}`}
                                >
                                    <Link to={{ pathname: path }} title={title}>
                                        <Icon />
                                    </Link>
                                </li>
                            );
                        })}
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Navigation;
