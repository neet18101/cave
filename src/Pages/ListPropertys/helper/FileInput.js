import React, { useState } from "react";
import { useDispatch } from "react-redux";

function FileInput({
  id,
  title,
  text,
  label,
  input,
  src,
  className,
  count,
  cntEr,
  size,
  sizeEr,
}) {
  const dispatch = useDispatch();
  const [file, setFile] = useState([]);
  const [hasError, setHasError] = useState({ size: false, cnt: false });

  const inputChangeHandler = (e) => {
    if (file.length < count) {
      const files = e.target.files[0];
      const lock = size ? files.size <= size : true;
      if (lock) {
        if (files) {
          const fileReader = new FileReader();
          fileReader.readAsDataURL(files);

          fileReader.addEventListener("load", function () {
            setFile((prev) => [
              ...prev,
              { id: Math.random(), selected: false, src: this.result },
            ]);
          });
        }
      } else {
        setHasError((prev) => {
          return { ...prev, size: true };
        });
      }
    } else {
      setHasError((prev) => {
        return { ...prev, cnt: true };
      });
    }
  };

  const itemRemoveHandler = (val) => {
    setFile((prev) => prev.filter((item) => item.id !== val));
  };
  const markClickHandler = (id) => {
    const existingItem = file.find((item) => item.id === id);
    const newItem = {
      ...existingItem,
      selected: true,
    };
    setFile((prev) => {
      const changedFile = [...prev];
      for (let i = 0; i < prev.length; i++) {
        if (changedFile[i].id === id) {
          changedFile[i] = newItem;
        } else {
          changedFile[i] = { ...changedFile[i], selected: false };
        }
      }
      return changedFile;
    });
  };
  useEffect(() => {
    if (file.length < count) {
      setHasError((prev) => {
        return { size: prev.size, cnt: false };
      });
    }
    setHasError((prev) => {
      return { size: false, cnt: prev.cnt };
    });
  }, [file, setHasError]);

  return( <>

  
  
  
  </>);
}

export default FileInput;
