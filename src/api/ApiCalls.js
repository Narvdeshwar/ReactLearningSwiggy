import axios from "axios";

export const fetchRestaurantList = async () => {
  try {
    const res = await axios.get(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.5929914&lng=77.304005"
    );
    let restaurants = await res?.data?.data?.cards[4]?.card?.card?.gridElements
      ?.infoWithStyle?.restaurants;
    return restaurants;
  } catch (error) {
    alert("CORS Error Encountered");
    console.log("Error getting in api call", error);
  }
};

export const fetchRestaurantMenu = async (restId) => {
  try {
    const res = await axios.get(
      `https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=28.5910589&lng=77.304005&restaurantId=${restId}`
    );
    const cards =
      res?.data?.data?.cards.slice(-1)[0]?.groupedCard?.cardGroupMap?.REGULAR
        ?.cards;
    const targetCard = cards?.find((card) => card?.card?.card?.itemCards);
    const menuList = targetCard?.card?.card?.itemCards || [];
    console.log(menuList);
    return menuList;
  } catch (error) {
    console.error("Error fetching the Restaurant menu", error);
  }
};
