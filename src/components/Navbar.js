import React, { useState } from 'react';

const Navbar = () => {
    const [isExpanded, setIsExpanded] = useState(false);

    const toggleMenu = () => {
        setIsExpanded(!isExpanded);
    };

    const closeMenu = () => {
        setIsExpanded(false);
    };

    return (
        <nav className="navbar navbar-inverse navbar-custom navbar-fixed-top">
            <div className="container">
                <div className="navbar-header">
                    <a className="navbar-brand navbar-logo" href="#home"></a>
                    <button
                        type="button"
                        className="search-button"
                        data-toggle="dropdown"
                        aria-haspopup="true"
                        aria-expanded="false"
                    >
                        <span className="ion-search"></span>
                    </button>
                    <div className="dropdown-menu dropdown-search-box animated fadeIn">
                        <span className="ion-android-arrow-dropup searchbox-caret animated fadeIn"></span>
                        <form method="get" action="#">
                            <input
                                type="text"
                                placeholder="Search..."
                                className="search-box"
                                required
                            />
                        </form>
                    </div>
                    <button
                        type="button"
                        className={`navbar-toggle custom-toggle-btn ${isExpanded ? 'collapsed' : ''
                            }`}
                        onClick={toggleMenu}
                    >
                        <span className="sr-only">Toggle navigation</span>
                        <span className="icon-bar"></span>
                        <span className="icon-bar"></span>
                        <span className="icon-bar"></span>
                    </button>
                </div>
                <div
                    className={`collapse navbar-collapse ${isExpanded ? 'in' : ''
                        }`}
                    id="main-nav"
                >
                    <ul className="nav navbar-nav navbar-right">
                        <li className="plain-link">
                            <a href="#home" onClick={closeMenu}>
                                Home
                            </a>
                        </li>
                        <li className="plain-link">
                            <a href="#ido" onClick={closeMenu}>
                                IDO</a>
                        </li>
                        <li className="plain-link">
                            <a href="#dragons" onClick={closeMenu}>
                                About
                                </a>
                        </li>
                        <li className="plain-link">
                            <a href="#store" onClick={closeMenu}>
                                Store
                                </a>
                        </li>
                        <li className="plain-link">
                            <a href="#contact" onClick={closeMenu}>
                                Contact
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
