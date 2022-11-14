import React, { useContext, useState, useEffect } from 'react'
import classes from './MealItemForm.module.css'
import CartContext from '../../../store/cart-context'

const MealItemForm = (props) => {
  const cartCtx = useContext(CartContext)
  const [amount, setAmount] = useState(1)

  // useEffect(() => {
  //   // console.log(cartCtx.items)
  // }, [cartCtx])

  const amountHandler = (e) => {
    // console.log(e.target.value)
    setAmount(e.target.value)
  }

  const addItemToCart = (e) => {
    e.preventDefault()
    // console.log(amount)
    cartCtx.addItem({ ...props.item, quantity: amount })
  }

  return (
    <form className={classes.form}>
      <div className={classes.input}>
        <label htmlFor={`amount_${props.id}`}>Amount</label>
        <input
          id={`amount_${props.id}`}
          type='number'
          min='1'
          max='5'
          step='1'
          defaultValue='1'
          onChange={amountHandler}
        />
      </div>
      <button onClick={addItemToCart}>+ Add</button>
    </form>
  )
}

export default MealItemForm
