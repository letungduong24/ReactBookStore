import React, { useState } from "react";

const ImageUpload = () => {
  const [preview, setPreview] = useState(
    "/images/matbiec.jpg"
  );

  const loadFile = (event) => {
    const file = event.target.files[0];
    if (file) {
      const objectUrl = URL.createObjectURL(file);
      setPreview(objectUrl);
      
      return () => URL.revokeObjectURL(objectUrl);
    }
  };

  return (
    <form>
      <div className="flex flex-col items-center gap-6">
        <div className="shrink-0">
            <img src={preview} id="preview_img" className='md:h-120 shrink-0 w-fit object-cover object-center shadow-2xl rounded-3xl' alt="" />
        </div>
        <div className="flex justify-center">
          <input
            type="file"
            onChange={loadFile}
            className="file:bg-amber-600 file:rounded-3xl"
          />
        </div>
      </div>
    </form>
  );
};

export default ImageUpload;