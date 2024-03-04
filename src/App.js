import './App.css';
import {getBasicHeroInfoById} from './requests'
import Nav from './Components/Nav/Nav'
import { useEffect, useState } from 'react';

const featuredHeroesIds = [10, 502, 505]

function App() {

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
    <>
    <Nav></Nav>
    <main>
      <section className='featured'>

        {featuredHeroesList?.map(({ name, imgUrl, powerstats }) => (
          <div className='featured__hero'>
            <h2>{name}</h2>
            <img src={imgUrl} alt={`${name}`} />
            <div className='featured__hero__stats'>
              <div>
                <p>{powerstats.combat}</p>
              </div>
              <div>
                <p>{powerstats.durability}</p>
              </div>
              <div>
                <p>{powerstats.intelligence}</p>
              </div>
              <div>
                <p>{powerstats.speed}</p>
              </div>
              <div>
                <p>{powerstats.strength}</p>
              </div>
            </div>
          </div>
        ))}

      </section>
    </main>
    <footer></footer>
    </>
  );
}

export default App;
