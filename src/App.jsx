import React, { useEffect, useState } from 'react'
import Header from './components/ui/header/Header'

import Product from './components/views/users/home/Product'
import { createBrowserRouter } from 'react-router-dom'

function App() {
  return (
    <div className='bg-slate-800 flex flex-col gap-4 pb-4  h-fit'>
      <Header />
      <Product />
    </div>
  )
}

const appRoutes = createBrowserRouter([{ path: "/", element: <App/> }])

export default App