import React from 'react';
import { useState } from "react";

import './Filter.css'

const Filter = () => {
    return (
        <>
            <section className="container-fluid filter">
                <div className="row filter__row">
                    <div className="col-lg-3 col-md-3 col-sm-3 filter__menu">
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
                    </div>
                    <div className="col-lg-5 col-md-5 col-sm-5">

                    </div>
                    <div className="col-lg-4 col-md-4 col-sm-4">

                    </div>
                </div>
            </section>
        </>
    );
};

export default Filter