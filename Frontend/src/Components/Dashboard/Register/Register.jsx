import styles from "./Register.module.css"
import register from "../../../assets/Register.jpg"
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import axios from "axios";


function Register (){

const navigate = useNavigate()

const [showPassword, setShowPassword] = useState(false)
const [showConfirm, setShowConfirm] = useState(false)

const[formData , setFormData]=useState({
  username:"",
  email:"",
  password:"",
  confirmpassword:""
});
const [error, setError] = useState("")
const handleChange = (e)=>{
setFormData({...formData,[e.target.name]: e.target.value})
}

 const handleRegister = async(e)=>{
 e.preventDefault()
 setError("")
 if(formData.password !== formData.confirmpassword){
       setError("Passwords don't match")  
       return
 }
 
 try {
  const res = await axios.post("http://localhost:7000/api/auth/register",{
    username: formData.username,
    email: formData.email,
    password: formData.password
  })

  localStorage.setItem("token",res.data.token)
  localStorage.setItem("user",JSON.stringify(res.data.user))
  navigate("/")

 } catch (error) {
   const data = error.response.data
    setError(data.errors ? data.errors[0] : data.message)
  }}
    return(
        <>
        <div className={` d-flex justify-content-between ${styles.page} `}>
            
            <div className="col-5" >
                <img className={` ${styles.customimg}`} src={register} alt="" />
            </div>
             <div className={`${styles.Loginpg}  col-7`}>
                <div>
                      <h3 className="fw-semibold">Aurora Dining</h3>
       <h4 className="fw-semibold">Create Your Account</h4>
       <p>Start your journey into the world of elite gastronomy.</p>
                </div>

                {error && <p style={{color:"red"}}>{error}</p> }
      <div className="mt-5 border-top pt-5">
      <div className={`form-group mb-3  `}>
        <label className="fw-semibold" htmlFor="">Full Name</label><br />
        <input value={formData.username} name="username"
        onChange={handleChange}
         className={`${styles.custominp} px-2 py-3`} 
          type="text" 
          placeholder="Shahd Khairy" />
      </div>

      <div className={`form-group mb-3  `}>
        <label className="fw-semibold" htmlFor="">Email Address</label><br />
        <input onChange={handleChange} name="email"
         className={`${styles.custominp} px-2 py-3`}
          type="email" 
          placeholder="Shahd@gmail.com" />
      </div>

      <div className={`form-group mb-3   `}>
        <label className="fw-semibold" htmlFor="">Password</label><br />
        <div style={{position:"relative",width:"85%"}}>
<input onChange={handleChange} 
      style={{width:"100%"}}
         className={`${styles.custominp} px-2 py-3`} 
         type= {showPassword ? "text":"password" }
          name="password"
          placeholder="******" />
<span
onClick={()=> setShowPassword(!showPassword)}
style={{
  position:"absolute",
  right:"10px",
  top:"50%",
  cursor:"pointer",
transform: "translateY(-50%)"
}}
>
  {showPassword?<i class="fa-regular fa-eye"></i>:
  <i class="fa-solid fa-eye"></i>}
</span>
        </div>
        
        
      </div>

      <div className={`form-group mb-5   `}>
        <label className={`${styles.customlabel} fw-semibold`} htmlFor="">Confirm Password</label><br />
        <div style={{width:"85%", position:"relative"}}>
            <input  onChange={handleChange}
        name="confirmpassword"
        className={`${styles.custominp} px-2 py-3`} 
        style={{width:"100%"}}
         type={showConfirm?"text":"password"} placeholder="******" />
         <span 
         
         onClick={()=> setShowConfirm(!showConfirm)}
         style={{
          position:"absolute",
          right:"10px",
          top:"50%",
          cursor:"pointer",
          transform:"translateY(-50%)"
          
         }}>
          {showConfirm?<i class="fa-regular fa-eye"></i>:
  <i class="fa-solid fa-eye"></i>}
         </span>
        </div>
        
      </div>
      </div>
      <div>
        <button onClick={handleRegister}
        className={`btn text-white py-3 fw-bold shadow rounded-3 ${styles.custombtn}`}>
          Create Account</button>
      </div>
      <div className=  {`m-3 mt-4 d-flex align-items-center justify-content-center ${styles.fntmiddle}`}>
        <p>Already a member? <Link to="/login" className={`${styles.dktxt} text-decoration-none fw-semibold`}>Login here</Link></p>
      </div>
      <div className="d-flex justify-content-center">
        <small>By creating an account, you agree to Aurora's <span className="text-decoration-underline">Terms of Service</span>  and<span className="text-decoration-underline">Privacy Policy</span> .</small>
      </div>
             </div>
        
           

        </div>
        
        </>
    )
}

export default Register;