import React, { useState } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import styles from './App.css';
import { getUser } from './utilities/users-service';
import AuthPage from './screens/AuthPage/AuthPage';
import NewOrderPage from './screens/NewOrderPage/NewOrderPage';
import OrderHistoryPage from './components/OrderHistoryPage';

export default function App() {
  const [user, setUser] = useState(getUser());
  return (
    <main className={styles.App}>
      { user ?
        <>
          <Routes>
            {/* client-side route that renders the component instance if the path matches the url in the address bar */}
            <Route path="/orders/new" element={<NewOrderPage user={user} setUser={setUser} />} />
            <Route path="/orders" element={<OrderHistoryPage user={user} setUser={setUser} />} />
            {/* redirect to /orders/new if path in address bar hasn't matched a <Route> above */}
            <Route path="/*" element={<Navigate to="/orders/new" />} />
          </Routes>
        </>
        :
        <AuthPage user={user} setUser={setUser} />
      }
    </main>
  );
}



// import './App.css';
// import { useState } from "react";
// import { getUser } from "./utilities/users-service";
// import Home from './screens/HomePage/Home.js'
// import Login from './screens/Login/Login.js'
// import SignUp from './components/SignUp/SignUp.jsx'
// import AuthPage from './screens/AuthPage/AuthPage.jsx'
// import {
//   BrowserRouter as Router,
//   Routes,
//   Route
// } from "react-router-dom";
// //import '../node_modules/bootstrap-dark-5/dist/css/bootstarp-dark.min.css';
// import '../node_modules/bootstrap-dark-5/dist/css/bootstrap-dark.min.css';
// import '../node_modules/bootstrap/dist/js/bootstrap.bundle';
// import '../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js';
// import Navbar from './components/Navbar.js'

// function App() {
//   const [user, setUser] = useState(getUser());
//   return (
//     <>
//       <div className='AppClass'>
//         {user ? (
//           <>
//             <Router>
//               <div>
//                 <Routes>
//                   <Route exact path='/' element={<Home />} />
//                 </Routes>
//               </div>
//             </Router>
//           </>
//         ) : (
//           <>
//             <Navbar />
//             <Router>
//               <Routes>
//                 {/* <Route path="/" element={<Home />} /> */}

//                 <Route
//                   path="/AuthPage"
//                   element={<AuthPage user={user} setUser={setUser} />}
//                 />
//               </Routes>
//             </Router>
//           </>
//         )}
//       </div>
//     </>
//   );
// }

// export default App;
// <Router>
// <div>
//   <Routes>
//     <Route exact path='/' element={<Home />} />
//     <Route exact path='/login' element={<Login />} />
//     <Route exact path='/SignUp' element={<SignUp />} />
//     <Route exact path='/AuthPage' element={<AuthPage />} />
//   </Routes>
// </div>
// </Router>