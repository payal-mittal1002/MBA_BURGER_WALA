import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
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
function App() {
  return (
    <Router>
    <Header isAuthenticated={true}/>
      <Routes>
       <Route path="/" element={<Home/>}/>
       <Route path="/Contact" element={<Contact/>}/>
       <Route path="/Cart" element={<Cart/>}/>
       <Route path="/Shipping" element={<Shipping/>}/>
       <Route path="/ConfirmOrder" element={<ConfirmOrder/>}/>
       <Route path="/PaymentSuccess" element={<PaymentSuccess/>}/>
       <Route path="/Login" element={<Login/>}/>
       <Route path="/me" element={<Profile/>}/>
       <Route path="/MyOrders" element={<MyOrders/>}/>
       <Route path="/Order/:id" element={<OrderDetails/>}/>
       <Route path="/Admin/DashBoard" element={<DashBoard/>}/>
       <Route path="/Admin/Users" element={<Users/>}/>
       <Route path="/Admin/Orders" element={<Orders/>}/>
       <Route path="/About" element={<About/>}/>
      
       <Route path="/Loader" element={<Loader/>}/>

       <Route path="*" element={<NotFound/>}/>
      </Routes>
      <Footer/>
    </Router>
  );
}

export default App;
