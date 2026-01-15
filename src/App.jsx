import { useState } from 'react'
import './App.css'

import Home from './frontend/pages/home/page'
import Cart from './frontend/pages/cart/page'
import Login from './frontend/pages/login/page'
import OtpLogin from './frontend/pages/otp/page'
import Register from './frontend/pages/resistration/page'
import UserProfile from './frontend/pages/userProfile/page'
import MyOrders from './frontend/pages/myorder/page'
import Payment from './frontend/pages/payment/page'
import AdminDashboard from './frontend/pages/admin/page'
import SellerDashboard from './frontend/pages/seller/page'
import SellerProducts from './frontend/pages/product/page'
import Hom from './frontend/pages/home2/page'
import Ho from './frontend/pages/view/page'
import SearchBar from './frontend/pages/search/page'
import HomePage from './frontend/homepage'
import HomePageList from './frontend/homepageList'
import MarketplaceHome from './frontend/marketplace'





function App() {

  return (
  <>
  {/* <MarketplaceHome></MarketplaceHome>
  <HomePageList></HomePageList>
  <HomePage></HomePage>
  <SearchBar></SearchBar>
  <Ho></Ho>
  <Hom></Hom>
  <SellerProducts></SellerProducts>
  <SellerDashboard></SellerDashboard>
  <AdminDashboard></AdminDashboard>
  <Payment></Payment>
  <MyOrders></MyOrders>
  <UserProfile></UserProfile>
  <Register></Register>
  <OtpLogin></OtpLogin>
  
  <Cart></Cart> */}


  <Home></Home>

    </>
  )
}

export default App
