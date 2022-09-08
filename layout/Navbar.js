import React, {useState} from 'react'
import Image from 'next/image'
import Link from "next/link"
import { MenuOutline, CloseOutline, ChevronForwardOutline } from 'react-ionicons'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const handleOnClick = () => {
    setIsOpen(!isOpen)
  }


  return (
    <header className={`header ${isOpen? "nav-active": "top-[0]"}`} data-header>
    <div className="container">
      <Link href='/'>
      <a className="logo">
      <img src="./logo.png" alt="Des logo" />
      </a>
      </Link>

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
      </button>

      <nav className="navbar">
        <div className="container">
          <ul className="navbar-list">

            <li>
              <Link href="/#home">
              <a  className="navbar-link" data-navbar-link>Home</a>
              </Link>
            </li>

            <li>
              <Link href="/#features">
              <a  className="navbar-link" data-navbar-link>Features</a>
              </Link>
            </li>

            <li>
              <Link href="/#service">
              <a className="navbar-link" data-navbar-link>Service</a>
              </Link>
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
      <Link href='/contact'>
      <button className="btn btn-secondary">
        <span>Get Started</span>

        <ChevronForwardOutline
        color="white"
        />
      </button>
      </Link>

    </div>
  </header>
  )
}

export default Navbar