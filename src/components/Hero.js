import React, { useState } from 'react';
import dragonImg from '../img/dragonImg/dragon1.jpg';
import dragonImg2 from '../img/dragonImg/dragon2.jpg';
import dragonImg3 from '../img/dragonImg/dragon3.jpg';
import dragonImg4 from '../img/dragonImg/dragon4.jpg';

const GallerySection = () => {

    const dragons = [
        {
            name: 'Drakonius the Emberborne',
            price: '50 USDT',
            description: "Drakonius is a fiery dragon known for its vibrant red scales and fierce temperament. Its breath weapon is a scorching stream of flames that can reduce anything in its path to ashes. Drakonius is often associated with volcanic landscapes and is believed to guard hidden treasures deep within molten caverns.",
            imgSrc: dragonImg
        },
        {
            name: 'Aurelia the Sky Serpent',
            price: '100 USDT',
            description: "Aurelia is a majestic and elegant dragon that soars through the skies with grace. Its iridescent blue and silver scales shimmer in the sunlight, and its breath weapon manifests as freezing gusts of icy wind. Legends tell of Aurelia being a guardian of the heavens, bringing rain to parched lands and protecting against stormy weather.",
            imgSrc: dragonImg2
        },
        {
            name: 'Terrador the Earthshaker',
            price: '200 USDT',
            description: "Terrador is a massive and sturdy dragon that is closely tied to the earth and mountains. Its scales resemble granite, and it has the power to create earthquakes and manipulate the earth itself. Terrador's breath weapon releases a cloud of swirling stones that can pummel its enemies. It is often revered as a symbol of stability and strength.",
            imgSrc: dragonImg3
        },
        {
            name: 'Sylphira the Enchantress',
            price: '500 USDT',
            description: "Sylphira is a rare and enigmatic dragon with shimmering, multicolored scales that change like the hues of a rainbow. Known for its spellbinding abilities, Sylphira can cast illusions, create mesmerizing displays of light, and even entrance the minds of those who gaze upon it. This dragon is often associated with arcane secrets and mystical realms, captivating all who encounter its beauty.",
            imgSrc: dragonImg4
        }
    ];
    const [showDescriptions, setShowDescriptions] = useState(Array(dragons.length).fill(false));
    const [isExpanded, setIsExpanded] = useState(false);

    const toggleDescription = (index) => {
        const newShowDescriptions = [...showDescriptions];
        newShowDescriptions[index] = !newShowDescriptions[index];
        setShowDescriptions(newShowDescriptions);
    };

    const toggleLayout = () => {
        setIsExpanded(!isExpanded);
    };

    const getColumnSize = () => {
        return isExpanded ? '6' : '12'; // Change this to '6' for expanded, '12' for normal
    };

    return (
        <div className="row pattern">
            <section className="ido" id="ido">
                <div className="container">
                    <div className="row items-container bottom-wrapper">
                        <p>&nbsp;<br />&nbsp;</p>
                    </div>
                    <div className="row">
                        <h2 style={{ padding: '10px' }}>Choose your Dragon</h2>
                        {dragons.map((dragon, index) => (
                            <article key={index} className={`col-sm-${getColumnSize()} col-md-3 box features-item thumbnail-100`} data-toggle="modal" data-target="#shop-modal">
                                <img className="features-img" src={dragon.imgSrc} alt={`${dragon.name} Hero Character`} data-Strength="9" data-Dexterity="7" data-Agility="7" data-Willpower="8" data-Intelligence="4"
                                    style={{ padding: '20px' }}
                                />
                                <h3>{dragon.price}</h3>
                                <h3>{dragon.name}</h3>
                                <div onClick={() => toggleDescription(index)} className="description-toggle-icon">
                                    <h3 style={{ fontSize: '15px' }}>Dragon info</h3>
                                </div>
                                {showDescriptions[index] && <p className="features-p">{dragon.description}</p>}
                            </article>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
};

export default GallerySection;
