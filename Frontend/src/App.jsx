import {Routes ,Route} from "react-router-dom"
import './App.css'
import Home from './Pages/Home'
import Register from "./Components/Dashboard/Register/Register"
import Login from "./Components/Dashboard/Login/Login"

import MenuCustomer from "./Pages/MenuCustomer"

function App() {


  return (
    <>
  
     <Routes>
  <Route path="/" element={<Home/>} />
  <Route path="/menu" element={<MenuCustomer/>}  />
  <Route path="/order" element={<h1>order now</h1>}/>
  <Route path="/card" element={<h1>card</h1>}  />
  <Route path="/register" element={<Register/>} />
  <Route path="/login" element={<Login/>}/>
  <Route path="/notification" element={<h1>notification</h1>}  />
     </Routes>
    </>
  )
}

export default App
