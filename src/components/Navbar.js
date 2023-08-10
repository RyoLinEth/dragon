import React from 'react'
const Navbar = () => {
    return (
        <nav class="navbar navbar-inverse navbar-custom navbar-fixed-top">
            <div class="container">
                <div class="navbar navbar-header">
                    <a class="navbar-brand navbar-logo" href="#home"></a>
                    <div class="btn-group">
                        <button type="button" class="search-button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            <span class="ion-search"></span>
                        </button>
                        <div class="dropdown-menu dropdown-search-box animated fadeIn">
                            <span class="ion-android-arrow-dropup searchbox-caret animated fadeIn"></span>
                            <form method="get" action="#">
                                <input type="text" placeholder="Search..." class="search-box" required />
                            </form>
                        </div>
                    </div>
                    <button type="button" class="navbar-toggle custom-toggle-btn" data-toggle="collapse" data-target="#main-nav" aria-expanded="false">
                        <span class="sr-only">
                            Toggle navigation
                        </span>
                        <span class="icon-bar"></span>
                        <span class="icon-bar"></span>
                        <span class="icon-bar"></span>
                    </button>
                </div>
                <div class="collapse navbar-collapse" id="main-nav">
                    <ul class="nav navbar-nav navbar-right">
                        <li class="plain-link"><a href="#features">Heroes</a></li>
                        <li class="plain-link"><a href="#gallery">Gallery</a></li>
                        <li class="plain-link"><a href="#store">Store</a></li>
                        <li class="plain-link"><a href="#contact">Contact</a></li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default Navbar
