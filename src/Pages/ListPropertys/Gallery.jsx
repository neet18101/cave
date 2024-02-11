import React, { useState } from "react";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import { useParams } from "react-router-dom";
import axios from "axios";
import { addPropertyData } from "../../Redux/Feature/OwnerDataSlices";
import { useDispatch } from "react-redux";

function Gallery({ saveNext, activeTab, handleTabClick, onChildDataChange }) {
  const params = useParams();
  const [images, setImages] = useState([]);
  const [previewImages, setPreviewImages] = useState([]);
  const dispatch = useDispatch();

  const handleImageChange = (e) => {
    const selectedImages = Array.from(e.target.files);

    setImages((prevImages) => [...prevImages, ...selectedImages]);

    const selectedPreviewImages = selectedImages.map((image) =>
      URL.createObjectURL(image)
    );

    setPreviewImages((prevPreviewImages) => [
      ...prevPreviewImages,
      ...selectedPreviewImages,
    ]);
  };

  const handleImageRemove = (index) => {
    const updatedImages = [...images];
    updatedImages.splice(index, 1);
    setImages(updatedImages);

    const updatedPreviewImages = [...previewImages];
    updatedPreviewImages.splice(index, 1);
    setPreviewImages(updatedPreviewImages);
  };

  const handleImageUpload = async () => {
    const formData = new FormData();

    images.forEach((image) => {
      formData.append("images", image);
    });
    formData.append("user_id", params.id);

    console.log(formData);

    // Serialize File objects to JSON-compatible format
    const serializedImages = images.map((image) => ({
      name: image.name,
      size: image.size,
      type: image.type,
      // You may include other properties if needed
    }));
    console.log(serializedImages)
    // Dispatch action with serialized FormData as payload
    dispatch(addPropertyData({ key: 5, value: serializedImages }));

    console.log("Images added to Redux state for later submission.");
  };
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
            <from encType="multipart/form-data">
              <input
                type="file"
                id="img-upload"
                name="gallery-img"
                hidden
                accept="image/*"
                onChange={handleImageChange}
                multiple
              />
            </from>
          </div>
        </div>
        {previewImages.length > 0 && (
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              justifyContent: "center",
            }}
          >
            {previewImages.map((image, index) => (
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
                  onClick={() => handleImageRemove(index)}
                  style={{
                    cursor: "pointer",
                    top: "-40px",
                    color: "#e0e0e0",
                    right: "35px",
                    borderRadius: "15px",
                    background: "#232222",
                  }}
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
        <div className="listing__foot__btns d-flex">
          {activeTab !== 1 && (
            <button
              className="listing__foot__btn-1"
              onClick={() => handleTabClick(activeTab - 1)}
            >
              Back
            </button>
          )}
          <button
            className="listing__foot__btn-2"
            onClick={() => {
              saveNext();
              handleImageUpload();
            }}
          >
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
