import styles from "./Cards.module.css"

function Cards (){
    return(
        <>
        <div className={`container-fluid ${styles.cards} d-flex justify-content-center align-items-center`}>
            <div className={``}>

        <i className={`fa-brands fa-envira d-flex justify-content-center align-items-center ${styles.icon}`} ></i>
       <h3>Fresh Ingredients</h3>
       <p>
        We source exclusively from local organic farms to ensure every bite is bursting with natural vibrancy and peak seasonal flavor.
       </p>
            </div>

                 <div>

        <i className={`fa-brands fa-envira d-flex justify-content-center align-items-center ${styles.icon}`} ></i>
       <h3>Fresh Ingredients</h3>
       <p>
        We source exclusively from local organic farms to ensure every bite is bursting with natural vibrancy and peak seasonal flavor.
       </p>
            </div>

                 <div>

        <i className={`fa-brands fa-envira d-flex justify-content-center align-items-center ${styles.icon}`} ></i>
       <h3>Fresh Ingredients</h3>
       <p>
        We source exclusively from local organic farms to ensure every bite is bursting with natural vibrancy and peak seasonal flavor.
       </p>
            </div>
           
        </div>
        </>
    )
}

export default Cards