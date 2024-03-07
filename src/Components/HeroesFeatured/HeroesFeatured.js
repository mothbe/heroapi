import React, { useState, useEffect } from 'react';
import { getBasicHeroInfoById } from '../../requests';
import './HeroesFeatured.css';
import HeroSimplified from '../HeroSimplified/HeroSimplified';

const featuredHeroesIds = [10, 502, 505]

function HeroesFeatured() {
    useEffect(() => {
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
    console.log(heroes);
    setFeaturedHeroesList(heroes);
    }

    return (
        <section className='featured'>
            {featuredHeroesList?.map(({ name, imgUrl, powerstats }) => (
                <HeroSimplified name={name} imgUrl={imgUrl} powerstats={powerstats} />
            ))}
        </section>
    );
}

export default HeroesFeatured;
