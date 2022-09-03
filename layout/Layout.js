import React from 'react'
import Footer from './Footer'
import Navbar from './Navbar'

const layout = ({children}) => {
  return (
    <>
    <body id="top">
    <Navbar/>
    <main>{children}</main>
    <Footer/>
    </body>
    </>
  )
}

export default layout