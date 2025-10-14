import { useEffect, useState } from 'react';
import axios from 'axios'

export default function Gallery() {
  const [rickMortyData, setRickMortyData] = useState(null);

  // get request of API
  let apiStr = 'https://rickandmortyapi.com/api/character/'


  async function getRickMortyData(apiStr) {
    try {

      let res = await axios.get(apiStr);

      let rickMortyData = res.data;

      console.log(rickMortyData)
      return rickMortyData;

    } catch (err) {
      console.error(err.message);
    }
  }

  useEffect(() => {
    async function getAgain() {

      let res = await getRickMortyData(apiStr)
      setRickMortyData(res);
    }

    getAgain()

  }, []);


  return (
    <div>Gallery</div>
  )
}
