import React, { useState } from "react";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";

function Gallery({ saveNext, activeTab, handleTabClick }) {
  const [images, setImages] = useState([]);

  const handleImageChange = (e) => {
    const files = e.target.files;

    if (files) {
      // Read and add each selected image to the images array
      const newImages = Array.from(files).map((file) => {
        const reader = new FileReader();
        reader.readAsDataURL(file);
        return new Promise((resolve) => {
          reader.onloadend = () => {
            resolve(reader.result);
          };
        });
      });

      // Update the state with the new images
      Promise.all(newImages).then((imageDataUrls) => {
        setImages((prevImages) => [...prevImages, ...imageDataUrls]);
      });
    }
  };

  const handleImageDelete = (index) => {
    const updatedImages = [...images];
    updatedImages.splice(index, 1);
    setImages(updatedImages);
  };
  const handleSubmit = () => {
    localStorage.setItem("gallery", JSON.stringify(images));
    
  }
  return (
    <>
      <div
        className="tab-pane listing__pg d-block"
        id="gallery"
        role="tabpanel"
        aria-labelledby="gallery-tab"
      >
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
              onChange={handleImageChange}
              multiple
            />
          </div>
        </div>
        {images.length > 0 && (
          <div style={{display:'flex',flexWrap:'wrap',justifyContent:'center'}}>
            {images.map((image, index) => (
              <div
                key={index}
                style={{
                  display: "flex",
                  alignItems: "center",
                  marginBottom: "10px",
                }}
              >
                <img
                  src={image}
                  alt={`Preview ${index}`}
                  style={{
                    maxWidth: "50%",
                    maxHeight: "200px",
                    marginRight: "10px",
                  }}
                />
                <DeleteForeverIcon
                  onClick={() => handleImageDelete(index)}
                  style={{ cursor: "pointer",top:'-40px', color: "#e0e0e0",right:"35px",borderRadius:"15px",background:'#232222' }}
                />
              </div>
            ))}
          </div>
        )}

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
        <div className="listing__foot__btns d-flex flex-column align-items-center flex-sm-row">
          {activeTab !== 1 && (
            <button
              className="listing__foot__btn-1 mb-2"
              onClick={() => handleTabClick(activeTab - 1)}
            >
              Back
            </button>
          )}
          <button className="listing__foot__btn-2 mb-2"  onClick={() => {
                saveNext();
                handleSubmit();
              }}>
            Save & Next
          </button>
        </div>
      </div>
    </>
  );
}
const previewStyle = {
  marginTop: "20px",
};

export default Gallery;
