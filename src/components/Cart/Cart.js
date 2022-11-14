import React, { useContext } from 'react'
import Modal from '../UI/Modal'
import classes from './Cart.module.css'
import CartContext from '../../store/cart-context'

const Cart = (props) => {
  const cartCtx = useContext(CartContext)

  let totalAmount = cartCtx.items
    .reduce((acc, cur) => {
      return (acc += Number(cur.price) * Number(cur.quantity))
    }, 0)
    .toFixed(2)

  const minusHandler = (item) => {
    // console.log(item)
    if (Number(item.quantity) !== 1) {
      cartCtx.removeItem(item.id)
    }
  }

  const plusHandler = (item) => {
    if (Number(item.quantity)) {
      cartCtx.updateItem(item.id)
    }
  }

  const cartItems = (
    <ul className={classes['cart-items']}>
      {cartCtx.items.map((item) => (
        <li key={item.name} className={classes['cart-list']}>
          <span>Order : {item.name}</span>
          <div>
            <span className={classes.spn}>
              {item.quantity} X {item.price}
            </span>
            <span className={classes.spn}>
              Price: {(Number(item.price) * Number(item.quantity)).toFixed(2)}
            </span>
            <button onClick={() => minusHandler(item)} className={classes.btn}>
              -
            </button>
            <button onClick={() => plusHandler(item)} className={classes.btn}>
              +
            </button>
          </div>
        </li>
      ))}
    </ul>
  )

  return (
    <Modal onClose={props.onClose}>
      <div className={classes.total}>
        <span>Total Amount</span>
        <span>{totalAmount}</span>
      </div>
      {cartItems}
      <div className={classes.actions}>
        <button className={classes['button--alt']} onClick={props.onClose}>
          Close
        </button>
        <button className={classes.button}>Order</button>
      </div>
    </Modal>
  )
}

export default Cart
