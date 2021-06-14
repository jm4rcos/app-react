import React from 'react'
import { FiPhone } from 'react-icons/fi'
import {BiMap} from 'react-icons/bi'

export default function Modal(){
  return(
    <div id='dropDown'>
        <p className='dropDownText'>
          O Complexo Pediátrico do Hospital Vitória conta com uma equipe
          de pronto atendimento formada por <strong>pediatras, cirurgiões e ortopedistas, </strong>
          além de profissionais de diversas subespecialidades da pediatria, 
          capacitados para assistência a urgências e emergências de pacientes
          recém-nascidos e até os 18 anos de idade.
        </p>
      
        <div className='separator'></div>
      
        <div className='informações'>
          <div>
          <BiMap color='#F7B53D' size={36}/><strong>Endereço:</strong>
            <div className='endereçoInfo'>
              <p>
                Av. Jorge Curi, 550
                <br/>
                Barra da Tijuca, Rio de Janeiro - RJ
                <br/>
                22775-001
              </p>
            </div>
          </div>
      
          <div>
          <FiPhone color='#F7B53D'size={26}/><strong>Telefone:</strong> <p>Av. Jorge Curi, 550</p>
          </div>
        </div>
      </div>
  )
}