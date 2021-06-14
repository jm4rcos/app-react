import React from 'react'
import { useContext } from 'react'
import { MenuContext } from '../../context/MenuContext'

import './banner.scss'

const Banner = () => {
  const { size, menu } = useContext(MenuContext)

  return (
    <section>
      {!menu && (<>
        <img
        src={size >= 550 ? "/assets/banner.png" : "/assets/mobilebanner.png" } 
        alt="" 
        draggable='false'/>

        <div className='bannerText'>
          <h1 className='title'>
            Conforto e qualidade para elvar bem-estar com alto padrão de atendimento a seus funcionários.
          </h1>
          <p>
            Conheça o plano Ouro da Porto Seguro Saúde.
          </p>

          <div>
            <span>A partir de
              <h2>R$</h2>
              <h1>255</h1>
              <p>,65</p>
              <h3>*</h3>
            </span>
            <button>VER MAIS</button>
          </div>

          <p className='sm-txt'>
            *Valor referente ao plano Ouro Copar Q (ANS: 481.277/18-8) de 3 às 9 vidas, com 20%
            de copart, com faixa etária entre 0 e 18 anos. Sem IOF.
            Promoção válida até 30 de abril de 2021.
          </p>
        </div>
      </>)}
    </section>
  )
}

export default Banner
