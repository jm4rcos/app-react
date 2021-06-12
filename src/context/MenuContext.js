import { createContext } from 'react'

const MenuData = {
  size: Number,
  menu: Boolean,
  handleSize: () => {},
  setMenu: () => {}
}

const MenuContext = createContext(MenuData)

export { MenuContext }