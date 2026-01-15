import HomePage from "../../homepage";
import { useState } from "react";
import Login from "../login/page";
import Footer from "../footer/page";
import Register from "../resistration/page";
import Cart from "../cart/page";
import MarketplaceHome from "../../marketplace";

import { FaCalendarPlus } from "react-icons/fa";

import { FaCartPlus } from "react-icons/fa";

import { RxAvatar } from "react-icons/rx";
import OtpLogin from "../otp/page";
import Payment from "../payment/page";
import MyOrders from "../myorder/page";
import UserProfile from "../userProfile/page";
  


const Home =()=>{


  const [screen,setScreen]=useState("home");



  
  
  return (
    <>

    <header  className="header">
              <div className="logo"  onClick={()=>setScreen("home")}><h3>E-Commerce</h3></div>
              
              <div className="nav">
                <span onClick={()=>setScreen("login")}>Login</span>
                <span onClick={()=>setScreen("registration")}>Signup</span>
                <span onClick={()=>setScreen("cart")}>  Cart (0)</span>
                <span onClick={()=>setScreen("myAccount")}> MyAccount</span>

              </div>
            </header>

            
    
            
            {screen==="cart" && <Cart setScreen={setScreen}></Cart>}
          
            {screen==="registration" && <Register ></Register>}
              {screen==="login" && <Login setScreen={setScreen}></Login>}
              {screen==="otppage" && <OtpLogin ></OtpLogin>}
              {screen ==="payment" && <Payment ></Payment>}
              {screen==="myorder" && <MyOrders></MyOrders>}
              {screen==="myAccount" && <UserProfile></UserProfile>}
    



  











{screen==="home" &&   <MarketplaceHome></MarketplaceHome>}









<Footer></Footer>


    </>
  )
}

export default Home;










