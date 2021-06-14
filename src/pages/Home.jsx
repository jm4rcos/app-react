import React from 'react'

import Banner from '../components/Banner'
import Navbar from '../components/Navbar'
import Destaque from '../components/Destaque'

import Provider from '../context/Provider'

const Home  = () => {
  return(
    <Provider>
      <Navbar/>
      <Banner/>
      <Destaque/>
    </Provider>)
}

export default Home