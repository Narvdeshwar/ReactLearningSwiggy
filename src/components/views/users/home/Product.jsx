import { useEffect, useState } from "react";
import Shimmer from "../../../ui/shimmer/Shimmer"
import RestaurantCard from './RestaurantCard'
import useRestaurantList from "../../../../utils/useRestaurantList";

const Product = () => {
    const [filteredData, setFilteredData] = useState([]);
    const [searchText, setSearchText] = useState("");
    const restaurant = useRestaurantList()
    
    useEffect(() => setFilteredData(restaurant), [restaurant])
     
    const searchHandler = () => {
        const filteredData = restaurant.filter((item) => {
            return item.info.name.toLowerCase().includes(searchText.toLowerCase())
        })
        if (searchText.length != 0) {
            if (filteredData.length === 0) {
                alert("No item present") 
            }
            else {
                setFilteredData(filteredData)
            }
        }
        else setFilteredData(restaurant)
    }
    
    return (
        <>
            <div className='flex justify-center gap-2 mb-6'>
                <input 
                    type='text' 
                    value={searchText} 
                    onChange={(e) => (setSearchText(e.target.value))} 
                    className='border border-red-200 px-2 w-1/3 placeholder:text-white text-white' 
                    placeholder='enter the item to search' 
                />
                <button 
                    type='submit' 
                    onClick={searchHandler} 
                    className='px-3 py-1 bg-blue-400 text-white rounded-md cursor-pointer hover:bg-blue-500 transition-colors'
                >
                    Search
                </button>
            </div>
            
            <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 w-[80%] mx-auto'>
                {restaurant?.length === 0 ? 
                    <Shimmer /> 
                    : 
                    filteredData?.map((item) => (
                        <RestaurantCard data={item} key={item?.info?.id} />
                    ))
                }
            </div>
        </>
    )
}

export default Product;