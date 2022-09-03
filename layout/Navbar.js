import React, {useState} from 'react'
import Image from 'next/image'
import Link from "next/link"
import { MenuOutline, CloseOutline } from 'react-ionicons'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const handleOnClick = () => {
    setIsOpen(!isOpen)
  }


  return (
    <header className={`header ${isOpen? "nav-active": "top-[0]"}`} data-header>
    <div className="container">

      <a href="#" className="logo">
      <img src="./logo.png" alt="Solutry logo" />
      </a>

      <button onClick={handleOnClick} className={`nav-toggle-btn ${isOpen? "active": "top-[0]"}`} data-nav-toggle-btn>
        <MenuOutline 
          className="open"
          color={'#00000'} 
          title={"menu"}
          height="45px"
          width="45px"
        />
        <CloseOutline 
          className="close"
          color={'#00000'} 
          title={"menu"}
          height="45px"
          width="45px"
        />
        <ion-icon name="menu-outline" className="open"></ion-icon>
        <ion-icon name="close-outline" className="close"></ion-icon>
      </button>

      <nav className="navbar">
        <div className="container">
          <ul className="navbar-list">

            <li>
              <a href="#home" className="navbar-link" data-navbar-link>Home</a>
            </li>

            <li>
              <a href="#features" className="navbar-link" data-navbar-link>Features</a>
            </li>

            <li>
              <a href="#service" className="navbar-link" data-navbar-link>Service</a>
            </li>

            <li>
              <Link href="/blog">
              <a className="navbar-link" data-navbar-link>Blog</a>
              </Link>
            </li>

            <li>
              <a href="#newsletter" className="navbar-link" data-navbar-link>Newsletter</a>
            </li>

          </ul>
        </div>
      </nav>

      <button className="btn btn-secondary">
        <span>Get Started</span>

        <ion-icon name="chevron-forward-outline"></ion-icon>
      </button>

    </div>
  </header>
  )
}

export default Navbar