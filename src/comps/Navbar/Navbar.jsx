import React from 'react'

import NavBarLi from '../NavBarLi/NavBarLi'

function Navbar() {
  return (
    <ul className='NavbarUl'>
        <NavBarLi text={'Home'} />
        <NavBarLi text={'Menu'} />
        <NavBarLi text={'Services'} />
        <NavBarLi text={'Offers'} />
    </ul>
  )
}

export default Navbar