import React from 'react'

const CartContext = React.createContext({
  items: [], // all for autocompletion
  totalQuantity: 0,
  addItem: (item) => {},
  removeItem: (id) => {},
})

export default CartContext
