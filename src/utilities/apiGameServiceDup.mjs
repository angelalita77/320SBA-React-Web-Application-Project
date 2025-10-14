import axios from "axios";

async function getRickMortyData(apiStr) {
    // get request of API
    try {
        let res = await axios.get(apiStr);

        let rickMortyData = res.data.results;
        
        // This limits the data to the first 4 items
        rickMortyData.length = 4; 
        console.log("Fetched Data:", rickMortyData);
        return rickMortyData;

    } catch (err) {
        console.error("API Error:", err.message);
        // It's good practice to throw the error or return null/empty array on failure
        return []; 
    }
}

// Export the function directly for easier importing
export { getRickMortyData };