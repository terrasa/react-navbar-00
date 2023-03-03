import { useState } from 'react'
import { NavLink, Outlet } from 'react-router-dom'
import { ArrowBarRight, Brand, Hamburguer } from '../../../06-01-react-shopping-cart/src/components/icons'

export function Navbar () {
  const [showNavbar, setShowNavbar] = useState(false)

  const handleShowMenu = (event) => {
    event.stopPropagation()
    if (showNavbar) {
      window.removeEventListener('click', elementTarget)
    }
    setShowNavbar(!showNavbar)
    console.log(event.target)
  }

  const elementTarget = (event) => {
    event.stopPropagation()
    event.preventDefault()
    console.log('target', event.target.tagName)
    const isNavbar = event.target.closest('.navbar__links.open')
    const isLinkNavbar = event.target.tagName === 'A'
    console.log('isNavbar', isNavbar)
    console.log('isLinkNavbar', isLinkNavbar)

    if (!isNavbar) {
      setShowNavbar(!showNavbar)
      window.removeEventListener('click', elementTarget)
      console.log('Remove')
    }
  }

  if (showNavbar) {
    console.log('Add')
    window.addEventListener('click', elementTarget)
  }

  // showNavbar
  //   ? window.removeEventListener('click', elementTarget)
  //   : window.addEventListener('click', elementTarget)

  // || isLinkNavbar.closest('.navbar__links.open')
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
