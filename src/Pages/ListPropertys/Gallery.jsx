import React, { useState } from "react";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import { useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addPropertyData } from "../../Redux/Feature/OwnerDataSlices";

function Gallery({ saveNext, activeTab, handleTabClick }) {
  const params = useParams();
  const dispatch = useDispatch();

  const [images, setImages] = useState([]);
  const [imagePreviews, setImagePreviews] = useState([]);
  const [hasError, setHasError] = useState(false);

  const handleImageChange = (event) => {
    const files = Array.from(event.target.files);

    try {
      const previews = [];
      for (const file of files) {
        if (file.type.startsWith("image/")) {
          previews.push(URL.createObjectURL(file));
        } else {
          console.warn("Unsupported file type:", file.type);
        }
      }

      setImages(files);
      setImagePreviews(previews);

      // Log formData size after updating state
      const formData = new FormData();
      files.forEach((image) => {
        formData.append("images", image); // Use a consistent key for all images
      });
      console.log(formData.size); // Log formData size
    } catch (error) {
      console.error("Error generating previews:", error);
      setHasError(true); // Set hasError to display an error message
    }
  };

  const handleImageUpload = async () => {
    try {
      if (images.length === 0) {
        console.error("No images to upload");
        return;
      }

      const formData = new FormData();
      images.forEach((image) => {
        formData.append("images", image); // Use a consistent key for all images
      });

      console.log(formData?.size, "neet"); // Now should log the populated formData
      for (const entry of formData.entries()) {
        console.log(entry);
      }

      // Use a library like axios or fetch to send the formData to a server
      // Example with Axios:
      // const response = await axios.post("your_upload_url", formData, {
      //   headers: {
      //     "Content-Type": "multipart/form-data",
      //   },
      // });

      // Handle the response as needed
    } catch (error) {
      console.error("Error uploading images:", error);
      // Handle the error, e.g., display a user-friendly message
    }
  };

  const previewStyle = {
    marginTop: "20px",
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
          <img src="/image/camera.png" alt="Camera" />
          <div className="img__upload__head">
            <h1>Add photos to get 5X more responses.</h1>
            <p>90% tenants contact on properties with photos.</p>
          </div>
          <div>
            <label htmlFor="img-upload">Add Photos</label>
            <input
              type="file"
              id="img-upload"
              name="images"
              hidden
              accept="image/*"
              multiple
              onChange={handleImageChange}
            />
          </div>
        </div>
        {imagePreviews.map((preview, index) => (
          <img
            src={preview}
            key={index}
            alt={`Image Preview ${index + 1}`}
            style={previewStyle}
          />
        ))}
        <div className="d-flex flex-column align-items-center justify-content-center gallery__img__upload">
          <img src="/image/movie.png" alt="Movie" />
          <div className="img__upload__head">
            <h1>Add video to get 5X more responses.</h1>
            <p>90% tenants contact on properties with videos.</p>
          </div>
          <div>
            <label htmlFor="video-upload">Add Video</label>
            <input
              type="file"
              id="video-upload"
              name="gallery-video"
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
              // Check if images array is not empty before proceeding
              if (images.length > 0) {
                handleImageUpload();
                // saveNext(); // You can call saveNext function here if needed
              } else {
                // Set hasError to true if no images are selected
                setHasError(true);
              }
            }}
          >
            Save & Next
          </button>
        </div>
        {/* Display error message if hasError is true */}
        {hasError && (
          <p style={{ color: "red" }}>Please select at least one image.</p>
        )}
      </div>
    </>
  );
}

export default Gallery;
