import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import { useEffect } from "react";
import {useDispatch,useSelector} from "react-redux"
import {loadUser} from "./redux/actions/user.js"
import toast,{Toaster} from "react-hot-toast"
import {ProtectedRoute} from "protected-route-react"
import "./styles/app.scss"
import "./styles/Header.scss"
import "./styles/Home.scss"
import "./styles/Founder.scss"
import "./styles/Menu.scss"
import "./styles/Footer.scss"
import "./styles/Contact.scss"
import "./styles/Cart.scss"
import "./styles/Shipping.scss"
import "./styles/ConfirmOrder.scss"
import "./styles/PaymentSuccess.scss"
import "./styles/Login.scss"
import "./styles/Profile.scss"
import "./styles/Table.scss"
import "./styles/OrderDetails.scss"
import "./styles/DashBoard.scss"
import "./styles/About.scss"
import Header from "./components/Layout/Header";
import Home from "./components/Home/Home";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Layout/Footer";
import Cart from "./components/Cart/Cart";
import Shipping from "./components/Cart/Shipping";
import ConfirmOrder from "./components/Cart/ConfirmOrder";
import PaymentSuccess from "./components/Cart/PaymentSuccess";
import Login from "./components/Login/Login";
import Profile from "./components/Profile/Profile";
import MyOrders from "./components/MyOrders/MyOrders";
import OrderDetails from "./components/MyOrders/OrderDetails";
import DashBoard from "./components/Admin/DashBoard";
import Users from "./components/Admin/Users";
import Orders from "./components/Admin/Orders";
import About from "./components/About/About";
import NotFound from "./components/Layout/NotFound";
import Loader from "./components/Layout/Loader";
import ContactSaved from "./components/Contact/ContactSaved.jsx";

function App() {
  const dispatch=useDispatch();
  const {error,message,isAuthenticated,user} =useSelector((state)=>state.auth);
  useEffect(() => {
    dispatch(loadUser());
  }, [dispatch])
  
  useEffect(() => {
   if(error){
    toast.error(error);
    dispatch({
      type:"clearError",
    })
   }
   if (message) {
    toast.success(message);
    dispatch({
      type: "clearMessage",
    });
  }
  }, [dispatch,error,message]);
  
  return (
    <Router>
    <Header isAuthenticated={isAuthenticated}/>
      <Routes>
      <Route path="/ContactSaved" element={<ContactSaved/>}/>
       <Route path="/" element={<Home/>}/>
       <Route path="/contact" element={<Contact/>}/>
       <Route path="/about" element={<About/>}/>
       <Route path="/cart" element={<Cart/>}/>
       <Route path="/paymentsuccess" element={<PaymentSuccess/>}/>

       <Route path="/login" element={
       <ProtectedRoute isAuthenticated={!isAuthenticated} redirect="/me">
       <Login/>
       </ProtectedRoute>}/>


       <Route element=<ProtectedRoute isAuthenticated={isAuthenticated}  />>
       <Route path="/me" element={<Profile />}/>
       <Route path="/shipping" element={<Shipping/>}/>
       <Route path="/confirmorder" element={<ConfirmOrder/>}/>
       <Route path="/myorders" element={<MyOrders/>}/>
       <Route path="/order/:id" element={<OrderDetails/>}/>
       </Route>


       <Route element={<ProtectedRoute isAuthenticated={isAuthenticated} adminRoute={true} isAdmin={user&&user.role==="admin"} redirectAdmin="/me"/>}>
       <Route path="/admin/dashboard" element={<DashBoard/>}/>
       <Route path="/admin/users" element={<Users/>}/>
       <Route path="/admin/orders" element={<Orders/>}/>
       </Route>
       
      
       <Route path="/loader" element={<Loader/>}/>

       <Route path="*" element={<NotFound/>}/>
       <Route path="/ContactSaved" element={<ContactSaved/>}/>
      </Routes>
      <Footer/>
      <Toaster/>
    </Router>
  );
}

export default App;
