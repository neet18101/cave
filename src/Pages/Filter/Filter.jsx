import React from 'react';
import { useState } from "react";
import SubNavbar from "../../Components/Layout/Header/SubNavbar";


import './Filter.css'

const Filter = () => {
    return (
        <>
            <SubNavbar />

            <section className="container-fluid filter mt-4" style={{
                backgroundColor: "#fff"
            }}>
                <div className="row filter__row">
                    <div className="col-lg-3 col-md-3 col-sm-3 filter__menu mb-4">
                        <form action="">
                            <div className="filter__category container">
                                <h4>Category</h4>
                                <div className="form-check  filter__form__check">
                                    <input className="form-check-input filter__checkbox" type="checkbox" defaultValue id="flexCheckDefault" />
                                    <label className="form-check-label" htmlFor="flexCheckDefault">
                                        Apartments
                                    </label>
                                </div>
                                <div className="form-check filter__form__check">
                                    <input className="form-check-input filter__checkbox" type="checkbox" defaultValue id="flexCheckDefault" />
                                    <label className="form-check-label" htmlFor="flexCheckDefault">
                                        Independent house
                                    </label>
                                </div>
                                <div className="form-check filter__form__check">
                                    <input className="form-check-input filter__checkbox" type="checkbox" defaultValue id="flexCheckDefault" />
                                    <label className="form-check-label" htmlFor="flexCheckDefault">
                                        Gated community villa
                                    </label>
                                </div>

                            </div>
                            <div className="filter__bhk container">
                                <h4>BHK Type</h4>
                                <div className="row row-col-3">
                                    <div className='col-4'>
                                        <input type="radio" className="btn-check" name="btnradio" id="btnradio1" autoComplete="off" defaultChecked />
                                        <label className="btn btn-outline-primary btn__check__bhk" htmlFor="btnradio1"> 1 Bhk</label>
                                    </div>
                                    <div className='col-4'>
                                        <input type="radio" className="btn-check" name="btnradio" id="btnradio2" autoComplete="off" />
                                        <label className="btn btn-outline-primary btn__check__bhk" htmlFor="btnradio2"> 2 Bhk</label>
                                    </div>
                                    <div className='col-4'>
                                        <input type="radio" className="btn-check" name="btnradio" id="btnradio3" autoComplete="off" />
                                        <label className="btn btn-outline-primary btn__check__bhk" htmlFor="btnradio3"> 3 Bhk</label>
                                    </div>
                                    <div className='col-4'>
                                        <input type="radio" className="btn-check" name="btnradio" id="btnradio4" autoComplete="off" />
                                        <label className="btn btn-outline-primary btn__check__bhk" htmlFor="btnradio4"> 4 Bhk</label>
                                    </div>
                                    <div className='col-4'>
                                        <input type="radio" className="btn-check" name="btnradio" id="btnradio5" autoComplete="off" />
                                        <label className="btn btn-outline-primary btn__check__bhk" htmlFor="btnradio5"> 5 Bhk</label>
                                    </div>
                                </div>

                            </div>
                            <div className="filter__furnish container">
                                <h4>Furnishing</h4>
                                <div className="row row-col-2 furnish__row">
                                    <div className="form-check  filter__furnsih__check col-5">
                                        <input className="form-check-input filter__checkbox" type="checkbox" defaultValue id="flexCheckDefault" />
                                        <label className="form-check-label" htmlFor="flexCheckDefault">
                                            Full
                                        </label>
                                    </div>
                                    <div className="form-check  filter__furnsih__check col-6">
                                        <input className="form-check-input filter__checkbox" type="checkbox" defaultValue id="flexCheckDefault" />
                                        <label className="form-check-label" htmlFor="flexCheckDefault">
                                            Semi
                                        </label>
                                    </div>
                                    <div className="form-check  filter__furnsih__check col-6">
                                        <input className="form-check-input filter__checkbox" type="checkbox" defaultValue id="flexCheckDefault" />
                                        <label className="form-check-label" htmlFor="flexCheckDefault">
                                            None
                                        </label>
                                    </div>
                                </div>
                            </div>
                            <div className="filter__preferred container">
                                <h4>Preferred Tenants</h4>
                                <div className="row row-col-2 preferred__row">
                                    <div className="form-check  filter__preferred__check col-5">
                                        <input className="form-check-input filter__checkbox" type="checkbox" defaultValue id="flexCheckDefault" />
                                        <label className="form-check-label" htmlFor="flexCheckDefault">
                                            Male
                                        </label>
                                    </div>
                                    <div className="form-check  filter__preferred__check col-6">
                                        <input className="form-check-input filter__checkbox" type="checkbox" defaultValue id="flexCheckDefault" />
                                        <label className="form-check-label" htmlFor="flexCheckDefault">
                                            Female
                                        </label>
                                    </div>
                                </div>
                            </div>
                            <div className="filter__furnish container">
                                <h4>Furnishing</h4>
                                <div className="row row-col-2 furnish__row">
                                    <div className="form-check  filter__furnsih__check col-5">
                                        <input className="form-check-input filter__checkbox" type="checkbox" defaultValue id="flexCheckDefault" />
                                        <label className="form-check-label" htmlFor="flexCheckDefault">
                                            Full
                                        </label>
                                    </div>
                                    <div className="form-check  filter__furnsih__check col-6">
                                        <input className="form-check-input filter__checkbox" type="checkbox" defaultValue id="flexCheckDefault" />
                                        <label className="form-check-label" htmlFor="flexCheckDefault">
                                            Semi
                                        </label>
                                    </div>
                                    <div className="form-check  filter__furnsih__check col-6">
                                        <input className="form-check-input filter__checkbox" type="checkbox" defaultValue id="flexCheckDefault" />
                                        <label className="form-check-label" htmlFor="flexCheckDefault">
                                            None
                                        </label>
                                    </div>
                                </div>
                            </div>
                            <div className="filter__furnish container">
                                <h4>Preferred Tenants</h4>
                                <div className="row row-col-2 furnish__row">
                                    <div className="form-check  filter__furnsih__check col-5">
                                        <input className="form-check-input filter__checkbox" type="checkbox" defaultValue id="flexCheckDefault" />
                                        <label className="form-check-label" htmlFor="flexCheckDefault">
                                            Male
                                        </label>
                                    </div>
                                    <div className="form-check  filter__furnsih__check col-6">
                                        <input className="form-check-input filter__checkbox" type="checkbox" defaultValue id="flexCheckDefault" />
                                        <label className="form-check-label" htmlFor="flexCheckDefault">
                                            Female
                                        </label>
                                    </div>

                                </div>
                            </div>
                            <div className="filter__furnish container">
                                <h4>Parking</h4>
                                <div className="row row-col-2 furnish__row">
                                    <div className="form-check  filter__furnsih__check col-12">
                                        <input className="form-check-input filter__checkbox" type="checkbox" defaultValue id="flexCheckDefault" />
                                        <label className="form-check-label" htmlFor="flexCheckDefault">
                                            2 Wheeler
                                        </label>
                                    </div>
                                    <div className="form-check  filter__furnsih__check col-12">
                                        <input className="form-check-input filter__checkbox" type="checkbox" defaultValue id="flexCheckDefault" />
                                        <label className="form-check-label" htmlFor="flexCheckDefault">
                                            4 Wheeler
                                        </label>
                                    </div>

                                </div>
                            </div>
                            <div className="filter__furnish container">
                                <h4>Availability</h4>
                                <div className="row row-col-2 furnish__row">
                                    <div className="form-check  filter__furnsih__check col-12">
                                        <input className="form-check-input filter__checkbox" type="checkbox" defaultValue id="flexCheckDefault" />
                                        <label className="form-check-label" htmlFor="flexCheckDefault">
                                            Immediate
                                        </label>
                                    </div>
                                    <div className="form-check  filter__furnsih__check col-12">
                                        <input className="form-check-input filter__checkbox" type="checkbox" defaultValue id="flexCheckDefault" />
                                        <label className="form-check-label" htmlFor="flexCheckDefault">
                                            With in 15 Days
                                        </label>
                                    </div>
                                    <div className="form-check  filter__furnsih__check col-12">
                                        <input className="form-check-input filter__checkbox" type="checkbox" defaultValue id="flexCheckDefault" />
                                        <label className="form-check-label" htmlFor="flexCheckDefault">
                                            With in 30 Days
                                        </label>
                                    </div>
                                    <div className="form-check  filter__furnsih__check col-12">
                                        <input className="form-check-input filter__checkbox" type="checkbox" defaultValue id="flexCheckDefault" />
                                        <label className="form-check-label" htmlFor="flexCheckDefault">
                                            After 30 Days
                                        </label>
                                    </div>

                                </div>
                            </div>
                            <button className="filter__button mt-4 ms-4">Apply filters</button>
                        </form>
                    </div>
                    <div className="col-lg-6 col-md-5 col-sm-5 filter__result mb-4">
                        <h3>Home > Properties > <span>Chandigarh</span></h3>
                        <div className="row">
                            <div className="col-lg-12">
                                <div className="filter__result__head mt-4">
                                    <h3>Available for Rent in Chandigarh, Sector 8</h3>
                                </div>
                            </div>
                            <div className="col-lg-7">
                                <div className="filter__result__subhead">
                                    <h4>Result:  1297 Properties</h4>
                                </div>
                            </div>
                            <div className="col-lg-5">
                                <div className="filter__result__sort d-flex">
                                    <img src="/image/image 12 (1).png" alt="" />
                                    <h4>Sort by :</h4>
                                    <select>
                                        <option value="Relevance">Relevance</option>
                                        <option value="low to high">Price low to high</option>
                                        <option value="high to low">Price high to low</option>
                                    </select>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-lg-6">
                                <div className="filter__card mb-5">
                                    <div className="filter__card__img position-relative">
                                        <img src="/image/kara-eads-l-7-ew-hkq-1-b-2-s-unsplash-1.png" alt="" />
                                        <button className='position-absolute'>Apartment</button>
                                        <button className='position-absolute'>Available Now</button>
                                        <i class="fa-solid fa-heart position-absolute"></i>
                                    </div>
                                    <div className="row" style={{ padding: " 0px 10px" }}>
                                        <div className="col-lg-9">
                                            <h3 className="filter__card__head">2 BHK Flat in chandigarh</h3>
                                        </div>
                                        <div className="col-lg-3">
                                            <h3 className="card__head__price">₹  6,999</h3>
                                        </div>
                                        <div className="col-lg-12">
                                            <h3 className="filter__card__subhead">1598, 23B, Sector 23, Chandigarh, 160023, India</h3>
                                        </div>
                                        <div className="col-lg-4 d-flex align-items-center">
                                            <div className="filter__flat__features d-flex">
                                                <img src="/image/Vector.png" alt="" style={{
                                                    width: "18.5px",
                                                    height: "10.5px"
                                                }} />
                                                <h4>Furnished</h4>
                                            </div>
                                        </div>
                                        <div className="col-lg-8 d-flex align-items-center">
                                            <div className="filter__flat__features d-flex">
                                                <img src="/image/image-6.png" alt="" style={{
                                                    width: "12.5px",
                                                    height: "12.5px"
                                                }} />
                                                <h4>Boys only</h4>
                                            </div>
                                        </div>
                                        <div className="col-lg-8 d-flex align-items-center">
                                            <div className="filter__flat__features d-flex">
                                                <img src="/image/group-2.png" alt="" style={{
                                                    width: "12.5px",
                                                    height: "10.5px"
                                                }} />
                                                <h4>729 sqft.</h4>
                                            </div>
                                        </div>
                                        <div className="col-lg-4 d-flex align-items-center">
                                            <button className="filter__card__content__btn">
                                                Contact owner
                                            </button>
                                        </div>
                                    </div>
                                    <div className="row" style={{
                                        borderTop: "0.1px solid rgb(163 163 163 / 50%)",
                                        padding: "0px 10px"
                                    }}>
                                        <div className="col-lg-6">
                                            <div className="filter__card__foot d-flex align-items-center mt-2">
                                                <img src="/image/image 3.png" alt="" />
                                                <h3>6.0 km from Bus stand</h3>
                                            </div>
                                        </div>
                                        <div className="col-lg-6">
                                            <div className="filter__card__foot d-flex align-items-center mt-2">
                                                <img src="/image/image 3.png" alt="" />
                                                <h3>4.0 km from Chandigarh University</h3>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-6">
                                <div className="filter__card mb-5">
                                    <div className="filter__card__img position-relative">
                                        <img src="/image/kara-eads-l-7-ew-hkq-1-b-2-s-unsplash-1.png" alt="" />
                                        <button className='position-absolute'>Apartment</button>
                                        <button className='position-absolute'>Available Now</button>
                                        <i class="fa-solid fa-heart position-absolute"></i>
                                    </div>
                                    <div className="row" style={{ padding: " 0px 10px" }}>
                                        <div className="col-lg-9">
                                            <h3 className="filter__card__head">2 BHK Flat in chandigarh</h3>
                                        </div>
                                        <div className="col-lg-3">
                                            <h3 className="card__head__price">₹  6,999</h3>
                                        </div>
                                        <div className="col-lg-12">
                                            <h3 className="filter__card__subhead">1598, 23B, Sector 23, Chandigarh, 160023, India</h3>
                                        </div>
                                        <div className="col-lg-4 d-flex align-items-center">
                                            <div className="filter__flat__features d-flex">
                                                <img src="/image/Vector.png" alt="" style={{
                                                    width: "18.5px",
                                                    height: "10.5px"
                                                }} />
                                                <h4>Furnished</h4>
                                            </div>
                                        </div>
                                        <div className="col-lg-8 d-flex align-items-center">
                                            <div className="filter__flat__features d-flex">
                                                <img src="/image/image-6.png" alt="" style={{
                                                    width: "12.5px",
                                                    height: "12.5px"
                                                }} />
                                                <h4>Boys only</h4>
                                            </div>
                                        </div>
                                        <div className="col-lg-8 d-flex align-items-center">
                                            <div className="filter__flat__features d-flex">
                                                <img src="/image/group-2.png" alt="" style={{
                                                    width: "12.5px",
                                                    height: "10.5px"
                                                }} />
                                                <h4>729 sqft.</h4>
                                            </div>
                                        </div>
                                        <div className="col-lg-4 d-flex align-items-center">
                                            <button className="filter__card__content__btn">
                                                Contact owner
                                            </button>
                                        </div>
                                    </div>
                                    <div className="row" style={{
                                        borderTop: "0.1px solid rgb(163 163 163 / 50%)",
                                        padding: "0px 10px"
                                    }}>
                                        <div className="col-lg-6">
                                            <div className="filter__card__foot d-flex align-items-center mt-2">
                                                <img src="/image/image 3.png" alt="" />
                                                <h3>6.0 km from Bus stand</h3>
                                            </div>
                                        </div>
                                        <div className="col-lg-6">
                                            <div className="filter__card__foot d-flex align-items-center mt-2">
                                                <img src="/image/image 3.png" alt="" />
                                                <h3>4.0 km from Chandigarh University</h3>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-6">
                                <div className="filter__card mb-5">
                                    <div className="filter__card__img position-relative">
                                        <img src="/image/kara-eads-l-7-ew-hkq-1-b-2-s-unsplash-1.png" alt="" />
                                        <button className='position-absolute'>Apartment</button>
                                        <button className='position-absolute'>Available Now</button>
                                        <i class="fa-solid fa-heart position-absolute"></i>
                                    </div>
                                    <div className="row" style={{ padding: " 0px 10px" }}>
                                        <div className="col-lg-9">
                                            <h3 className="filter__card__head">2 BHK Flat in chandigarh</h3>
                                        </div>
                                        <div className="col-lg-3">
                                            <h3 className="card__head__price">₹  6,999</h3>
                                        </div>
                                        <div className="col-lg-12">
                                            <h3 className="filter__card__subhead">1598, 23B, Sector 23, Chandigarh, 160023, India</h3>
                                        </div>
                                        <div className="col-lg-4 d-flex align-items-center">
                                            <div className="filter__flat__features d-flex">
                                                <img src="/image/Vector.png" alt="" style={{
                                                    width: "18.5px",
                                                    height: "10.5px"
                                                }} />
                                                <h4>Furnished</h4>
                                            </div>
                                        </div>
                                        <div className="col-lg-8 d-flex align-items-center">
                                            <div className="filter__flat__features d-flex">
                                                <img src="/image/image-6.png" alt="" style={{
                                                    width: "12.5px",
                                                    height: "12.5px"
                                                }} />
                                                <h4>Boys only</h4>
                                            </div>
                                        </div>
                                        <div className="col-lg-8 d-flex align-items-center">
                                            <div className="filter__flat__features d-flex">
                                                <img src="/image/group-2.png" alt="" style={{
                                                    width: "12.5px",
                                                    height: "10.5px"
                                                }} />
                                                <h4>729 sqft.</h4>
                                            </div>
                                        </div>
                                        <div className="col-lg-4 d-flex align-items-center">
                                            <button className="filter__card__content__btn">
                                                Contact owner
                                            </button>
                                        </div>
                                    </div>
                                    <div className="row" style={{
                                        borderTop: "0.1px solid rgb(163 163 163 / 50%)",
                                        padding: "0px 10px"
                                    }}>
                                        <div className="col-lg-6">
                                            <div className="filter__card__foot d-flex align-items-center mt-2">
                                                <img src="/image/image 3.png" alt="" />
                                                <h3>6.0 km from Bus stand</h3>
                                            </div>
                                        </div>
                                        <div className="col-lg-6">
                                            <div className="filter__card__foot d-flex align-items-center mt-2">
                                                <img src="/image/image 3.png" alt="" />
                                                <h3>4.0 km from Chandigarh University</h3>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-6">
                                <div className="filter__card mb-5">
                                    <div className="filter__card__img position-relative">
                                        <img src="/image/kara-eads-l-7-ew-hkq-1-b-2-s-unsplash-1.png" alt="" />
                                        <button className='position-absolute'>Apartment</button>
                                        <button className='position-absolute'>Available Now</button>
                                        <i class="fa-solid fa-heart position-absolute"></i>
                                    </div>
                                    <div className="row" style={{ padding: " 0px 10px" }}>
                                        <div className="col-lg-9">
                                            <h3 className="filter__card__head">2 BHK Flat in chandigarh</h3>
                                        </div>
                                        <div className="col-lg-3">
                                            <h3 className="card__head__price">₹  6,999</h3>
                                        </div>
                                        <div className="col-lg-12">
                                            <h3 className="filter__card__subhead">1598, 23B, Sector 23, Chandigarh, 160023, India</h3>
                                        </div>
                                        <div className="col-lg-4 d-flex align-items-center">
                                            <div className="filter__flat__features d-flex">
                                                <img src="/image/Vector.png" alt="" style={{
                                                    width: "18.5px",
                                                    height: "10.5px"
                                                }} />
                                                <h4>Furnished</h4>
                                            </div>
                                        </div>
                                        <div className="col-lg-8 d-flex align-items-center">
                                            <div className="filter__flat__features d-flex">
                                                <img src="/image/image-6.png" alt="" style={{
                                                    width: "12.5px",
                                                    height: "12.5px"
                                                }} />
                                                <h4>Boys only</h4>
                                            </div>
                                        </div>
                                        <div className="col-lg-8 d-flex align-items-center">
                                            <div className="filter__flat__features d-flex">
                                                <img src="/image/group-2.png" alt="" style={{
                                                    width: "12.5px",
                                                    height: "10.5px"
                                                }} />
                                                <h4>729 sqft.</h4>
                                            </div>
                                        </div>
                                        <div className="col-lg-4 d-flex align-items-center">
                                            <button className="filter__card__content__btn">
                                                Contact owner
                                            </button>
                                        </div>
                                    </div>
                                    <div className="row" style={{
                                        borderTop: "0.1px solid rgb(163 163 163 / 50%)",
                                        padding: "0px 10px"
                                    }}>
                                        <div className="col-lg-6">
                                            <div className="filter__card__foot d-flex align-items-center mt-2">
                                                <img src="/image/image 3.png" alt="" />
                                                <h3>6.0 km from Bus stand</h3>
                                            </div>
                                        </div>
                                        <div className="col-lg-6">
                                            <div className="filter__card__foot d-flex align-items-center mt-2">
                                                <img src="/image/image 3.png" alt="" />
                                                <h3>4.0 km from Chandigarh University</h3>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-6">
                                <div className="filter__card mb-5">
                                    <div className="filter__card__img position-relative">
                                        <img src="/image/kara-eads-l-7-ew-hkq-1-b-2-s-unsplash-1.png" alt="" />
                                        <button className='position-absolute'>Apartment</button>
                                        <button className='position-absolute'>Available Now</button>
                                        <i class="fa-solid fa-heart position-absolute"></i>
                                    </div>
                                    <div className="row" style={{ padding: " 0px 10px" }}>
                                        <div className="col-lg-9">
                                            <h3 className="filter__card__head">2 BHK Flat in chandigarh</h3>
                                        </div>
                                        <div className="col-lg-3">
                                            <h3 className="card__head__price">₹  6,999</h3>
                                        </div>
                                        <div className="col-lg-12">
                                            <h3 className="filter__card__subhead">1598, 23B, Sector 23, Chandigarh, 160023, India</h3>
                                        </div>
                                        <div className="col-lg-4 d-flex align-items-center">
                                            <div className="filter__flat__features d-flex">
                                                <img src="/image/Vector.png" alt="" style={{
                                                    width: "18.5px",
                                                    height: "10.5px"
                                                }} />
                                                <h4>Furnished</h4>
                                            </div>
                                        </div>
                                        <div className="col-lg-8 d-flex align-items-center">
                                            <div className="filter__flat__features d-flex">
                                                <img src="/image/image-6.png" alt="" style={{
                                                    width: "12.5px",
                                                    height: "12.5px"
                                                }} />
                                                <h4>Boys only</h4>
                                            </div>
                                        </div>
                                        <div className="col-lg-8 d-flex align-items-center">
                                            <div className="filter__flat__features d-flex">
                                                <img src="/image/group-2.png" alt="" style={{
                                                    width: "12.5px",
                                                    height: "10.5px"
                                                }} />
                                                <h4>729 sqft.</h4>
                                            </div>
                                        </div>
                                        <div className="col-lg-4 d-flex align-items-center">
                                            <button className="filter__card__content__btn">
                                                Contact owner
                                            </button>
                                        </div>
                                    </div>
                                    <div className="row" style={{
                                        borderTop: "0.1px solid rgb(163 163 163 / 50%)",
                                        padding: "0px 10px"
                                    }}>
                                        <div className="col-lg-6">
                                            <div className="filter__card__foot d-flex align-items-center mt-2">
                                                <img src="/image/image 3.png" alt="" />
                                                <h3>6.0 km from Bus stand</h3>
                                            </div>
                                        </div>
                                        <div className="col-lg-6">
                                            <div className="filter__card__foot d-flex align-items-center mt-2">
                                                <img src="/image/image 3.png" alt="" />
                                                <h3>4.0 km from Chandigarh University</h3>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-6">
                                <div className="filter__card mb-5">
                                    <div className="filter__card__img position-relative">
                                        <img src="/image/kara-eads-l-7-ew-hkq-1-b-2-s-unsplash-1.png" alt="" />
                                        <button className='position-absolute'>Apartment</button>
                                        <button className='position-absolute'>Available Now</button>
                                        <i class="fa-solid fa-heart position-absolute"></i>
                                    </div>
                                    <div className="row" style={{ padding: " 0px 10px" }}>
                                        <div className="col-lg-9">
                                            <h3 className="filter__card__head">2 BHK Flat in chandigarh</h3>
                                        </div>
                                        <div className="col-lg-3">
                                            <h3 className="card__head__price">₹  6,999</h3>
                                        </div>
                                        <div className="col-lg-12">
                                            <h3 className="filter__card__subhead">1598, 23B, Sector 23, Chandigarh, 160023, India</h3>
                                        </div>
                                        <div className="col-lg-4 d-flex align-items-center">
                                            <div className="filter__flat__features d-flex">
                                                <img src="/image/Vector.png" alt="" style={{
                                                    width: "18.5px",
                                                    height: "10.5px"
                                                }} />
                                                <h4>Furnished</h4>
                                            </div>
                                        </div>
                                        <div className="col-lg-8 d-flex align-items-center">
                                            <div className="filter__flat__features d-flex">
                                                <img src="/image/image-6.png" alt="" style={{
                                                    width: "12.5px",
                                                    height: "12.5px"
                                                }} />
                                                <h4>Boys only</h4>
                                            </div>
                                        </div>
                                        <div className="col-lg-8 d-flex align-items-center">
                                            <div className="filter__flat__features d-flex">
                                                <img src="/image/group-2.png" alt="" style={{
                                                    width: "12.5px",
                                                    height: "10.5px"
                                                }} />
                                                <h4>729 sqft.</h4>
                                            </div>
                                        </div>
                                        <div className="col-lg-4 d-flex align-items-center">
                                            <button className="filter__card__content__btn">
                                                Contact owner
                                            </button>
                                        </div>
                                    </div>
                                    <div className="row" style={{
                                        borderTop: "0.1px solid rgb(163 163 163 / 50%)",
                                        padding: "0px 10px"
                                    }}>
                                        <div className="col-lg-6">
                                            <div className="filter__card__foot d-flex align-items-center mt-2">
                                                <img src="/image/image 3.png" alt="" />
                                                <h3>6.0 km from Bus stand</h3>
                                            </div>
                                        </div>
                                        <div className="col-lg-6">
                                            <div className="filter__card__foot d-flex align-items-center mt-2">
                                                <img src="/image/image 3.png" alt="" />
                                                <h3>4.0 km from Chandigarh University</h3>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-6">
                                <div className="filter__card mb-5">
                                    <div className="filter__card__img position-relative">
                                        <img src="/image/kara-eads-l-7-ew-hkq-1-b-2-s-unsplash-1.png" alt="" />
                                        <button className='position-absolute'>Apartment</button>
                                        <button className='position-absolute'>Available Now</button>
                                        <i class="fa-solid fa-heart position-absolute"></i>
                                    </div>
                                    <div className="row" style={{ padding: " 0px 10px" }}>
                                        <div className="col-lg-9">
                                            <h3 className="filter__card__head">2 BHK Flat in chandigarh</h3>
                                        </div>
                                        <div className="col-lg-3">
                                            <h3 className="card__head__price">₹  6,999</h3>
                                        </div>
                                        <div className="col-lg-12">
                                            <h3 className="filter__card__subhead">1598, 23B, Sector 23, Chandigarh, 160023, India</h3>
                                        </div>
                                        <div className="col-lg-4 d-flex align-items-center">
                                            <div className="filter__flat__features d-flex">
                                                <img src="/image/Vector.png" alt="" style={{
                                                    width: "18.5px",
                                                    height: "10.5px"
                                                }} />
                                                <h4>Furnished</h4>
                                            </div>
                                        </div>
                                        <div className="col-lg-8 d-flex align-items-center">
                                            <div className="filter__flat__features d-flex">
                                                <img src="/image/image-6.png" alt="" style={{
                                                    width: "12.5px",
                                                    height: "12.5px"
                                                }} />
                                                <h4>Boys only</h4>
                                            </div>
                                        </div>
                                        <div className="col-lg-8 d-flex align-items-center">
                                            <div className="filter__flat__features d-flex">
                                                <img src="/image/group-2.png" alt="" style={{
                                                    width: "12.5px",
                                                    height: "10.5px"
                                                }} />
                                                <h4>729 sqft.</h4>
                                            </div>
                                        </div>
                                        <div className="col-lg-4 d-flex align-items-center">
                                            <button className="filter__card__content__btn">
                                                Contact owner
                                            </button>
                                        </div>
                                    </div>
                                    <div className="row" style={{
                                        borderTop: "0.1px solid rgb(163 163 163 / 50%)",
                                        padding: "0px 10px"
                                    }}>
                                        <div className="col-lg-6">
                                            <div className="filter__card__foot d-flex align-items-center mt-2">
                                                <img src="/image/image 3.png" alt="" />
                                                <h3>6.0 km from Bus stand</h3>
                                            </div>
                                        </div>
                                        <div className="col-lg-6">
                                            <div className="filter__card__foot d-flex align-items-center mt-2">
                                                <img src="/image/image 3.png" alt="" />
                                                <h3>4.0 km from Chandigarh University</h3>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-6">
                                <div className="filter__card mb-5">
                                    <div className="filter__card__img position-relative">
                                        <img src="/image/kara-eads-l-7-ew-hkq-1-b-2-s-unsplash-1.png" alt="" />
                                        <button className='position-absolute'>Apartment</button>
                                        <button className='position-absolute'>Available Now</button>
                                        <i class="fa-solid fa-heart position-absolute"></i>
                                    </div>
                                    <div className="row" style={{ padding: " 0px 10px" }}>
                                        <div className="col-lg-9">
                                            <h3 className="filter__card__head">2 BHK Flat in chandigarh</h3>
                                        </div>
                                        <div className="col-lg-3">
                                            <h3 className="card__head__price">₹  6,999</h3>
                                        </div>
                                        <div className="col-lg-12">
                                            <h3 className="filter__card__subhead">1598, 23B, Sector 23, Chandigarh, 160023, India</h3>
                                        </div>
                                        <div className="col-lg-4 d-flex align-items-center">
                                            <div className="filter__flat__features d-flex">
                                                <img src="/image/Vector.png" alt="" style={{
                                                    width: "18.5px",
                                                    height: "10.5px"
                                                }} />
                                                <h4>Furnished</h4>
                                            </div>
                                        </div>
                                        <div className="col-lg-8 d-flex align-items-center">
                                            <div className="filter__flat__features d-flex">
                                                <img src="/image/image-6.png" alt="" style={{
                                                    width: "12.5px",
                                                    height: "12.5px"
                                                }} />
                                                <h4>Boys only</h4>
                                            </div>
                                        </div>
                                        <div className="col-lg-8 d-flex align-items-center">
                                            <div className="filter__flat__features d-flex">
                                                <img src="/image/group-2.png" alt="" style={{
                                                    width: "12.5px",
                                                    height: "10.5px"
                                                }} />
                                                <h4>729 sqft.</h4>
                                            </div>
                                        </div>
                                        <div className="col-lg-4 d-flex align-items-center">
                                            <button className="filter__card__content__btn">
                                                Contact owner
                                            </button>
                                        </div>
                                    </div>
                                    <div className="row" style={{
                                        borderTop: "0.1px solid rgb(163 163 163 / 50%)",
                                        padding: "0px 10px"
                                    }}>
                                        <div className="col-lg-6">
                                            <div className="filter__card__foot d-flex align-items-center mt-2">
                                                <img src="/image/image 3.png" alt="" />
                                                <h3>6.0 km from Bus stand</h3>
                                            </div>
                                        </div>
                                        <div className="col-lg-6">
                                            <div className="filter__card__foot d-flex align-items-center mt-2">
                                                <img src="/image/image 3.png" alt="" />
                                                <h3>4.0 km from Chandigarh University</h3>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-4 col-sm-4  ">
                        <div className="filter__map position-relative">
                            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3502.56206446232!2d77.22693477472595!3d28.612911975675452!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce2daa9eb4d0b%3A0x717971125923e5d!2sIndia%20Gate!5e0!3m2!1sen!2sin!4v1704647595359!5m2!1sen!2sin" width={349} height={600} style={{ border: 0, height: "200vh" ,borderRadius:"20px"}} allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade" />
                        <img src="/image/image_2.png" alt="" className='position-absolute' />
                        <button className='position-absolute'>Map View</button>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Filter