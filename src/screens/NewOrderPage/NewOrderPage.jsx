import React from 'react'
import { useState, useEffect, useRef } from "react";
import * as itemsAPI from "../../utilities/items-api";
import * as ordersAPI from "../../utilities/order-api";
import styles from "./NewOrderPage.module.css";
import Navbar from '../../components/MyNavbar';
import { Link, useNavigate } from "react-router-dom";
import Logo from "../../components/Logo/Logo";
import MenuList from "../../components/MenuList/MenuList";
import CategoryList from "../../components/CategoryList/CategoryList";
import OrderDetail from "../../components/OrderDetails/OrderDetail";
import UserLogOut from "../../components/UserLogOut/UserLogOut";
import newStyles from '../NewOrderPage/NewStyles.css'
import emailjs from 'emailjs-com';


function NewOrderPage({ user, setUser }) {

  //     useEffect(function(){
  //     alert("HI HELLO")
  // },[])
  const [menuItems, setMenuItems] = useState([]);
  const [activeCat, setActiveCat] = useState("");
  const [cart, setCart] = useState(null);
  const categoriesRef = useRef([]);
  const navigate = useNavigate();

  useEffect(function () {
        async function getItems() {

          const items = await itemsAPI.getAll();
          //   console.log("Hi Hello"+items)
          categoriesRef.current = items.reduce((cats, item) => {
            const cat = item.category.name;
            // alert(cat);
            return cats.includes(cat) ? cats : [...cats, cat];
          }, []);
          setMenuItems(items);
          setActiveCat(categoriesRef.current[0]);
        }
       getItems();

        async function getCart() {
          const cart = await ordersAPI.getCart();
          setCart(cart);
        }
        getCart();
  }, []);

  async function handleAddToOrder(itemId) {
    const updatedCart = await ordersAPI.addItemToCart(itemId);
    setCart(updatedCart);
  }

  async function handleChangeQty(itemId, newQty) {
    const updatedCart = await ordersAPI.setItemQtyInCart(itemId, newQty);
    setCart(updatedCart);
  }

  async function handleCheckout() {
    alert('Email send')
    await ordersAPI.checkout();
        var templateparams = {
          email:user.email,
          total:cart.orderTotal,
          items:menuItems.category.name
      }
      console.log('Email'+templateparams)
    emailjs.send('service_7nqksw6', 'template_gtjp70j',templateparams, 'KqxfdcF4ZT9d7pi7D')
    .then((result) => {
         console.log(result.text);
     }, (error) => {
         console.log(error.text);
     });

     
    navigate('/orders');
  }
 
return (
  <>
    <Navbar />

    <div className='categoriesClass'></div>
    <main className={styles.NewOrderPage}>
      <aside>
        {/* <Logo/> */}
        <h3>Categories</h3><hr />
        <CategoryList
          categories={categoriesRef.current}
          cart={setCart}
          setActiveCat={setActiveCat}
        />
      </aside>


      <MenuList
        menuItems={menuItems.filter((item) => item.category.name === activeCat)}
        handleAddToOrder={handleAddToOrder}
      />

      <OrderDetail
        order={cart}
        handleChangeQty={handleChangeQty}
        handleCheckout={handleCheckout}
      />

    </main>

    <div className='EndDiv'>
      <Link to="/orders" className="button btn-sm">
        PREVIOUS ORDERS
      </Link>

      <UserLogOut user={user} setUser={setUser} />
    </div>

  </>
)
}

export default NewOrderPage

