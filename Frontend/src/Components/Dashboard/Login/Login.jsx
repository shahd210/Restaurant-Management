import styles from "./Login.module.css"
import {useState} from "react"
import {useNavigate, Link} from "react-router-dom";
import axios from "axios"

function Login (){
  const navigate = useNavigate()

  const [formData, setformData] = useState({
  email: "" , password: ""
  })
 
  const [showPassword, setShowPassword]=useState(false);

  const [error , setError]=useState("")
  const handleChange = (e)=>{
    setformData({...formData,[e.target.name]:e.target.value})
  }
  const handleLogin= async (e)=>{
    e.preventDefault()
    setError("")
    try {
       const res = await axios.post("http://localhost:7000/api/auth/login",{
    email: formData.email,
    password: formData.password
 })
 localStorage.setItem("token", res.data.token)
 localStorage.setItem("user" , JSON.stringify(res.data.user))
 
     navigate("/")
    } catch (error) {
      const data = error.response.data
   setError(data.errors ? data.errors[0] : data.message)

    }
}
    return(
        <>
        <div className={`d-flex justify-content-between `}>
            <div className={`${styles.wrapper} col-5`}>
              <div className={`${styles.customimg}  `}>
            </div>
            <div className={`${styles.overlay}`}></div>
            <div className={`${styles.content}`}>
         <h2 className={`${styles.header}`} >Aurora Dining</h2>
  <h5 className={`${styles.quote}`}>"Experience the intersection of tradition and modern culinary precision."</h5>
            </div>
           
            </div>


            <div className={`${styles.bg} col-7`}> 
  <div className={`${styles.formwrap}`}>
 <h1 className={`${styles.fnhead} text-center`}>Welcome Back</h1>
 <p className=" my-4 text-center">Sign in to access your culinary preferences.</p>
 <div >
{ error && <p style={{color:"red"}}>{error}</p>}
<div class="form-floating mb-3">
  <input value={formData.email}
   type="email" name="email"
   onChange={handleChange}
  class="form-control "
   id="floatingInput" 
  placeholder="name@example.com"/>
  <label for="floatingInput">Email address</label>
</div>
<div style={{ position:"relative"}} class="form-floating" >
  
    <input value={formData.password}
  name="password"
    onChange={handleChange}
  type= { showPassword ? "text":"password" }
  style={{ width:"100%" }}
  class="form-control"
   id="floatingPassword"
    placeholder="Password"/>
    <span 
    onClick={()=> setShowPassword(!showPassword)}
    style={{
      position:"absolute",
      cursor:"pointer",
      right:"10px",
      top:"50%",
      transform:"translateY(-50%)"
    }}>
    {showPassword ? <i class="fa-regular fa-eye" ></i>:
  <i class="fa-solid fa-eye "></i>}
    </span>
  
  
  <label for="floatingPassword">Password</label>
</div>
 </div>
 <div 
  className={`${styles.contain} my-5 text-center px-5 py-3`}>
    <button onClick={handleLogin} className={`${styles.fnorg}`}>Login</button>
 

</div>
<div className=  {`m-3  d-flex align-items-center justify-content-center ${styles.fntmiddle}`}>
        <p>Don't have an account? <Link to="/register" className={`${styles.dktxt} text-decoration-none fw-semibold`}>Sign up here</Link>.</p>
</div>

  </div>
            </div>
        </div>
        </>
    )
}
export default Login;