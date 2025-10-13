import { useState, useEffect } from 'react';
import axios from 'axios';


export default function Game() {
    const [rickMortyData, setRickMortyData] = useState(null);

    const apiStr = 'https://rickandmortyapi.com/api'

    async function getRickMortyData(apiStr) {
        // get request of API
        try {
            let res = await axios.get(apiStr);

            setRickMortyData(res);
            console.log(res.data);

        } catch (err) {
            console.error(err.message)
        }

    }

    useEffect( ()=> {
        getRickMortyData(apiStr)
    }, []);


    return <h1>Game</h1>
}