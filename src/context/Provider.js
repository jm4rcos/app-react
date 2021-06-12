import React, { useState, useEffect, useContext } from 'react'
import { MenuContext } from './MenuContext'

export default function Provider({children}){
  const [size, setSize] = useState(window.innerWidth)
  const [menu, setMenu] = useState(false)

  const handleSize = () => {
    setSize(window.innerWidth)
  }

  useEffect(() => {
    window.addEventListener('resize', handleSize)
  }, [size])

  return(
    <MenuContext.Provider value={{size, menu, setMenu}}>
      {children}
    </MenuContext.Provider>
  )
}