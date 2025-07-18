import React from 'react'
import { Link } from 'react-router-dom'

const navbar = [{ link: "/", title: "Home" }, { link: "/about", title: "About" }, { link: "/product", title: "Product" }, { link: "/login", title: "Login" },]

function Header() {
  return (
    <div className='header bg-blue-400 text-white p-2 font-bold sticky top-0'>
      <div className='w-[90%] mx-auto flex justify-between'>{/* logo */}
        <div>
           Test
        </div>
        {/* nav bar */}
        <div>
          <ul className='flex space-x-5'>
            {navbar.map((item, index) => (<Link to={item.link} key={index}>{item.title}</Link>))}
          </ul>
        </div></div>
    </div>
  )
}

export default Header