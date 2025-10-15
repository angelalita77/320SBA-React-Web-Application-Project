import { useEffect, useState } from 'react';
import axios from 'axios'
import Character from '../components/Character';
import '../styles/Gallery.css';


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

  return rickMortyData ? (<div className="gallery-container">
        <h1>Gallery</h1>
        <p className="paragraph-gallery">Here is a gallery of characters that will be part of
          future developments of the game. 
        </p>
        {/* CRITICAL: Use the .gallery-cards class to create the grid layout */}
        <div className="gallery-cards">
            {loaded()} 
        </div>
    </div>
) : loading();


}
