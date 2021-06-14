import React, { useState, useEffect } from 'react'
import { MenuContext } from './MenuContext'

export default function Provider({children}){
  const [size, setSize] = useState(window.innerWidth)
  const [menu, setMenu] = useState(false)
  const [modal, setModal] = useState(false)

  const handleSize = () => {
    setSize(window.innerWidth)
  }

  useEffect(() => {
    window.addEventListener('resize', handleSize)
  }, [size])

  return(
    <MenuContext.Provider value={{size, menu, setMenu, modal, setModal}}>
      {children}
    </MenuContext.Provider>
  )
}