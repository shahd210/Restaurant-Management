import styles from "./Herosection.module.css"

function Herosection(){
    return(
        <>
        <div className={`${styles.herosection} d-flex text-white align-items-center py-5 `}>
<div className="w-50  px-5 ">
    <h1 className={styles.h} >Exquisite Flavors, <br /> Delivered to Your Door</h1>
    <h3 className="text-white fs-5 col-8 py-3 ">Experience world-class culinary artistry from the comfort of your home. Gourmet meals crafted by Michelin-starred chefs, delivered with uncompromising speed.</h3>

<div className="d-flex gap-3 py-3">
    <button className={`${styles.custombtn} `}>Order Now</button>
    <button className={`${styles.custombtn2} `} >View Menu</button>
</div>
</div>

        </div>
        </>
    )
}
export default Herosection;