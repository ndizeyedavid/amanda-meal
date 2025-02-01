import React, { lazy } from "react"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from "./pages/Home"
import Login from "./pages/Login"
import Signup from "./pages/Signup"
import Favourite from "./pages/Favourite"
import ForgotPassword from "./pages/ForgotPassword"
import Checkout from "./pages/Checkout"
import Search from "./pages/Search"
import Settings from "./pages/Settings"
import ErrorPage from "./pages/ErrorPage"
import ConfirmOrder from "./pages/ConfirmOrder"
import Orders from "./pages/Orders"
import Start from "./pages/Start"

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/start" element={<Start />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/Favourite" element={<Favourite />} />
        <Route path="/forget" element={<ForgotPassword />} />
        <Route path="/confirm/order" element={<ConfirmOrder />} />
        <Route path="/orders" element={<Orders />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/search" element={<Search />} />
        <Route path="/settings" element={<Settings />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
