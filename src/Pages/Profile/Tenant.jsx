import React from 'react'
import SubNavbar from '../../Components/Layout/Header/SubNavbar';
import './Profile.css'

function Tenant() {
    return (<>
        <SubNavbar />

        <section id="tenant-space" className='container-fluid'>
            <h1>Tenant Space</h1>
            <div className="row tenant__space">
                <div className="col-lg-8">
                    <div className="tenant__space__card d-flex justify-content-between align-items-center w-100">
                        <div className="tenant__card__left">
                            <h4>Hi Anas, welcome to Bachelor’sCave</h4>
                            <p>Follow our guide to get started on the platform. Online booking, our guaranteed, last-minute cancelling, everything is explained there!</p>
                            <button>Discover our Guide</button>
                        </div>
                        <div className="tenant__card__mid"></div>
                        <div className="tenant__card__right d-flex flex-column justify-content-center align-items-center">
                            <img src="/image/Vector (1).png" alt="" />
                            <h5>Need Help ?</h5>
                            <p>Send us Message</p>
                        </div>
                    </div>
                    <div className="tenant__pills">
                        <ul className="nav nav-pills mb-4 tenant__pill__menu d-flex justify-content-between" id="tenant-pills" role="tablist">
                            <li className="nav-item  " role="tenantData">
                                <button className="w-100 nav-link nav-Link  d-flex justify-content-start active" id="request-tab" data-bs-toggle="pill" data-bs-target="#request" type="button" role="tab" aria-controls="request" aria-selected="true">All Request</button></li>

                            <li className="nav-item  " role="tenantData">
                                <button className="nav-link nav-Link  d-flex justify-content-start" id="contacted-tab" data-bs-toggle="pill" data-bs-target="#contacted" type="button" role="tab" aria-controls="contacted" aria-selected="false">Contacted</button></li>

                            <li className="nav-item  " role="tenantData">
                                <button className="nav-link nav-Link  d-flex justify-content-start" id="shortlist-tab" data-bs-toggle="pill" data-bs-target="#shortlist" type="button" role="tab" aria-controls="shortlist" aria-selected="false">Shortlist</button></li>
                        </ul>

                        <div className="tab-content" id="tenant-pillsContent">
                            <div className='w-100 tab-pane p-0 show container active' id="request" role="tabpane2" aria-labelledby="request-tab">
                                <div className="tenant__card mb-5">
                                    <div className="row">
                                        <div className="col-lg-5">
                                            <div className="tenant__card__img position-relative">
                                                <img src="/image/tenant__card.png" alt="" />
                                                <button className='position-absolute'>PG</button>
                                                <button className='position-absolute'>Boys</button>
                                            </div>
                                        </div>
                                        <div className="col-lg-7 p-0 py-2">
                                            <div className="row position-relative">
                                                <div className="col-lg-12">
                                                    <div className="tenant__card__head">
                                                        <h3 className='mb-1'>PG For Boys in Chandigarh</h3>
                                                        <h4>1598, 23B, Sector 23, Chandigarh, 160023, India</h4>
                                                    </div>
                                                </div>
                                                <div className="col-lg-7 mb-3 mt-3">
                                                    <div className="tenant__card__prize">
                                                        <h3>₹  6,999</h3>
                                                    </div>
                                                </div>
                                                <div className="col-lg-5 mb-3 mt-3 ">
                                                    <div className="tenant__card__num">
                                                        <h3>Mukul </h3>
                                                        <h4>+91 876912344</h4>
                                                    </div>
                                                </div>
                                                <div className="col-lg-4 mt-1">
                                                    <div className="tenant__card__photos d-flex align-items-center">
                                                        <img src="/image/Vector (3).png" alt="" />
                                                        <a href="#">See Photos (11)</a>
                                                    </div>
                                                </div>
                                                <div className="col-lg-4">
                                                    <div className="tenant__card__btn__1">
                                                        <button>Book Site Visit</button>
                                                    </div>
                                                </div>
                                                <div className="col-lg-4">
                                                    <div className="tenant__card__btn__2">
                                                        <button>Called</button>
                                                    </div>
                                                </div>
                                                <div className="tenant__card__time">
                                                    <p className='position-absolute'>7 days ago</p>
                                                </div>
                                            </div>

                                        </div>
                                    </div>
                                </div>
                                <div className="tenant__card mb-5">
                                    <div className="row">
                                        <div className="col-lg-5">
                                            <div className="tenant__card__img position-relative">
                                                <img src="/image/tenant__card.png" alt="" />
                                                <button className='position-absolute'>PG</button>
                                                <button className='position-absolute'>Boys</button>
                                            </div>
                                        </div>
                                        <div className="col-lg-7 p-0 py-2">
                                            <div className="row position-relative">
                                                <div className="col-lg-12">
                                                    <div className="tenant__card__head">
                                                        <h3 className='mb-1'>PG For Boys in Chandigarh</h3>
                                                        <h4>1598, 23B, Sector 23, Chandigarh, 160023, India</h4>
                                                    </div>
                                                </div>
                                                <div className="col-lg-7 mb-3 mt-3">
                                                    <div className="tenant__card__prize">
                                                        <h3>₹  6,999</h3>
                                                    </div>
                                                </div>
                                                <div className="col-lg-5 mb-3 mt-3 ">
                                                    <div className="tenant__card__num">
                                                        <h3>Mukul </h3>
                                                        <h4>+91 876912344</h4>
                                                    </div>
                                                </div>
                                                <div className="col-lg-4 mt-1">
                                                    <div className="tenant__card__photos d-flex align-items-center">
                                                        <img src="/image/Vector (3).png" alt="" />
                                                        <a href="#">See Photos (11)</a>
                                                    </div>
                                                </div>
                                                <div className="col-lg-4">
                                                    <div className="tenant__card__btn__1">
                                                        <button>Book Site Visit</button>
                                                    </div>
                                                </div>
                                                <div className="col-lg-4">
                                                    <div className="tenant__card__btn__2">
                                                        <button>Called</button>
                                                    </div>
                                                </div>
                                                <div className="tenant__card__time">
                                                    <p className='position-absolute'>7 days ago</p>
                                                </div>
                                            </div>

                                        </div>
                                    </div>
                                </div>
                                <div className="tenant__card mb-3">
                                    <div className="row">
                                        <div className="col-lg-5">
                                            <div className="tenant__card__img position-relative">
                                                <img src="/image/tenant__card.png" alt="" />
                                                <button className='position-absolute'>PG</button>
                                                <button className='position-absolute'>Boys</button>
                                            </div>
                                        </div>
                                        <div className="col-lg-7 p-0 py-2">
                                            <div className="row position-relative">
                                                <div className="col-lg-12">
                                                    <div className="tenant__card__head">
                                                        <h3 className='mb-1'>PG For Boys in Chandigarh</h3>
                                                        <h4>1598, 23B, Sector 23, Chandigarh, 160023, India</h4>
                                                    </div>
                                                </div>
                                                <div className="col-lg-7 mb-3 mt-3">
                                                    <div className="tenant__card__prize">
                                                        <h3>₹  6,999</h3>
                                                    </div>
                                                </div>
                                                <div className="col-lg-5 mb-3 mt-3 ">
                                                    <div className="tenant__card__num">
                                                        <h3>Mukul </h3>
                                                        <h4>+91 876912344</h4>
                                                    </div>
                                                </div>
                                                <div className="col-lg-4 mt-1">
                                                    <div className="tenant__card__photos d-flex align-items-center">
                                                        <img src="/image/Vector (3).png" alt="" />
                                                        <a href="#">See Photos (11)</a>
                                                    </div>
                                                </div>
                                                <div className="col-lg-4">
                                                    <div className="tenant__card__btn__1">
                                                        <button>Book Site Visit</button>
                                                    </div>
                                                </div>
                                                <div className="col-lg-4">
                                                    <div className="tenant__card__btn__2">
                                                        <button>Called</button>
                                                    </div>
                                                </div>
                                                <div className="tenant__card__time">
                                                    <p className='position-absolute'>7 days ago</p>
                                                </div>
                                            </div>

                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className='w-100 tab-pane p-0  show container ' id="contacted" role="tabpane2" aria-labelledby="contacted-tab">
                                <div className="tenant__card mb-5">
                                    <div className="row">
                                        <div className="col-lg-5">
                                            <div className="tenant__card__img position-relative">
                                                <img src="/image/tenant__card.png" alt="" />
                                                <button className='position-absolute'>PG</button>
                                                <button className='position-absolute'>Boys</button>
                                            </div>
                                        </div>
                                        <div className="col-lg-7 p-0 py-2">
                                            <div className="row position-relative">
                                                <div className="col-lg-12">
                                                    <div className="tenant__card__head">
                                                        <h3 className='mb-1'>PG For Boys in Chandigarh</h3>
                                                        <h4>1598, 23B, Sector 23, Chandigarh, 160023, India</h4>
                                                    </div>
                                                </div>
                                                <div className="col-lg-7 mb-3 mt-3">
                                                    <div className="tenant__card__prize">
                                                        <h3>₹  6,999</h3>
                                                    </div>
                                                </div>
                                                <div className="col-lg-5 mb-3 mt-3 ">
                                                    <div className="tenant__card__num">
                                                        <h3>Mukul </h3>
                                                        <h4>+91 876912344</h4>
                                                    </div>
                                                </div>
                                                <div className="col-lg-4 mt-1">
                                                    <div className="tenant__card__photos d-flex align-items-center">
                                                        <img src="/image/Vector (3).png" alt="" />
                                                        <a href="#">See Photos (11)</a>
                                                    </div>
                                                </div>
                                                <div className="col-lg-4">
                                                    <div className="tenant__card__btn__1">
                                                        <button>Book Site Visit</button>
                                                    </div>
                                                </div>
                                                <div className="col-lg-4">
                                                    <div className="tenant__card__btn__2">
                                                        <button>Called</button>
                                                    </div>
                                                </div>
                                                <div className="tenant__card__time">
                                                    <p className='position-absolute'>7 days ago</p>
                                                </div>
                                            </div>

                                        </div>
                                    </div>
                                </div><div className="tenant__card mb-5">
                                    <div className="row">
                                        <div className="col-lg-5">
                                            <div className="tenant__card__img position-relative">
                                                <img src="/image/tenant__card.png" alt="" />
                                                <button className='position-absolute'>PG</button>
                                                <button className='position-absolute'>Boys</button>
                                            </div>
                                        </div>
                                        <div className="col-lg-7 p-0 py-2">
                                            <div className="row position-relative">
                                                <div className="col-lg-12">
                                                    <div className="tenant__card__head">
                                                        <h3 className='mb-1'>PG For Boys in Chandigarh</h3>
                                                        <h4>1598, 23B, Sector 23, Chandigarh, 160023, India</h4>
                                                    </div>
                                                </div>
                                                <div className="col-lg-7 mb-3 mt-3">
                                                    <div className="tenant__card__prize">
                                                        <h3>₹  6,999</h3>
                                                    </div>
                                                </div>
                                                <div className="col-lg-5 mb-3 mt-3 ">
                                                    <div className="tenant__card__num">
                                                        <h3>Mukul </h3>
                                                        <h4>+91 876912344</h4>
                                                    </div>
                                                </div>
                                                <div className="col-lg-4 mt-1">
                                                    <div className="tenant__card__photos d-flex align-items-center">
                                                        <img src="/image/Vector (3).png" alt="" />
                                                        <a href="#">See Photos (11)</a>
                                                    </div>
                                                </div>
                                                <div className="col-lg-4">
                                                    <div className="tenant__card__btn__1">
                                                        <button>Book Site Visit</button>
                                                    </div>
                                                </div>
                                                <div className="col-lg-4">
                                                    <div className="tenant__card__btn__2">
                                                        <button>Called</button>
                                                    </div>
                                                </div>
                                                <div className="tenant__card__time">
                                                    <p className='position-absolute'>7 days ago</p>
                                                </div>
                                            </div>

                                        </div>
                                    </div>
                                </div><div className="tenant__card mb-5">
                                    <div className="row">
                                        <div className="col-lg-5">
                                            <div className="tenant__card__img position-relative">
                                                <img src="/image/tenant__card.png" alt="" />
                                                <button className='position-absolute'>PG</button>
                                                <button className='position-absolute'>Boys</button>
                                            </div>
                                        </div>
                                        <div className="col-lg-7 p-0 py-2">
                                            <div className="row position-relative">
                                                <div className="col-lg-12">
                                                    <div className="tenant__card__head">
                                                        <h3 className='mb-1'>PG For Boys in Chandigarh</h3>
                                                        <h4>1598, 23B, Sector 23, Chandigarh, 160023, India</h4>
                                                    </div>
                                                </div>
                                                <div className="col-lg-7 mb-3 mt-3">
                                                    <div className="tenant__card__prize">
                                                        <h3>₹  6,999</h3>
                                                    </div>
                                                </div>
                                                <div className="col-lg-5 mb-3 mt-3 ">
                                                    <div className="tenant__card__num">
                                                        <h3>Mukul </h3>
                                                        <h4>+91 876912344</h4>
                                                    </div>
                                                </div>
                                                <div className="col-lg-4 mt-1">
                                                    <div className="tenant__card__photos d-flex align-items-center">
                                                        <img src="/image/Vector (3).png" alt="" />
                                                        <a href="#">See Photos (11)</a>
                                                    </div>
                                                </div>
                                                <div className="col-lg-4">
                                                    <div className="tenant__card__btn__1">
                                                        <button>Book Site Visit</button>
                                                    </div>
                                                </div>
                                                <div className="col-lg-4">
                                                    <div className="tenant__card__btn__2">
                                                        <button>Called</button>
                                                    </div>
                                                </div>
                                                <div className="tenant__card__time">
                                                    <p className='position-absolute'>7 days ago</p>
                                                </div>
                                            </div>

                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className='w-100 tab-pane p-0  show container' id="shortlist" role="tabpane2" aria-labelledby="shortlist-tab">
                                <div className="tenant__card mb-5">
                                    <div className="row">
                                        <div className="col-lg-5">
                                            <div className="tenant__card__img position-relative">
                                                <img src="/image/tenant__card.png" alt="" />
                                                <button className='position-absolute'>PG</button>
                                                <button className='position-absolute'>Boys</button>
                                            </div>
                                        </div>
                                        <div className="col-lg-7 p-0 py-2">
                                            <div className="row position-relative">
                                                <div className="col-lg-12">
                                                    <div className="tenant__card__head">
                                                        <h3 className='mb-1'>PG For Boys in Chandigarh</h3>
                                                        <h4>1598, 23B, Sector 23, Chandigarh, 160023, India</h4>
                                                    </div>
                                                </div>
                                                <div className="col-lg-7 mb-3 mt-3">
                                                    <div className="tenant__card__prize">
                                                        <h3>₹  6,999</h3>
                                                    </div>
                                                </div>
                                                <div className="col-lg-5 mb-3 mt-3 ">
                                                    <div className="tenant__card__num">
                                                        <h3>Mukul </h3>
                                                        <h4>+91 876912344</h4>
                                                    </div>
                                                </div>
                                                <div className="col-lg-4 mt-1">
                                                    <div className="tenant__card__photos d-flex align-items-center">
                                                        <img src="/image/Vector (3).png" alt="" />
                                                        <a href="#">See Photos (11)</a>
                                                    </div>
                                                </div>
                                                <div className="col-lg-4">
                                                    <div className="tenant__card__btn__1">
                                                        <button>Book Site Visit</button>
                                                    </div>
                                                </div>
                                                <div className="col-lg-4">
                                                    <div className="tenant__card__btn__2">
                                                        <button>Called</button>
                                                    </div>
                                                </div>
                                                <div className="tenant__card__time">
                                                    <p className='position-absolute'>7 days ago</p>
                                                </div>
                                            </div>

                                        </div>
                                    </div>
                                </div><div className="tenant__card mb-5">
                                    <div className="row">
                                        <div className="col-lg-5">
                                            <div className="tenant__card__img position-relative">
                                                <img src="/image/tenant__card.png" alt="" />
                                                <button className='position-absolute'>PG</button>
                                                <button className='position-absolute'>Boys</button>
                                            </div>
                                        </div>
                                        <div className="col-lg-7 p-0 py-2">
                                            <div className="row position-relative">
                                                <div className="col-lg-12">
                                                    <div className="tenant__card__head">
                                                        <h3 className='mb-1'>PG For Boys in Chandigarh</h3>
                                                        <h4>1598, 23B, Sector 23, Chandigarh, 160023, India</h4>
                                                    </div>
                                                </div>
                                                <div className="col-lg-7 mb-3 mt-3">
                                                    <div className="tenant__card__prize">
                                                        <h3>₹  6,999</h3>
                                                    </div>
                                                </div>
                                                <div className="col-lg-5 mb-3 mt-3 ">
                                                    <div className="tenant__card__num">
                                                        <h3>Mukul </h3>
                                                        <h4>+91 876912344</h4>
                                                    </div>
                                                </div>
                                                <div className="col-lg-4 mt-1">
                                                    <div className="tenant__card__photos d-flex align-items-center">
                                                        <img src="/image/Vector (3).png" alt="" />
                                                        <a href="#">See Photos (11)</a>
                                                    </div>
                                                </div>
                                                <div className="col-lg-4">
                                                    <div className="tenant__card__btn__1">
                                                        <button>Book Site Visit</button>
                                                    </div>
                                                </div>
                                                <div className="col-lg-4">
                                                    <div className="tenant__card__btn__2">
                                                        <button>Called</button>
                                                    </div>
                                                </div>
                                                <div className="tenant__card__time">
                                                    <p className='position-absolute'>7 days ago</p>
                                                </div>
                                            </div>

                                        </div>
                                    </div>
                                </div><div className="tenant__card mb-5">
                                    <div className="row">
                                        <div className="col-lg-5">
                                            <div className="tenant__card__img position-relative">
                                                <img src="/image/tenant__card.png" alt="" />
                                                <button className='position-absolute'>PG</button>
                                                <button className='position-absolute'>Boys</button>
                                            </div>
                                        </div>
                                        <div className="col-lg-7 p-0 py-2">
                                            <div className="row position-relative">
                                                <div className="col-lg-12">
                                                    <div className="tenant__card__head">
                                                        <h3 className='mb-1'>PG For Boys in Chandigarh</h3>
                                                        <h4>1598, 23B, Sector 23, Chandigarh, 160023, India</h4>
                                                    </div>
                                                </div>
                                                <div className="col-lg-7 mb-3 mt-3">
                                                    <div className="tenant__card__prize">
                                                        <h3>₹  6,999</h3>
                                                    </div>
                                                </div>
                                                <div className="col-lg-5 mb-3 mt-3 ">
                                                    <div className="tenant__card__num">
                                                        <h3>Mukul </h3>
                                                        <h4>+91 876912344</h4>
                                                    </div>
                                                </div>
                                                <div className="col-lg-4 mt-1">
                                                    <div className="tenant__card__photos d-flex align-items-center">
                                                        <img src="/image/Vector (3).png" alt="" />
                                                        <a href="#">See Photos (11)</a>
                                                    </div>
                                                </div>
                                                <div className="col-lg-4">
                                                    <div className="tenant__card__btn__1">
                                                        <button>Book Site Visit</button>
                                                    </div>
                                                </div>
                                                <div className="col-lg-4">
                                                    <div className="tenant__card__btn__2">
                                                        <button>Called</button>
                                                    </div>
                                                </div>
                                                <div className="tenant__card__time">
                                                    <p className='position-absolute'>7 days ago</p>
                                                </div>
                                            </div>

                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
                <div className="col-lg-4">
                    <div className="tenant__view__profile d-flex justify-content-between align-items-center ">
                        <div>
                            <h2>Mohd Anas</h2>
                            <a href="#">View Profile</a>
                        </div>
                        <img src="/image/Vector (2).png" alt="" />
                    </div>
                    <div className="col-lg-12 ">
                        <div className="tenant__add__prop d-flex justify-content-between align-items-center mt-4">
                            <h2>Request Premium</h2>
                            <img src="/image/Vector (2).png" alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </>);
}

export default Tenant;