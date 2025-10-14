import { useEffect, useState } from 'react';
import axios from 'axios'
import Character from '../components/Character';
import '../styles/Game.css';


export default function Gallery() {
  const [rickMortyData, setRickMortyData] = useState(null);
 

  // get request of API
  let apiStr = 'https://rickandmortyapi.com/api/character/'


  

  useEffect(() => {
    async function getRickMortyData() {
    try {

      let res = await axios.get(apiStr);

      let rickMortyData = res.data.results;

      
      setRickMortyData(rickMortyData);
      console.log(rickMortyData)

    } catch (err) {
      console.error(err.message);
    }
  }
  getRickMortyData();
  }, []);

  let loading = () => {
    return <h1>Loading Game...</h1>
  }

  let loaded = () => rickMortyData.map((char, index) => {
    return <Character key={index} {...char} />;
  });

  return rickMortyData ? (<div className="game-container">
        <h1>Gallery</h1>
        {/* CRITICAL: Use the .cards class to create the grid layout */}
        <div className="cards">
            {loaded()} 
        </div>
    </div>
) : loading();


}
