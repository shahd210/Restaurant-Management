import Cards from "../Components/Dashboard/Cards/Cards";
import Footer from "../Components/Dashboard/Footer/Footer"
import Herosection from "../Components/Dashboard/Herosection/Herosection";
import Navbar from "../Components/Dashboard/Navbar/Navbar";

function Home(){
    return(
        <>
        <Navbar/>
        <Herosection/>
        <Cards/>
        <Footer/>
        
        </>
    )
}
export default Home;