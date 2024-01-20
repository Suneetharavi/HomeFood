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
          },[]);

         async function handleAddToOrder(itemId) {
         const updatedCart = await ordersAPI.addItemToCart(itemId);
        setCart(updatedCart);
        }

        async function handleChangeQty(itemId, newQty) {
            const updatedCart = await ordersAPI.setItemQtyInCart(itemId, newQty);
            setCart(updatedCart);
        }

        async function handleCheckout() {
                await ordersAPI.checkout();
                navigate("/orders");
              }


  return (
    <>
    <Navbar/>
   
   <div>
         <aside>
             {/* <Logo/> */}
            <CategoryList
              categories={categoriesRef.current}
              cart={setCart}
              setActiveCat={setActiveCat}
            />
            <Link to="/orders" className="button btn-sm">
              PREVIOUS ORDERS
            </Link>
            <UserLogOut user={user} setUser={setUser} />
          </aside>
    </div>
          <main className={styles.NewOrderPage}>
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
    </>
  )
}

export default NewOrderPage

