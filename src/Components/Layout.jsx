import React from 'react'
import Navbar from './Navbar/Navbar'
import Footer from './Footer/Footer'
import { Outlet } from 'react-router-dom'

export default function Layout() {
  return (

<>
<Navbar />
  
<div className="main-content">
      <Outlet  ></Outlet>   {/* home(index ) about  portfolio contact   */}

</div>


<Footer />



</>


  )
}
