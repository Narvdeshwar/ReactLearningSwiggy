import { useEffect, useState } from "react";
import { fetchRestaurantList } from "../api/ApiCalls";

const useRestaurantList = () => {
  const [restaurant, setRestarant] = useState([]);
  useEffect(() => {
    async function fetchData() {
      let res = await fetchRestaurantList();
      console.log(res)
      setRestarant(res);
    }
    fetchData();
  }, []);
  return restaurant;
};

export default useRestaurantList;
