import react, { useState } from 'react';
import './Pg.css'

function PGgallery() {
    
    return (
        <>
            <div
                className="tab-pane listing__pg"
                id="gallery"
                role="tabpanel"
                aria-labelledby="gallery-tab"
            >
                <form action="">
                    <h3>Upload photos & videos</h3>
                    <hr className="divide" />
                    <div className="d-flex flex-column align-items-center justify-content-center gallery__img__upload mb-4">
                        <img src="/image/camera.png" alt="" />
                        <div className="img__upload__head">
                            <h1>Add photos to get 5X more responses.</h1>
                            <p>90% tenants contact on properties with photos.</p>
                        </div>
                        <div>
                            <label htmlFor="img-upload">Add Photos</label>
                            <input
                                type="file"
                                id="img-upload"
                                name="gallery-img"
                                hidden
                                accept="image/*"
                            />
                        </div>
                    </div>
                    <div className="d-flex flex-column align-items-center justify-content-center gallery__img__upload">
                        <img src="/image/movie.png" alt="" />
                        <div className="img__upload__head">
                            <h1>Add video to get 5X more responses.</h1>
                            <p>90% tenants contact on properties with videos.</p>
                        </div>
                        <div>
                            <label htmlFor="img-upload">Add Video</label>
                            <input
                                type="file"
                                id="img-upload"
                                name="gallery-img"
                                hidden
                                accept="video/*"
                            />
                        </div>
                    </div>
                </form>
                
            </div>
        </>
    );
}

export default PGgallery;