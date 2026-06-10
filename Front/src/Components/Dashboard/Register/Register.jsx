import styles from "./Register.module.css"
import register from "../../../assets/Register.jpg"
import { Link } from "react-router-dom";
 function Register (){

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
      <div className="mt-5 border-top pt-5">
      <div className={`form-group mb-3  `}>
        <label className="fw-semibold" htmlFor="">Full Name</label><br />
        <input  className={`${styles.custominp} px-2 py-3`}  type="text" placeholder="Shahd Khairy" />
      </div>

      <div className={`form-group mb-3  `}>
        <label className="fw-semibold" htmlFor="">Email Address</label><br />
        <input  className={`${styles.custominp} px-2 py-3`}  type="email" placeholder="Shahd@gmail.com" />
      </div>

      <div className={`form-group mb-3   `}>
        <label className="fw-semibold" htmlFor="">Password</label><br />
        <input  className={`${styles.custominp} px-2 py-3`}  type="password" placeholder="******" />
      </div>

      <div className={`form-group mb-5   `}>
        <label className={`${styles.customlabel} fw-semibold`} htmlFor="">Confirm Password</label><br />
        <input  className={`${styles.custominp} px-2 py-3`}  type="password" placeholder="******" />
      </div>
      </div>
      <div>
        <button className={`btn text-white py-3 fw-bold shadow rounded-3 ${styles.custombtn}`}>Create Account</button>
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