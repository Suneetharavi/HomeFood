import React, { useState } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import ContactUs from '../../components/ConatctUs/ContactUs'
import Register from '../../components/Register/Register'
import styles from './App.module.css';
import { getUser } from '../../utilities/users-service';
import AuthPage from '../AuthPage/AuthPage';
import NewOrderPage from '../NewOrderPage/NewOrderPage';
import OrderHistoryPage from '../OrderHistoryPage/OrderHistoryPage';

export default function App() {
  const [user, setUser] = useState(getUser());
  return (
    <main className={styles.App}>
      {/* <Routes>
        <Route path='/ContactUs' element={<ContactUs/>}></Route>
        <Route path='/Register' element={<Register/>}></Route>
      </Routes> */}
      { user ?
        <>
          <Routes>
            {/* client-side route that renders the component instance if the path matches the url in the address bar */}
            <Route path="/orders/new" element={<NewOrderPage user={user} setUser={setUser} />} />
            <Route path="/orders" element={<OrderHistoryPage user={user} setUser={setUser} />} />
            {/* redirect to /orders/new if path in address bar hasn't matched a <Route> above */}
            <Route path="/*" element={<Navigate to="/orders/new" />} />
            <Route path='/*/ContactUs' element={<ContactUs/>}></Route>
            
          </Routes>
        </>
        :<>
        <Routes>
        <Route path='/ContactUs' element={<ContactUs/>}></Route>
        <Route path='/Register' element={<Register/>}></Route>
        </Routes>
        <AuthPage setUser={setUser} /></>
      }
    </main>
  );
}