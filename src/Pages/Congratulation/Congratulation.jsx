import React, { useState } from "react";
import './Congratulation.css'
import SubNavbar from "../../Components/Layout/Header/SubNavbar";


function Congratulation() {
    return (<>
        <SubNavbar />
        <div className="container">
            <div className="row">
                <div className="col-lg-12">
                    <div className="congratulation">
                        <div className="row">
                            <div className="congrats__head mb-5 col-lg-12 d-flex justify-content-start align-items-center">
                                <img src="/image/congrats.png" alt="" />
                                <h3>Congratulations! You have placed your first ad on BachelorsCave</h3>
                            </div>
                            <div className="col-lg-12 congrats__para mb-4">
                                <p>To accompany you step by step, to adapt your needs and to allow you to rent as soon as possible
                                    to your future tenant, We have set up a support service.</p>
                            </div>
                            <div className="col-lg-12 congrats__btn d-flex mb-5">
                                <button >
                                    Edit
                                </button>
                                <button >
                                    Preview Listing
                                </button>
                            </div>
                            <div className="col-lg-12 mb-5">
                                <div className="congrats__premium">
                                    <div className="row">
                                        <div className="col-lg-10">
                                            <div className="congrats__prem__up d-flex mt-2">
                                                <img src="/image/Country House.png" alt="" />
                                                <div className="prem__up__head">
                                                    <h3>Rent your property faster with our premium plans!</h3>
                                                    <p>One membership, many exclusive privileges, Verified
                                                        Tenants</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-2">
                                            <button className="prem__up__btn">Go Premium</button>
                                        </div>
                                        <div className="col-lg-5 d-flex align-items-center mt-2 mb-2 ps-4  premium__btm">
                                            <img src="/image/Vector111.png" alt="" />
                                            <h5 style={{
                                                width:"282px"
                                            }}>Higher position of your property in search result</h5>
                                        </div>
                                        <div className="col-lg-3 d-flex align-items-center mt-2 mb-2 premium__btm ">
                                            <img src="/image/Vector111.png" alt="" />
                                            <h5 style={{
                                                width:"178px"
                                            }}>Property promotion on site</h5>
                                        </div>
                                        <div className="col-lg-4 d-flex align-items-center mt-2 mb-2  premium__btm">
                                            <img src="/image/Vector111.png" alt="" />
                                            <h5 style={{
                                                width:"178px"
                                            }}>10x more responses
                                                from tenant</h5>
                                        </div>
                                    </div>
                                </div>

                            </div>

                            <div className="col-lg-12">
                                <div className="congrats__warn">
                                    <div className="col-lg-12 congrats__warn__up d-flex align-items-center">
                                        <img src="/image/warn.png" alt="" />
                                        <div className="congrats__up__head ms-4">
                                            <h3>Your property don’t have any photos/videos</h3>
                                            <p>You need to upload photos and videos asap for your property it’s attract
                                                more tenant to rent out your property </p>
                                        </div>
                                    </div>
                                    <div className="col-lg-12 congrats__btn d-flex justify-content-end pb-3">
                                        <button>Don’t have photo</button>
                                        <button>Upload Now</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-lg-12 d-flex justify-content-center mb-5">
                    <button className="congrats__continue__btn">Continue  --></button>
                </div>
            </div>
        </div>
    </>);
}

export default Congratulation;