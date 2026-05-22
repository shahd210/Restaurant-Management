import {Routes ,Route} from "react-router-dom"
import './App.css'
import Home from './Pages/Home'

function App() {


  return (
    <>
     <Home/>
     <Routes>
  <Route path="/" index />
  <Route path="/menu" element={<h1>menu</h1>}  />
  <Route path="/card" element={<h1>card</h1>}  />

  <Route path="/notification" element={<h1>notification</h1>}  />
     </Routes>
    </>
  )
}

export default App
