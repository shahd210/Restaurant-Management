import styles from "./Login.module.css"
import login from "../../../assets/login.jpg"
 function Login(){

    return(
        <>
        <div className={` d-flex justify-content-between  `}>
            
            <div className="col-5" >
                <img className={` ${styles.customimg}`} src={login} alt="" />
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
             </div>
        
           

        </div>
        
        </>
    )
}
export default Login;