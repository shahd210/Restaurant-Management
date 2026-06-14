import styles from "./Footer.module.css"
function Footer (){
    return (
        <> <footer className={`${styles.bg} container-fluid py-5 `}>
           <div className="row d-flex justify-content-around p-5 ">
            <div className="sec-1 col-2 ">
                <h4 className={`${styles.orgtext} py-3`}>Aurora Dining</h4>
   <p className={`${styles.brntext} `}>
 Bringing fine dining to the sanctuary of your home since 2018. Quality without compromise.
   </p>
            </div>
            <div className="col-3 d-flex flex-column px-5">
   <p className="fw-bold fs-5">Explore</p>
    <ul className={`list-unstyled  ${styles.text_sm}`}>
        <li className="py-2">Menu</li>
        <li className="py-2">Juice list</li>
        <li className="py-2">Gift Cards</li>
        <li className="py-2">Reservations</li>
    </ul>
            </div>

            <div className="col-3 d-flex flex-column px-5">
   <p className="fw-bold fs-5">Legal</p>
    <ul className={`list-unstyled  ${styles.text_sm}`}>
        <li className="py-2">Privacy Policy</li>
        <li className="py-2">Terms Of Service</li>
        <li className="py-2">Cookie Policy</li>
        <li className="py-2">Opening Hours</li>
    </ul>
            </div>
            <div className={` col-3`}>
                <p className="fw-bold fs-5">Newsletter</p>
                <p  className={`${styles.text_sm} ${styles.brntext} w-75`}>Join our culinary inner circle for exclusive recipes and offers.</p>
              <div className="w-75">
                <div className={`form-floating mb-2 w-100 `}>
                      <input type="text" className={`${styles.custominput} form-control py-1  `} id="floatingInput" />
                         <label htmlFor="floatingInput">Email address</label>
                </div>
                <div >
                    <button className={`${styles.custombtn} text-center py-2 fw-semibold text-white w-100`}>Subscribe</button>
                </div>
              </div>
                
            </div>
           </div>
            <small className='d-flex  justify-content-center border-top pt-5'>© 2024 LuxeBistro Culinary Group. All rights reserved.</small>
        </footer>
       
        
        </>
    )
}
export default Footer;