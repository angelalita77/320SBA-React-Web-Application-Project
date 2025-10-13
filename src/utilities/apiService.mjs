import axios from "axios";

async function getRickMortyData(apiStr) {
        // get request of API
        try {
            let res = await axios.get(apiStr);

            let rickMortyData = res.data.results;
            
            rickMortyData.length = 3;
            console.log(rickMortyData);
            return rickMortyData;

        } catch (err) {
            console.error(err.message)
        }

    }

    export default {getRickMortyData};