import Cards from "../Components/Dashboard/Cards/Cards";
import Footer from "../Components/Dashboard/Footer/Footer"
import Herosection from "../Components/Dashboard/Herosection/Herosection";
import Navbar from "../Components/Dashboard/Navbar/Navbar";
import {NavLink} from "react-router-dom"
import styles from "../Components/Dashboard/Navbar/Navbar.module.css"
function Home(){
    return(
        <>
       <Navbar>
                <NavLink to="login" className={`btn fw-semibold py-2 px-4  ${styles.custombtn} ${styles.browncolor} `} >Login</NavLink>
                <NavLink to="profile" className={`btn text-white fw-bold d-flex align-items-center  px-3 fs-6 ${styles.darkorgbg} `}>Profile</NavLink>

       </Navbar>
        <Herosection/>
        <Cards/>
        <Footer/>
        
        </>
    )
}
export default Home;