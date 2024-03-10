import React, { useState, useEffect } from 'react';
import { getBasicHeroInfoById } from '../../requests';
import './HeroesFeatured.css';
import HeroSimplified from '../HeroSimplified/HeroSimplified';
import Loader from '../Loader/Loader';

// const featuredHeroesIds = [10, 502, 505]
const maxHeroID = 731;

function getRandomInt(max) {
    return [ Math.floor(Math.random() * max), Math.floor(Math.random() * max), Math.floor(Math.random() * max) ];
}

const featuredHeroesIds = getRandomInt(maxHeroID);

function HeroesFeatured() {

    const [ isLoading, setLoadingState] = useState(true);

    useEffect(() => {
        setLoadingState(true);
        fetchAndRenderFeauturedHeroes();
        
      }, []);
    
    const [featuredHeroesList, setFeaturedHeroesList] = useState();
    
    const fetchAndRenderFeauturedHeroes = async () => {
    let heroes = [];
    for (const heroId of featuredHeroesIds){
        // getBasicHeroInfoById(heroId).then(hero => {
        //   heroes.push(hero);
        // })
        const data = await getBasicHeroInfoById(heroId);
        heroes.push(data);
    }
    // console.log(heroes);
    setFeaturedHeroesList(heroes);
    setLoadingState(false);
    }

    return (
        <section className='featured'>
            <h1>Featured Heroes</h1>
            {
            !isLoading && (
                <div className="featured__list">
                    {featuredHeroesList?.map(({ name, imgUrl, powerstats, id }) => (
                        <HeroSimplified key={id} name={name} imgUrl={imgUrl} powerstats={powerstats} id={id} />
                    ))}
                </div>
            )
            }
            {
                isLoading && <div className='loader-container'>
                        <Loader />
                    </div>
            }
        </section>
    );
}

export default HeroesFeatured;
