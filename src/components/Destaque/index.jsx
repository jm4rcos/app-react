/* eslint-disable no-unused-vars */
/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState } from 'react'
import { IoIosArrowDown } from 'react-icons/io'


import './destaque.scss'
import { useContext } from 'react'
import { MenuContext } from '../../context/MenuContext'
import Modal from '../Modal'

const Destaque = () => {
  const { size, modal, setModal, handleSize} = useContext(MenuContext)
  const [showDropDown, setShowDropDown] = useState('')

  function setDropDown(){
    if (size >= 940 && modal){
      setShowDropDown('dropDown')
    }
    else{
      setShowDropDown('noDropDown')
    }
  }

  React.useEffect(() => {
    window.addEventListener('resize', handleSize)
    setDropDown()
  }, [handleSize, setDropDown, size])


  return(<section className='cardsSection'>
    <h1>Hospitais em destaque</h1>
    <p>
      Constando com os melhores hospitais do Rio de janeiro, 
      o plano Ouro dispõe para você diversos benefícios para que
      você tenha um atendimento totalmente personalizado.
    </p>

    <div className='wrapper'>
      <div className='content'>
        <div className='card'>
          <img src="/assets/card1.png" alt="" />
          <h2>
            Hospital Vitória Barra
          </h2>
          <button onClick={() => setModal(!modal)}>
            <IoIosArrowDown className={!modal ? 'icon' : 'dropDownIcon' }/>
          </button>
        </div>

        {modal && size < 940 && (<Modal/>)}
      </div>

      <div className='content'>
        <div className='card'>
          <img src="/assets/card2.png" alt="" />
          <h2>
            Hospital Perinatal Laranjeiras
          </h2>
          <button>
            <IoIosArrowDown className='icon'/>
          </button>
        </div>
      </div>

      <div className='content'>
        <div className='card'>
          <img src="/assets/card3.png" alt="" />
          <h2>
            Hospital Hospital Copa D'Or
          </h2>
          <button>
            <IoIosArrowDown className='icon'/>
          </button>
        </div>
      </div>
    </div>

    {modal && size >= 940 && (<Modal/>)}

  </section>)
}

export default Destaque