import React from 'react'
import { ImageUrl } from '../../../../utils/urls'

function RestaurantCard({ data }) {
    const { name, avgRating, isOpen, locality, cloudinaryImageId, costForTwo, cuisines } = data.info;
  
    return (
     
      <div className='card border w-64 rounded-md border-blue-400/50 shadow-md flex flex-col overflow-hidden bg-slate-300'>
        {/* Image section */}
        <img src={`${ImageUrl}${cloudinaryImageId}`} alt={name} className='object-cover w-full h-48' />
  
        {/* Content section with flex-grow */}
        <div className='p-2 flex flex-col gap-1 items-center justify-around'>
          <p className='font-semibold'>{name}</p>
          <p className='text-sm text-gray-600 truncate'>{cuisines?.join(", ")}</p>
          <p className='text-sm'>Rating: {avgRating}</p>
          <p className='text-sm'>{costForTwo}</p>
          <p className='text-sm'>{isOpen ? "Open Now" : "Closed"}</p>
        </div>
      </div>

    );
  }
  


export default RestaurantCard