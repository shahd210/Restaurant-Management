import styles from "./Cards.module.css"

function Cards (){
    return(
        <>
        <div className={`container-fluid ${styles.cards} d-flex justify-content-center align-items-center `}>
            <div className={`${styles.centercard} `}>

        <i className={`fa-brands fa-envira d-flex justify-content-center align-items-center ${styles.icon} ${styles.icon1}`} ></i>
       <h3 className="pt-4 pb-2">Fresh Ingredients</h3>
       <p className="w-75">
        We source exclusively from local organic farms to ensure every bite is bursting with natural vibrancy and peak seasonal flavor.
       </p>
            </div>

                 <div className={`${styles.centercard} `}>

        <i className={`fa-solid fa-utensils d-flex justify-content-center align-items-center ${styles.icon} ${styles.icon2}`} ></i>
       <h3 className="pt-4 pb-2">Chef-Crafted Recipes</h3>
       <p className="w-75">
Our menu is a curated gallery of flavors, designed by elite chefs who transform traditional techniques into modern culinary masterpieces.     </p>  
     </div>

                 <div  className={`${styles.centercard} `} >

        <i className={`fa-regular fa-alarm-clock d-flex justify-content-center align-items-center ${styles.icon} ${styles.icon3}`} ></i>
       <h3 className="pt-4 pb-2">Rapid Delivery</h3>
       <p className="w-75">
Our precision logistics ensure your meal arrives at the perfect temperature, preserved in custom-designed eco-friendly packaging.       </p>
            </div>
           
        </div>
        </>
    )
}

export default Cards