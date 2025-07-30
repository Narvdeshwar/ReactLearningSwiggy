import { useEffect, useState } from "react";
import { fetchRestaurantMenu } from "../api/ApiCalls";
const useRestaurantMenu = (restId) => {
  const [menuList, setMenuList] = useState(null);
  useEffect(() => {
    async function fetchData() {
      const res = await fetchRestaurantMenu(restId);
      setMenuList(res);
    }
    fetchData();
  }, [restId]);
  return menuList;
};

export default useRestaurantMenu;
