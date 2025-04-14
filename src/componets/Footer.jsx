import "../componets/Footer.css"
function Footers(){
    return(
        <footer>
            <section className="fotterExtradetails">
                <p><i class="fa-regular fa-envelope"></i><span>Sign Into to Newsletter</span></p>
                <p>...and recevie $25 coupon for first shopping.</p>
                <div>
                    <input type="email" name="email" placeholder="Enter Your Email"/>
                    <button>Subscribe</button>
                </div>
            </section>
        </footer>
    )
}
export default Footers