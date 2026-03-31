"use client";
import axios from "axios";
import { useState } from "react";

const Gallery = () => {
  const [product, setProduct] = useState(null); 

  const handleClick = async () => {
    try {
      console.log("calling")
      const response = await axios.get("http://localhost:5000/users");
      console.log("response -->", response.data);
      setProduct(response.data); 
    } catch (error) {
      console.error("Error fetching products:", error);
    }
  };

  return (
    <div>
      <button onClick={handleClick}>Click</button>  
      {/* <ul>
        {product?.bro?.map((item) => (
          <li key={item.id}>{item.name}</li>
        ))}
      </ul> */}
    </div>
  );
};

export default Gallery;