import React from 'react'
import './menu.scss'
import { Link } from 'react-router-dom'

const Menu = () => {
  return (
    <div className='menu'>
        <span onClick={()=> location.href = '/doctors'}>Doktorlar</span>
        <span>Akademisyenler</span>
        <span>Benim Sayfam</span>
    </div>
  )
}

export default Menu