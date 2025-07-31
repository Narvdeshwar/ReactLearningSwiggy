import { Link, useParams } from 'react-router-dom';
import MenuItem from './MenuItem';
import useRestaurantMenu from '../../../../utils/useRestaurantMenu';
import Shimmer from '../../../ui/shimmer/Shimmer';
import { ChevronDown } from 'lucide-react';
import { useState } from 'react';

function RestaurantMenu() {
    const [currentOpen, setCurrentOpen] = useState(0);
    const { restId,name } = useParams();
    const menuList = useRestaurantMenu(restId);
    console.log("sdfs", name)

    const handler = (index) => {
        setCurrentOpen(prev => (prev === index ? null : index));
    };

    return (
        <div className="w-[70%] mx-auto h-[calc(100vh-72px)] overflow-y-auto text-white">
            {/* Sticky Header */}
            <div className="flex justify-between items-center rounded-md p-4 sticky top-0 z-10 bg-slate-900 shadow-xl border-b border-slate-600">
                <p className="text-3xl font-semibold text-white tracking-wide border-b-2 border-blue-500 inline-block pb-1">
                    {name} - Menu
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
            <div className="mt-4 space-y-3">
                {menuList === null ? (
                    <Shimmer />
                ) : (
                    menuList?.map((item, index) => (
                        <div
                            className="bg-slate-900 px-4 py-2 rounded-md shadow-md transition-all duration-300"
                            key={index}
                        >
                            <div className="flex justify-between items-center">
                                <p className="font-medium">
                                    {item.card.card.title} ({item.card.card.itemCards.length})
                                </p>
                                <button
                                    className="cursor-pointer"
                                    onClick={() => handler(index)}
                                >
                                    <ChevronDown
                                        className={`transition-transform duration-300 ${currentOpen === index ? 'rotate-180' : ''
                                            }`}
                                    />
                                </button>
                            </div>

                            {/* Only open the currently selected section */}
                            {currentOpen === index && (
                                <div className="transition-all duration-300 ease-in-out mt-2">
                                    <MenuItem
                                        key={item?.card?.card?.info?.id || index}
                                        data={item?.card?.card?.itemCards}
                                    />
                                </div>
                            )}
                        </div>
                    ))
                )}
            </div>
        </div>
    );
}

export default RestaurantMenu;
