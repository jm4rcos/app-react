import React from 'react'
import { useContext } from 'react'

import { MenuContext } from '../../context/MenuContext'

import './navbar.scss'

const Nav = () => {
  const { menu, setMenu} = useContext(MenuContext)

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
          <a href="sobre">Sobre</a>
          <span></span>
        </li>
        <li>
          <a href="hospitais">Hospitais</a>
          <span></span>
        </li>
        <li>
          <a href="benefícios">Benefícios</a>
          <span></span>
        </li>
        <li>
          <a href="serviços">Serviços especiais</a>
          <span></span>
        </li>
        <li>
          <a href="contato">Contato</a>
          <span></span>
        </li>
      </ul>
    </nav>
  )
}

export default Nav
