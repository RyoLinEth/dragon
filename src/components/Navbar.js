import React from 'react'
const Navbar = () => {
    return (
        <nav className="navbar navbar-inverse navbar-custom navbar-fixed-top">
            <div className="container">
                <div className="navbar navbar-header">
                    <div className="navbar-brand navbar-logo" href="#home" />
                    <div className="btn-group">
                        <button type="button" className="search-button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            <span className="ion-search"></span>
                        </button>
                        <div className="dropdown-menu dropdown-search-box animated fadeIn">
                            <span className="ion-android-arrow-dropup searchbox-caret animated fadeIn"></span>
                            <form method="get" action="#">
                                <input type="text" placeholder="Search..." className="search-box" required />
                            </form>
                        </div>
                    </div>
                    <button type="button" className="navbar-toggle custom-toggle-btn" data-toggle="collapse" data-target="#main-nav" aria-expanded="false">
                        <span className="sr-only">
                            Toggle navigation
                        </span>
                        <span className="icon-bar"></span>
                        <span className="icon-bar"></span>
                        <span className="icon-bar"></span>
                    </button>
                </div>
                <div className="collapse navbar-collapse" id="main-nav">
                    <ul className="nav navbar-nav navbar-right">
                        <li className="plain-link"><a href="#features">Heroes</a></li>
                        <li className="plain-link"><a href="#gallery">Gallery</a></li>
                        <li className="plain-link"><a href="#store">Store</a></li>
                        <li className="plain-link"><a href="#contact">Contact</a></li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default Navbar
