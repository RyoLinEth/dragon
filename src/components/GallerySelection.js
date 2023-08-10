import React from 'react';

const GallerySection = () => {
    return (
        <div className="row pattern-dark">
            <section className="gallery" id="gallery">
                <div className="container">
                    <div className="row">
                        <h2>Begin your Journey</h2>
                        <p className="section-description">
                            The ornate peace of these halls would be shattered now and then by the faint whispers of the Statue of a thousand faces, as the soul fragments collided and the Heroes met in glorious Combat. For them it would always be the first time, until someone's time to be free of this burden would come - then he'd regain consciousness of who he was and what he had to do.
                            <br /><br />But, this time, something was different.
                        </p>
                    </div>
                </div>
                <div className="row">
                    <div id="dragonic-carousel" className="carousel slide" data-ride="carousel" data-interval="false">
                        <div className="modal-corner modal-corner-top-left"></div>
                        <div className="modal-corner modal-corner-top-right"></div>
                        <div className="modal-corner modal-corner-bottom-left"></div>
                        <div className="modal-corner modal-corner-bottom-right"></div>
                        <div className="modal-border modal-border-top"></div>
                        <div className="modal-border modal-border-right"></div>
                        <div className="modal-border modal-border-bottom"></div>
                        <div className="modal-border modal-border-left"></div>
                        {/* Indicators */}
                        <ol className="carousel-indicators">
                            <li data-target="#dragonic-carousel" data-slide-to="0" className="active"></li>
                            <li data-target="#dragonic-carousel" data-slide-to="1"></li>
                            <li data-target="#dragonic-carousel" data-slide-to="2"></li>
                            <li data-target="#dragonic-carousel" data-slide-to="3"></li>
                            <li data-target="#dragonic-carousel" data-slide-to="4"></li>
                            <li data-target="#dragonic-carousel" data-slide-to="5"></li>
                            <li data-target="#dragonic-carousel" data-slide-to="6"></li>
                            <li data-target="#dragonic-carousel" data-slide-to="7"></li>
                            <li data-target="#dragonic-carousel" data-slide-to="8"></li>
                        </ol>
                        {/* Wrapper for slides */}
                        <div className="carousel-inner" role="listbox">
                            <div className="item active">
                                <div className="youtube-player" data-id="n6EmbpX1H94">
                                    <img src="img/video-thumbnail.jpg" alt="Dragonic Game Video Gameplay Graphics Showcase" />
                                </div>
                            </div>
                            {/* Add more <div className="item"> elements for other slides */}
                        </div>
                        {/* Controls */}
                        <a className="left carousel-control" href="#dragonic-carousel" role="button" data-slide="prev">
                            <span className="slider-arrow slider-arrow-left" aria-hidden="true"></span>
                            <span className="sr-only">Previous</span>
                        </a>
                        <a className="right carousel-control" href="#dragonic-carousel" role="button" data-slide="next">
                            <span className="slider-arrow slider-arrow-right" aria-hidden="true"></span>
                            <span className="sr-only">Next</span>
                        </a>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default GallerySection;
