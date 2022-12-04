import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import CartItem from './CartItem';


const Cart = () => {
  const {cartItems,subTotal,shipping,tax,total} = useSelector((state)=> state.cart)

  const dispatch = useDispatch();
  
  const increment = (id)=>{
    dispatch({
      type:"addToCart",
      payload:{id}, 
    });

    dispatch({
      type:"calculatePrice", 
    })

  }

  const decrement = (id)=>{
    dispatch({
      type:"decrement",
      payload:id, 
    });

    dispatch({
      type:"calculatePrice", 
    })
  }

  const deleteHandler = (id)=>{
    dispatch({
      type:"deletefromCart",
      payload:id
    });
    dispatch({
      type:"calculatePrice", 
    })
  }

  return (
    <div>
        <main>
        {/* <CartItem
                  imgSrc={img1}
                  name = {"Mac Book"}
                  price = {354345}
                  qty = {1}
                  if = "asdfdfsgs"
                  /> */}

{cartItems.length > 0 ? (
          cartItems.map((i) => (
            <CartItem
                  imgSrc={i.imgSrc}
                  name = {i.name}
                  price = {i.price}
                  qty = {i.quantity}
                  id = {i.id}
                  key = {i.id}
                  decrement = {decrement}
                  increment = {increment}
                  deleteHandler  = {deleteHandler}
                  />
          ))
        ) : (
          <h1>No Items Yet</h1>
        )}
            
        </main>
        <aside>
            <h2>Subtotal: S{subTotal}</h2>
            <h2>Shipping: ${shipping}</h2>
            <h2>Tax:${tax}</h2>
            <h2>Total:${total}</h2>

        </aside>

    </div>
  )
}




export default Cart