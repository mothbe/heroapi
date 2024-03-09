import React, { useEffect, useState } from 'react';
import './SearchView.css';
import { useParams } from 'react-router';
import {searchHeroesByName} from '../../requests';
import HeroSimplified from '../HeroSimplified/HeroSimplified';


function SearchView() {
    const [ searchList, setSearchListContent ] = useState([]);
    const { name } = useParams();

    useEffect(() => {
        searchHeroesByName(name).then(searchResults => {
            const { data } = searchResults;

            if (data.error) {
                return ;
            }

            const {results} = data;
            setSearchListContent(results);
            // console.log(results);

        })

    }, [name]);

    return (
        <section className='featured'>
            {searchList?.map(({ name, image, powerstats }) => (
                <HeroSimplified name={name} imgUrl={image.url} powerstats={powerstats} />
                // console.log(`${name}, ${image.url}, ${powerstats.combat}`)
            ))}
        </section>
    );
}

export default SearchView;
