import React from 'react';

const HeroSelection = () => {
    const heroes = [
        {
            name: 'Aleister',
            imgSrc: 'img/character-1.jpg',
            description: "Aleister, the former demonlord, is always looking at others bearing a malefic grin upon his twisted visage, harnessing all the power he can muster as he directs bolts of pure chaos towards his foes.",
        },
        {
            name: 'Hecate',
            imgSrc: 'img/character-2.jpg',
            description: "The only place Hecate feels safe is total Darkness, where she envelopes herself and thrives, until it totally consumes her existence. Until that strange familiar odor which vanished, reappears and stabs you - in the Dark.",
        },
        {
            name: 'Theregar',
            imgSrc: 'img/character-3.jpg',
            description: "Theregar's smile looks intimidating as it is, yet is amplified by the fel green hue of the enchantments he is preparing: As he deflects his attackers, his foes are enlightened by his immense control of the Shadows...",
        },
        {
            name: 'Roth',
            imgSrc: 'img/character-4.jpg',
            description: "Void claimed all in the Halls of Reflection as Roth rised from the Stone, his voice echoing again in the sultry darkness. His enemies fallen, their eyesight blurred, their powers escaping their body as he consumed their souls...",
        },
    ];

    return (
        <div className="row pattern">
            <section className="features" id="features">
                <div className="container">
                    <div className="row">
                        <h2>Dragon Coin</h2>
                        <p className="section-description">
                            A smokescreen covered their continuous blinks towards the outskirts of the great kingdom, until the cathedral was the only thing clearly visible. Along the way, they could sense the great shadow of a Dragon, watching their every step. Then, the voices of survivors seeking revenge towards the witch echoed through the destroyed cathedral halls. Others were tending to their wounded, others were trying to collect the Enlightened's burning husk from the great funeral pyre, whilst the archbishop was chanting blessings, leading the flock of peasants as if they were warriors, preparing to battle the mighty dragon...
                        </p>
                    </div>
                    <div className="row items-container bottom-wrapper">
                        <p>&nbsp;<br />&nbsp;</p>
                    </div>
                    <div className="row">
                        <h2>Choose your Hero</h2>
                        {heroes.map((hero, index) => (
                            <article key={index} className="col-sm-6 col-md-3 box features-item thumbnail-100" data-toggle="modal" data-target="#shop-modal">
                                <img className="features-img" src={hero.imgSrc} alt={`${hero.name} Hero Character`} data-Strength="9" data-Dexterity="7" data-Agility="7" data-Willpower="8" data-Intelligence="4" />
                                <span className="item-name-caption hidden-xs">
                                    {hero.name}
                                </span>
                                <h3>{hero.name}</h3>
                                <p className="features-p">
                                    {hero.description}
                                </p>
                            </article>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
}

export default HeroSelection;
