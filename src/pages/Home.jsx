import React from 'react'

import Banner from '../components/Banner'
import Navbar from '../components/Navbar'

import Provider from '../context/Provider'

const Home  = () => {
  return(
    <Provider>
      <Navbar/>
      <Banner/>
    </Provider>)
}

export default Home