import styles from "./Login.module.css"
import Loginimg from "../../../assets/Login.png"
function Login (){
    return(
        <>
        <div className={`d-flex justify-content-between `}>
            <div className={`${styles.customimg} col-5`}>
           <img src={Loginimg}  />
            </div>
            <div className={`${styles} col-7`}> 
ujujh
            </div>
        </div>
        </>
    )
}
export default Login;