import React, { useEffect, useState } from 'react';
import './SearchView.css';
import { useParams } from 'react-router';
import {searchHeroesByName} from '../../requests';
import HeroSimplified from '../HeroSimplified/HeroSimplified';
import Loader from '../Loader/Loader';


function SearchView() {
    const [ searchList, setSearchListContent ] = useState([]);
    const [ isLoading, setLoadingState] = useState(true);
    const { name } = useParams();

    useEffect(() => {
        setLoadingState(true);
        searchHeroesByName(name).then(searchResults => {
            const { data } = searchResults;

            if (data.error) {
                return ;
            }

            const {results} = data;
            setSearchListContent(results);
            setLoadingState(false);
            // console.log(results);

        })

    }, [name]);

    return (
        <>
        {
        !isLoading && ( <section className='search'>
            {searchList?.map(({ name, image, powerstats }) =>
                <HeroSimplified name={name} imgUrl={image.url} powerstats={powerstats} />
                // console.log(`${name}, ${image.url}, ${powerstats.combat}`)
            )}
        </section>
        )
        }
        {
            isLoading && <div className='loader-container'>
                    <Loader />
                </div>
        }
        </>
    );
}

export default SearchView;
