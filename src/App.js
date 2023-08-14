import './App.css';
import Checkout from './Components/Checkout';
import Home from './Components/Home';
import Login from './Components/Login';
import Header from './Components/Header';
import Navbar from './Components/Navbar';
import Payment from './Components/Payment';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { auth } from "./firebase";
import { onAuthStateChanged, signOut } from 'firebase/auth';
import { useStateValue } from './StateProvider';

function App() {
  // const [authUser, setAuthUser] = useState(null);
  // // useEffect(() =>{
  // //   //only run once when the app component loads
  // //   const listen = onAuthStateChanged(auth, (user) =>{
  // //     if (user){
  // //       setAuthUser(user);
  // //     }else{
  // //       setAuthUser(null);
  // //     }
  // //   });
  // //   return () => {
  // //     listen();
  // //   }
  // // }, [])
  
  // // const userSignOut = ()=>{
  // //   signOut(auth).then(() => {
  // //     console.log("sign out success")
  // //   }).catch(error => console.log(error))
  // // }



  const [{}, dispatch] = useStateValue();
  useEffect(() => {
    auth.onAuthStateChanged(authUser => {
      console.log('THES USER IS : ', authUser);
      if (authUser) {
        dispatch({
          type : 'SET_USER',
          user : authUser
        })
      }else {
        dispatch({
          type : 'SET_USER',
          user : null
        })
      }
    })
  }, [])

  return (
    <>
      <Router>
        <div className="app">
          <Navbar>
            <Header />
          </Navbar>
          <Routes>
              <Route path="/login" element={<Login />} />
              <Route index element={<Home />} />
              <Route path="/checkout" element={<Checkout />} />
              <Route path="/payment" element={<Payment />} />
          </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;
