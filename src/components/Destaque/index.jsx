import React, { useState, useEffect } from 'react'
import { IoIosArrowDown } from 'react-icons/io'
import {BiMap} from 'react-icons/bi'

import './destaque.scss'

const Destaque = () => {
  const [modal, setModal] = useState(false)

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
            <IoIosArrowDown className='icon'/>
          </button>
        </div>
        
        <div id='dropDown'>
          <p>O Complexo Pediátrico do Hospital Vitória conta com uma equipe
            de pronto atendimento formada por <strong>pediatras, cirurgiões e ortopedistas, </strong>
            além de profissionais de diversas subespecialidades da pediatria, 
            capacitados para assistência a urgências e emergências de pacientes
            recém-nascidos e até os 18 anos de idade.
          </p>

          <BiMap/><strong>Endereço:</strong>
            <div className='endereçoInfo'>
              <p>Av. Jorge Curi, 550</p>
              <p>Barra da Tijuca, Rio de Janeiro - RJ</p>
              <p>22775-001</p>
            </div>

            <BiMap/><strong>Telefone:</strong> <p>Av. Jorge Curi, 550</p>
        </div>
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
  </section>)
}

export default Destaque