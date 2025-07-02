import React, { useEffect, useState } from 'react'
import Header from './components/Header'
import RestaurantCard from './components/RestaurantCard'
import fetchCards from './api/ApiCalls'
import Shimmer from './components/Shimmer'

function App() {
  const [restaurant, setRestarant] = useState([])
  const [filteredData, setFilteredData] = useState([]);
  const [searchText, setSearchText] = useState("");

  useEffect(() => {
    async function fetchData() {
      let res = await fetchCards();
      setRestarant(res)
      setFilteredData(res)
    }
    fetchData()
  }, [])

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
    else setFilteredData(restaurant) // if the search term is empty then it will display all the data
  }

return (
  <div className='bg-slate-800 flex flex-col gap-4 pb-4  h-fit'>
    <Header />
    {/* search functionality */}
    <div className='flex justify-center gap-2'>
      <input type='text' value={searchText} onChange={(e) => (setSearchText(e.target.value))} className='border border-red-200 px-2 w-1/3 placeholder:text-white text-white' placeholder='enter the item to search' />
      <button type='submit' onClick={searchHandler} className='px-3 py-1 bg-blue-400 text-white rounded-md cursor-pointer'>Search</button>
    </div>
    <div className='card-body flex flex-wrap gap-4 justify-center'>
      {restaurant.length === 0 ?
        <Shimmer />
        :
        filteredData.map((item) => (<RestaurantCard data={item} key={item?.info?.id} />))}
    </div>

  </div>
)
}

export default App