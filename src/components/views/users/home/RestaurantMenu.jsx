import { useEffect, useState } from 'react';
import { fetchRestaurantMenu } from '../../../../api/ApiCalls';
import { FOOD_IMG_URL } from '../../../../utils/urls';
import { Link, useParams } from 'react-router-dom';
import MenuItem from './MenuItem';

function RestaurantMenu() {
    const [menuList, setMenuList] = useState([]);
    const { restId } = useParams();

    useEffect(() => {
        async function fetchData() {
            const res = await fetchRestaurantMenu(restId);
            console.log(res);
            setMenuList(res);
        }
        fetchData();
    }, [restId]);

    return (
        <div className="w-[70%] mx-auto h-[calc(100vh-72px)] overflow-y-auto text-white">
            {/* Sticky Header */}
            <div className="flex justify-between items-center rounded-md p-4 sticky top-0 z-10 bg-slate-900 shadow-xl border-b border-slate-600">
                <p className="text-3xl font-semibold text-white tracking-wide border-b-2 border-blue-500 inline-block pb-1">
                    🍽️ Menu
                </p>

                <Link
                    to="/"
                    className="relative inline-block px-6 py-2 font-medium text-white border border-blue-500 group overflow-hidden rounded-lg shadow-md"
                >
                    <span className="absolute inset-0 w-0 bg-blue-500 transition-all duration-500 ease-out group-hover:w-full"></span>
                    <span className="relative z-10 group-hover:text-white transition-colors duration-300">
                        Back to Restaurant list
                    </span>
                </Link>
            </div>



            {/* Menu Items */}
            <div className="mt-4 space-y-4">
                {menuList?.map((item) => (
                    <MenuItem key={item?.card?.info?.id} item={item} />
                ))}
            </div>
        </div>
    );
}

export default RestaurantMenu;
