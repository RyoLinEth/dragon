import React from 'react';

const StoreSection = () => {
    return (
        <div className="row pattern">
            <section className="store" id="store">
                <div className="container">
                    <div className="row">
                        <h2>Choose your weapon</h2>
                        <p className="section-description">
                            Unleash your revenge upon mankind as you turn and look towards the human cities, only to see a great pillar of flame hit their cathedrals, the ensuing shockwave and flamewall erasing all signs of their kingdoms' existence.
                        </p>
                    </div>
                    <div className="row items-container">
                        <div className="col-xs-5 col-sm-3 gallery-item item-1 thumbnail-50" data-toggle="modal" data-target="#shop-modal">
                            <img src="img/dragonic-gameplay-01.jpg" alt="iOS Version" />
                            <span className="item-price-caption hidden-xs">€ 4.99</span>
                            <span className="item-name-caption hidden-xs">AppStore - iOS Version</span>
                            {/* Add the rest of the content */}
                        </div>
                        <div className="col-xs-5 col-xs-offset-2 col-sm-3 col-sm-offset-1 gallery-item item-2 thumbnail-50" data-toggle="modal" data-target="#shop-modal">
                            <img src="img/dragonic-gameplay-02.jpg" alt="Android Version" />
                            <span className="item-price-caption hidden-xs">€ 4.49</span>
                            <span className="item-name-caption hidden-xs">Play Store - Android Version</span>
                            {/* Add the rest of the content */}
                        </div>
                        <div className="clearfix visible-xs"></div>
                        <div className="col-xs-5 col-sm-3 col-sm-offset-1 gallery-item item-3 thumbnail-50" data-toggle="modal" data-target="#shop-modal">
                            <img src="img/dragonic-gameplay-03.jpg" alt="PC & Mac Version" />
                            <span className="item-price-caption hidden-xs">€ 5.99</span>
                            <span className="item-name-caption hidden-xs">Steam - PC Version</span>
                            {/* Add the rest of the content */}
                        </div>
                    </div>
                    <div className="row items-container bottom-wrapper">
                        {/* Modal */}
                        <div className="modal fade" id="shop-modal" tabIndex="-1" role="dialog" aria-labelledby="myModalLabel">
                            <div className="modal-dialog" role="document">
                                <div className="modal-content">
                                    {/* Add the modal content */}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default StoreSection;
