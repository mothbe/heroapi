import React, { useState, useEffect } from 'react';
import combat from '../../assets/icons/boxing.svg';
import durability from '../../assets/icons/durable.svg';
import strength from '../../assets/icons/fist.svg';
import speed from '../../assets/icons/speedometer.svg';
import intelligence from '../../assets/icons/thinking.svg';
import './HeroDetails.css';
// import HeroSimplified from '../HeroSimplified/HeroSimplified';
import Loader from '../Loader/Loader';
import { getHeroDetailsById } from '../../requests';
import { useParams } from 'react-router';

// const featuredHeroesIds = [10]

function HeroDetails() {
    const [ isLoading, setLoadingState] = useState(true);
    const [ hero, setHeroDetails] = useState();
    const { id } = useParams();

    useEffect(() => {
        setLoadingState(true);
        getHeroDetailsById(id).then(searchResults => {
            const { data } = searchResults;

            if (data.error) {
                return ;
            }

            setHeroDetails(data);
            setLoadingState(false);
            // console.log(data.name);
            // console.log(data.image.url);
        })

    }, [id]);

    return (
        <section className='featured'>
        <h1>Hero Details!</h1>
        {
        !isLoading && <div className='featured__hero'>
            <h2>{hero.name}</h2>
            <img src={hero.image.url} alt={`${hero.name}`} />
            <div className='featured__hero__stats'>
                <div>
                    <img className='featured__hero__stats__icon' src={combat} alt="combat icon" />
                    <p>{hero.powerstats.combat}</p>
                </div>
                <div>
                    <img className='featured__hero__stats__icon' src={durability} alt="durability icon" />
                    <p>{hero.powerstats.durability}</p>
                </div>
                <div>
                    <img className='featured__hero__stats__icon' src={intelligence} alt="intelligence icon" />
                    <p>{hero.powerstats.intelligence}</p>
                </div>
                <div>
                    <img className='featured__hero__stats__icon' src={speed} alt="speed icon" />
                    <p>{hero.powerstats.speed}</p>
                </div>
                <div>
                    <img className='featured__hero__stats__icon' src={strength} alt="strength icon" />
                    <p>{hero.powerstats.strength}</p>
                </div>
            </div>

            <div>
                <ul>
                <h2>Bio</h2>
                    <li>Full name: { hero.biography["full-name"] }</li>
                    <li>Alter egos: { hero.biography["alter-egos"] }</li>
                    <li>Aliases: { hero.biography["aliases"] }</li>
                    <li>Place of birth: { hero.biography["place-of-birth"] }</li>
                    <li>First appearance: { hero.biography["first-appearance"] }</li>
                    <li>Alignment: { hero.biography.alignment }</li>
                </ul>
                <ul>
                <h2>Appearance</h2>
                    <li>Gender: {hero.appearance.gender }</li>
                    <li>Race: {hero.appearance.race }</li>
                </ul>
                <ul>
                <h2>Work</h2>
                    <li>Occupation: {hero.work.occupation }</li>
                    <li>Base: {hero.work.base }</li>
                </ul>
            </div>
        </div>
        }
        {
            isLoading && <div className='loader-container'>
                    <Loader />
                </div>
        }
        </section>
    );
}

export default HeroDetails;
