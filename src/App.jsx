// config

import { toBottom, toLeft, toRight } from "./animations/pageVariants"

import React, { lazy, useEffect } from "react"
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom"
import { AnimatePresence, motion } from "framer-motion";


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
import Filter from "./pages/Filter"

const AnimatedRoutes = () => {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<motion.div variants={toBottom} initial="initial" animate="animate" exit="exit"><Home /></motion.div>} />

        <Route path="/start" element={<motion.div variants={toBottom} initial="initial" animate="animate" exit="exit"><Start /></motion.div>} />
        <Route path="/login" element={<motion.div variants={toRight} initial="initial" animate="animate" exit="exit"><Login /></motion.div>} />
        <Route path="/signup" element={<motion.div variants={toLeft} initial="initial" animate="animate" exit="exit"><Signup /></motion.div>} />
        <Route path="/Favourite" element={<motion.div variants={toRight} initial="initial" animate="animate" exit="exit"><Favourite /></motion.div>} />
        <Route path="/forget" element={<motion.div variants={toLeft} initial="initial" animate="animate" exit="exit"><ForgotPassword /></motion.div>} />
        <Route path="/confirm/order" element={<motion.div variants={toBottom} initial="initial" animate="animate" exit="exit"><ConfirmOrder /></motion.div>} />
        <Route path="/orders" element={<motion.div variants={toRight} initial="initial" animate="animate" exit="exit"><Orders /></motion.div>} />
        <Route path="/checkout" element={<motion.div variants={toRight} initial="initial" animate="animate" exit="exit"><Checkout /></motion.div>} />
        <Route path="/search" element={<motion.div variants={toRight} initial="initial" animate="animate" exit="exit"><Search /></motion.div>} />
        <Route path="/settings" element={<motion.div variants={toRight} initial="initial" animate="animate" exit="exit"><Settings /></motion.div>} />

        {/* products filter */}
        <Route path="/filter/:category" element={<Filter />} />

        <Route path="*" element={<ErrorPage />} />

      </Routes>
    </AnimatePresence>
  );
};


function App() {

  useEffect(() => {
    if (!localStorage.getItem("theme")) {
      localStorage.setItem("theme", "light");
    }

    function renderTheme(theme) {
      theme == "black" ? document.body.classList.add("dark") : document.body.classList.remove("dark");
    }

    localStorage.getItem("theme") == "dark" ? renderTheme("black") : renderTheme("white");

  }, [])

  return (
    <BrowserRouter>
      <AnimatedRoutes />
    </BrowserRouter>
  )
}

export default App
