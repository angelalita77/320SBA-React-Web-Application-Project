// I wanted to use this for the API pull for the match Game,
// but wasn't able to get the game to work properly. 
// But I will work on this in the "update". 
// Instead axios pull of the API is done for the gallery


// import axios from "axios";

// async function getRickMortyData(apiStr) {
//     // get request of API
//     try {
//         let res = await axios.get(apiStr);

//         let rickMortyData = res.data.results;
        
//         // This limits the data to the first 4 items
//         rickMortyData.length = 4; 
//         console.log("Fetched Data:", rickMortyData);
//         return rickMortyData;

//     } catch (err) {
//         console.error("API Error:", err.message);
//         // It's good practice to throw the error or return null/empty array on failure
//         return []; 
//     }
// }

// // Export the function directly for easier importing
// export { getRickMortyData };