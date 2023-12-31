import React, { useState } from 'react';

const ImageDrag = () => {
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

  return (
    <div>
      <h2>Image Upload and Preview</h2>
      <input type="file" accept="image/*" onChange={handleImageChange} multiple />
      {images.length > 0 && (
        <div style={previewStyle}>
          <h3>Preview:</h3>
          {images.map((image, index) => (
            <img key={index} src={image} alt={`Preview ${index}`} style={{ maxWidth: '100%', maxHeight: '200px', marginRight: '10px' }} />
          ))}
        </div>
      )}
    </div>
  );
};

const previewStyle = {
  marginTop: '20px',
};

export default ImageDrag;
