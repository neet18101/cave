import React from "react";
import "./Specification.css";

const Specification = () => {
    return (
        <>
            <div className="header__about">
                <div className="d-flex header__about__head  align-items-start  justify-content-start ">
                    <div className=" header__about__main">
                        <h1 className="text-left  ">Rentals made efficient and
                            smooth with <span className="text-orangeY">Bachelors Cave</span></h1>
                        <p className="text-sm  text-left">Book accomodation
                            online with certified lessors. Enjoy personalised support all the way through.</p>
                    </div>
                    <img src="/image/house-hand.be575dd17024821adecc.png" className="img-fluid" />
                </div>
                <div className="header__about__submain">
                    <div className="d-flex header__about__submain__top justify-content-between row">
                        <div className="d-flex flex-column justify-content-center align-items-start submain__box col-4 ">
                            <div className="d-flex flex-column align-items-center ">
                                <img src="/image/file.ab59087533f88d8942e6.png" className="img-fluid " />
                            </div>
                            <div className="submain__box__head ">
                                <h1 className="text-lg ">1. Specify your terms</h1>
                                <p className>You give us your terms and we take
                                    care of selecting tailor made offers for you.</p>
                            </div>
                        </div>
                        <div className="d-flex flex-column  justify-content-center align-items-start submain__box col-4 ">
                            <div className="d-flex flex-column align-items-center "><img src="/image/target.f9f44248721f0601f25b.png" className="img-fluid" />
                            </div>
                            <div className="submain__box__head">
                                <h1 className="text-lg  ">2. Target your home</h1>
                                <p className>Found the one? Contact the landlord
                                    and arrange the visit if you like.</p>
                            </div>
                        </div>
                        <div className="d-flex flex-column justify-content-center align-items-start submain__box col-4 ">
                            <div className="d-flex flex-column align-items-center "><img src="/image/rent.4acafd11003f7799e8b7.png" className="img-fluid" />
                            </div>
                            <div className="submain__box__head">
                                <h1 className="text-lg  ">3. Book and pay online</h1>
                                <p className>Make your payment online and complete
                                    your booking securely on the platform.</p>
                            </div>
                        </div>
                    </div>
                    <div className="about__submain__tech">
                        <div className="d-flex about__submain__tech__img justify-content-center align-items-center submain__tech"><img src="/image/technical-support.4031ab2760e4b4878e65.png" className="img-fluid" />
                            <h1 className>Seamless support, even after booking</h1>
                        </div>
                        <p className="text-center ">Our multilingual expert team is here to
                            assist you from start to finish and commits to finding you a new home in case things go
                            unplanned. Focus on what matters: a fresh start!</p>
                    </div>
                    <button className type="button">Find out more</button>
                </div>
            </div>

        </>
    )
}

export default Specification;