import React, { useState } from 'react'
import CartContext from './cart-context'

const CartProvider = (props) => {
  const [items, setItem] = useState([])
  const [totalItems, setTotalItems] = useState(0)

  const addItemToCartHandler = (item) => {
    if (items.length <= 0) {
      setItem([...items, item])
      console.log(items)
    } else {
      let flag = false
      let b = items.map((each) => {
        if (each.id === item.id) {
          let temp = each.quantity * 1
          each.quantity = temp + item.quantity * 1
          flag = true
        }

        return each
      })
      flag === true ? setItem([...b]) : setItem([...items, item])
    }
  }

  const cartContext = {
    items: items,
    totalQuantity: totalItems,
    addItem: addItemToCartHandler, //add item list to cart
    // removeItem: removeItemFromCartHandler,
    // updateItem: updateItemHandler,
    // clearCart: clearCartHandler, //clear cart
    // removeList: RemoveHandler, //removing item from the cart
  }
  // console.log( 'rerendering',cartContext)

  return (
    <CartContext.Provider value={cartContext}>
      {props.children}
    </CartContext.Provider>
  )
}

export default CartProvider
