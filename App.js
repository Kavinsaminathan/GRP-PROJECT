import './App.css';
import Home from './Components/Home';
import { Route, Routes } from 'react-router-dom';
import About from './Components/About';
import Service from './Components/Service';
import Navbar from './Components/Navbar';
import Products from './Components/Products';
import Order from './Components/Order';
import User from './Components/User';
import NewProduct from './Components/NewProduct';
import Offered from './Components/Offered';
import Userdetails from './Components/Userdetails';
import AuthProvider from './Components/Auth';
import Profile from './Components/Profile';
import Login from './Components/Login';
import Signup from './Components/Signup';
import RequiredAuth from './Components/RequiredAuth';


function App() {
  return (
    
    <div className="App">  
    <AuthProvider>
  <Navbar/>
   <Routes>
     <Route path="/" element={<Home/>}/>
     <Route path="/About" element={<About/>}/>
     <Route path="/Service" element={<Service/>}/>
     <Route path='/Products' element={<Products/>}>
      <Route path='new' element={<NewProduct/>}/>
      <Route path='Offered' element={<Offered/>}/>
     </Route>
     <Route path='/Orderx' element={<Order/>}/>
     <Route path='/User' element={<User/>}>
     <Route path=':userId' element={<Userdetails/>}/>
      </Route>
      <Route path='/Auth' element={<AuthProvider/>}/>
      <Route path='/Profile' element={<RequiredAuth>
        <Profile/>
      </RequiredAuth>}/>
      <Route path='/Login' element={<Login/>}/>
      {/* <Route path='/Signup' element={<Signup/>}/> */}
      
   </Routes>
</AuthProvider>

  
    </div>
  );
}

export default App;
