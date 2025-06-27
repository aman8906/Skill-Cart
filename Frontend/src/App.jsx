import React from "react";
import Home from "./home/Home";
import { Navigate, Route, Routes } from "react-router-dom";
import Courses from "./courses/Courses";
import Signup from "./components/Signup";
import { Toaster } from "react-hot-toast";
import { useAuth } from "./context/AuthProvider";
import Contact from "./pages/Contact";
import About from "./pages/About";
import BuyNow from "./pages/BuyNow";
import MyOrders from "./pages/MyOrders";
import Cart from "./pages/Cart";
import Jobs from "./pages/Jobs";
import JobDetail from "./pages/JobDetail";
import ApplyJob from "./pages/ApplyJob";
import PressKit from "./pages/PressKit";



function App() {
  
const { user, setUser } = useAuth(); // ✅ CORRECT

  console.log(user);
  return (
    <>
      <div className="dark:bg-slate-900 dark:text-white">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/course"
            element={ <Courses /> }
          />
          <Route path="/signup" element={<Signup />} />
           <Route
          path="/about"
          element={<About />   } />
          <Route path="/contact"element={<Contact/>}/>
          <Route path="/buy-now/:id" element={<BuyNow />} />
<Route path="/buy/:id" element={<BuyNow />} /> // fallback support

          <Route path="/my-orders" element={<MyOrders />} />
          <Route path="/jobs" element={<Jobs />} />
          <Route path="/jobs/:id" element={<JobDetail />} />
          <Route path="/apply/:id" element={<ApplyJob />} />
          <Route path="/press-kit" element={<PressKit />} />

</Routes>
        <Toaster />
      </div>
    </>
  );
}

export default App;
