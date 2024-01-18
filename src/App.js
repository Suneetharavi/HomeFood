import './App.css';
import { useState } from "react";
import { getUser } from "./utilities/users-service";
import Home from './screens/HomePage/Home.js'
import Login from './screens/Login/Login.js'
import SignUp from './screens/SignUp/SignUp.js'
import AuthPage from './screens/AuthPage/AuthPage.jsx'
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
//import '../node_modules/bootstrap-dark-5/dist/css/bootstarp-dark.min.css';
import '../node_modules/bootstrap-dark-5/dist/css/bootstrap-dark.min.css';
import '../node_modules/bootstrap/dist/js/bootstrap.bundle';
import '../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js';

function App() {
  const [user, setUser] = useState(getUser());
  return (
    <>
      <div className='AppClass'>
        {user ? (
          <>
            <Router>
              <div>
                <Routes>
                  <Route exact path='/' element={<Home />} />
                </Routes>
              </div>
            </Router>
          </>
              ) : (
          <> 
          <Router>
            <Routes>
              {/* <Route path="/" element={<Home />} /> */}
                <Route
                    path="/AuthPage"
                    element={<AuthPage user={user} setUser={setUser} />}
                />  
            </Routes>
          </Router>
         </>
        )}
      </div>
    </>
  );
}

export default App;
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