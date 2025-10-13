import { useState, useEffect } from 'react';
import apiService from '../utilities/apiService.mjs'
import Character from '../components/Character';


export default function Game() {
    const [rickMortyData, setRickMortyData] = useState(null);

    const apiStr = 'https://rickandmortyapi.com/api/character/'
   

    useEffect( ()=> {
        async function getAgain() {
            let res = await apiService.getRickMortyData(apiStr);
            setRickMortyData(res);
           

        }
        getAgain();
    }, []);

    let loading = () => {
        return <h1>Loading Game...</h1>
    }

    let loaded = () => rickMortyData.map( (char, i) =>{
        return <Character key={i}{...char}/>
    })
    

    return rickMortyData ? <div className='gameContainer'>{loaded()}</div> : loading();
}