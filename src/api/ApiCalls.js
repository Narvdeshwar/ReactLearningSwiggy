import axios from "axios";

const fetchCards = async () => {
    try {
        const res = await axios.get("https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.5929914&lng=77.3051591");
        let restaurants = await res?.data?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants;
        return restaurants
    } catch (error) {
        alert("CORS Error Encountered")
        console.log("Error getting in api call", error)
    }
}

export default fetchCards;