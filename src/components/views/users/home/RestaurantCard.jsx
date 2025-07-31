import { ImageUrl } from '../../../../utils/urls'
import { Link } from 'react-router-dom';

function RestaurantCard({ data }) {
  const { name, avgRating, isOpen, locality, cloudinaryImageId, costForTwo, cuisines, id } = data.info;
  console.log("sdfgsg", data)
  return (
    <div className='card border rounded-md border-blue-400/50 shadow-md flex flex-col overflow-hidden bg-slate-300'>

      {/* Image */}
      <img src={`${ImageUrl}${cloudinaryImageId}`} alt={name} className='object-cover w-full h-48' />

      {/* Content */}
      <div className='p-2 flex flex-col gap-2  flex-1'>
        <p className='font-semibold text-center'>{name}</p>
        <p className='text-sm text-gray-700 text-center'>{cuisines?.join(", ")}</p>
        <p className='text-sm text-center'>Rating: {avgRating}</p>
        <p className='text-sm text-center'>{costForTwo}</p>

        {/* Button pushed to bottom */}
        <Link to={`/restaurant-name/${name}/${id}`} className='bg-blue-600 text-white px-3 py-1 shadow-md rounded-md cursor-pointer mt-auto text-center'>
          {isOpen ? "See Menu Items" : "Closed"}
        </Link>
      </div>
    </div>
  );
}

export default RestaurantCard
