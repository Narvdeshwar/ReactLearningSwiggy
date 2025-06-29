import React, { useEffect, useState } from 'react'
import Header from './components/Header'
import RestaurantCard from './components/RestaurantCard'
import fetchCards from './api/ApiCalls'
import Shimmer from './components/Shimmer'

function App() {
  const [restaurant, setRestarant] = useState([])
  useEffect(() => {
    async function fetchData() {
      let res = await fetchCards();
      setRestarant(res)
    }
    fetchData()
  }, [])
  return (
    <div className='bg-blue-100 flex flex-col gap-4 pb-4  h-fit'>
      <Header />
      <div className='card-body flex flex-wrap gap-4 justify-center items-center'>
        {restaurant.length === 0 ?
          <Shimmer />
          :
          restaurant.map((item) => (<RestaurantCard data={item} key={item?.info?.id} />))}
      </div>

    </div>
  )
}

export default App