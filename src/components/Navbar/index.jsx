import React, { useState } from 'react'

import './navbar.scss'

const Nav = () => {
  const [menu, setMenu] = useState(false)

  return (
    <nav>
      <div className='logos'>
        <img className='logo' src='assets/logo.png' alt="" />
        <img className='porto' src='assets/porto-seguro.png' alt="" />
      </div>

      <button onClick={() => setMenu(!menu)}>
        {!menu ? (
        <>
          <div></div>
          <div></div>
          <div></div>
        </>
        ) 
        : 
        (<>
          <div className='close1'></div>
          <div className='close2'></div>
        </>)}
      </button>

      <ul id={ menu ? 'hidden' : '' }>
        <li>
          <a href="#">Sobre</a>
          <span></span>
        </li>
        <li>
          <a href="#">Hospitais</a>
          <span></span>
        </li>
        <li>
          <a href="#">Benefícios</a>
          <span></span>
        </li>
        <li>
          <a href="#">Serviços especiais</a>
          <span></span>
        </li>
        <li>
          <a href="#">Contato</a>
          <span></span>
        </li>
      </ul>
    </nav>
  )
}

export default Nav
