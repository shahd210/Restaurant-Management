import styles from "./Navbar.module.css"
import  { NavLink } from "react-router-dom"
function Navbar ({children}){
    return(
        <>
        <nav className= {`${styles.bg} ${styles.font} d-flex justify-content-between align-items-center px-5 py-3  `} >
            <div className="fs-2 fw-semibold ">
                <h2 className={styles.darkorg} >Aurora Dining</h2>
            </div>
            <div className={`d-flex gap-5 ${styles.browncolor} `} >
                <NavLink className={`text-decoration-none ${styles.browncolor} ${styles.custombtn}`} to="/">Home</NavLink>
                <NavLink className={`text-decoration-none ${styles.browncolor} ${styles.custombtn}`} to="/menu">Menu</NavLink>
                <NavLink className={`text-decoration-none ${styles.browncolor} ${styles.custombtn}`} to="/cart">Cart</NavLink>
                <NavLink className={`text-decoration-none ${styles.browncolor} ${styles.custombtn}`} to="/notification">Notification</NavLink>
            </div>
            <div className="d-flex gap-3">
                {children}
            </div>
        </nav>
        </>
    )
}
export default Navbar;