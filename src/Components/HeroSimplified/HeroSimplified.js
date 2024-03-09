import React from 'react';
import combat from '../../assets/icons/boxing.svg';
import durability from '../../assets/icons/durable.svg';
import strength from '../../assets/icons/fist.svg';
import speed from '../../assets/icons/speedometer.svg';
import intelligence from '../../assets/icons/thinking.svg';
import './HeroSimplified.css';

function HeroSimplified({ name, imgUrl, powerstats }) {
    return (
        <div className='featured__hero'>
            <h2>{name}</h2>
            <img src={imgUrl} alt={`${name}`} />
            <div className='featured__hero__stats'>
                <div>
                    {/* <icon.combat /> */}
                    {/* <img className='featured__hero__stats__icon' src="../../assets/icons/boxing.svg" alt="combat icon" /> */}
                    <img className='featured__hero__stats__icon' src={combat} alt="combat icon" />
                    <p>{powerstats.combat}</p>
                </div>
                <div>
                    <img className='featured__hero__stats__icon' src={durability} alt="durability icon" />
                    <p>{powerstats.durability}</p>
                </div>
                <div>
                    <img className='featured__hero__stats__icon' src={intelligence} alt="intelligence icon" />
                    <p>{powerstats.intelligence}</p>
                </div>
                <div>
                    <img className='featured__hero__stats__icon' src={speed} alt="speed icon" />
                    <p>{powerstats.speed}</p>
                </div>
                <div>
                    <img className='featured__hero__stats__icon' src={strength} alt="strength icon" />
                    <p>{powerstats.strength}</p>
                </div>
            </div>
        </div>
    );
}

export default HeroSimplified;
