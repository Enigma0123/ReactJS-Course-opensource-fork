import { useState, useEffect } from "react";

function HelloTest() {
  const [imageUrl, setImageUrl] = useState("./../public/images/001.jpg");

  return (
    <>
      <input
        type="text"
        value={imageUrl}
        onChange={(e) => setImageUrl(e.target.value)}
        placeholder="Enter image URL"
      />
      {imageUrl && <img src={imageUrl} alt="User provided" />}
      {/* <img src="./../public/images/001.jpg" alt="Default image" /> */}
    </>
  );
}

export default HelloTest;