import { FOOD_IMG_URL } from "../../../../utils/urls";

const MenuItem = ({ data }) => {
    console.log("dsfs", data[0]?.card?.info)
    return (<>
        {data.map((item) => <>
            <div className='flex bg-gray-900 rounded-md my-2 shadow-md border'>
                <div className='flex w-full p-2 justify-between'>
                    <div className='text-white space-y-1'>
                        <p className='text-white text-2xl'>{item?.card?.info.name}</p>
                        <p className=''>Rs: {Number(item?.card?.info.defaultPrice || item?.card?.info.price) / 100}</p>
                        <button className={`px-4 py-1 rounded-md cursor-pointer font-bold ${item?.card?.info?.inStock ? "bg-green-700" : "bg-red-500 disabled"}`}>{item?.card?.info?.inStock ? "Add" : "Not available"}</button>
                    </div>
                    <div className='size-24 bg-yellow-300 rounded-md overflow-hidden'> <img src={`${FOOD_IMG_URL}${item?.card?.info.imageId}`} alt="" className='size-24' /></div>
                </div>
            </div>
        </>)}
    </>)
}

export default MenuItem
/**
 <div className='flex bg-gray-900 rounded-md my-2 shadow-md border'>
                <div className='flex w-full p-2 justify-between'>
                    <div className='text-white space-y-1'>
                        <p className='text-white text-2xl'>{name}</p>
                        <p className=''>Rs: {Number(defaultPrice || price) / 100}</p>
                        <button className={`px-4 py-1 rounded-md cursor-pointer font-bold ${inStock ? "bg-green-700" : "bg-red-500 disabled"}`}>{inStock ? "Add" : "Not available"}</button>
                    </div>
                    <div className='size-24 bg-yellow-300 rounded-md overflow-hidden'> <img src={`${FOOD_IMG_URL}${imageId}`} alt="" className='size-24' /></div>
                </div>
</div>
 */