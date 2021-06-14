import { createContext } from 'react'

const MenuData = {
  size: Number,
  menu: Boolean,
  modal: Boolean,
  handleSize: () => {},
  setMenu: () => {},
  setModal: () => {}
}

const MenuContext = createContext(MenuData)

export { MenuContext }