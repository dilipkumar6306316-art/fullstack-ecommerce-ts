
import { useState } from "react";
import Login from "../login/page";
import Footer from "../footer/page";
import Register from "../resistration/page";
import Cart from "../cart/page";
import MarketplaceHome from "../../marketplace";

import OtpLogin from "../otp/page";
import Payment from "../payment/page";
import MyOrders from "../myorder/page";
import UserProfile from "../userProfile/page";
import HomePageList from "../../homepageList";

  


const Home =()=>{


  const [screen,setScreen]=useState("home");



      const [cart, setCart] = useState([]);

      const addToCart = (product) => {
        setCart([...cart, product]);
      };



  
  
  return (
    <>

    <header style={{padding:"20px"}}  className="header">
              <div className="logo"  onClick={()=>setScreen("home")}><h3>E-Commerce</h3></div>
              
              <div className="nav">
                <span onClick={()=>setScreen("login")}>Login</span>
                <span onClick={()=>setScreen("registration")}>Signup</span>
                <span onClick={()=>setScreen("cart")}>Cart<sup style={{color:"red" , fontSize:"15px"}}>{cart.length}</sup></span>
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
              {screen==="homepagelist" && <HomePageList addToCart={addToCart}></HomePageList>}
              

    



  











{screen==="home" &&   <MarketplaceHome addToCart={addToCart} Screen={setScreen}></MarketplaceHome>}















<Footer></Footer>


    </>
  )
}

export default Home;










