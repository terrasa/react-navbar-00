import { useState } from 'react'
import { NavLink, Outlet } from 'react-router-dom'
import { ArrowBarRight, Brand, Hamburguer } from '../../../06-01-react-shopping-cart/src/components/icons'

export function Navbar () {
  const [showNavbar, setShowNavbar] = useState(false)

  const handleShowMenu = (event) => {
    event.stopPropagation()

    // showNavbar
    //   ? window.removeEventListener('click', elementTarget)
    //   : window.addEventListener('click', elementTarget)

    if (showNavbar) {
      window.removeEventListener('click', elementTarget)
    }
    setShowNavbar(!showNavbar)
  }

  const elementTarget = (event) => {
    event.stopPropagation()
    event.preventDefault()
    const isNavbar = event.target.closest('.navbar__links.open') !== null
    const linkNavbar = event.target.tagName === 'A'
    const isLinkNavbar = linkNavbar && event.target.closest('.navbar__links.open').length !== 0

    if (isLinkNavbar || !isNavbar) {
      setShowNavbar(prevShowNavbar => !prevShowNavbar)
      window.removeEventListener('click', elementTarget)
    }
  }

  if (showNavbar) {
    window.addEventListener('click', elementTarget)
  }

  return (
    <>
      <nav className='navbar'>
        <div className='navbar__container'>
          <div className='navbar__logos'>
            <Brand />
          </div>
          <div className={`navbar__menu-icon ${showNavbar && 'open'}`} onClick={handleShowMenu}>
            {showNavbar ? <ArrowBarRight /> : <Hamburguer />}
          </div>
          <div className={`navbar__links ${showNavbar && 'open'}`}>
            <NavLink to='/'> Home </NavLink>
            <NavLink to='/modal'> Modal </NavLink>
            <NavLink to='/fetch'> Fetch </NavLink>
            <NavLink to='/list'> List </NavLink>
          </div>
        </div>
      </nav>
      <Outlet />
    </>
  )
}
