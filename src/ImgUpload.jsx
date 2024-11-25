import { useState } from "react";

const ImgUpload = () => {
  const [imgFile, setImgFile] = useState("");

  const handleFileChange = (e) => {
    const selectedFile = e.target.files[0];
    setImgFile(selectedFile);
  };

  return (
    <div>
      <input
        type="file"
        name="img-uploader"
        accept="image/"
        onChange={handleFileChange}
      />
      <>
      {imgFile && (
        <img
          src={URL.createObjectURL(imgFile)}
          alt="uploaded-img"
          width="300px"
          height="200px"
        />
      )}
      </>
    </div>
  );
};

export default ImgUpload;
