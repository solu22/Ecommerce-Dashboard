import axios from "axios";
import React, { useState } from "react";
import Header from "./Header";

const AddProduct = () => {
  const [name, setName] = useState("");
  const [file, setFile] = useState('');
  const [price, setPrice] = useState("");
  const [description, setDescription] = useState("");

  const addProduct =  async () => {
    
    const formData = new FormData();
    
    formData.append("name", name);
    formData.append("file", file);
    formData.append("price", price);
    formData.append("description", description);

    const result = await axios.post(
      "http://localhost:8000/api/addproduct",
      formData
    );
    const info = await result.data;
    alert('data added', info)
  };
  return (
    <>
      <Header />
      <div className="col-sm-6 offset-sm-3">
        <br />
        <h1 style={{ textAlign: "center" }}>Add Product Here</h1>
        <br />
        <input
          type="text"
          className="form-control"
          onChange={(e) => setName(e.target.value)}
          placeholder="name"
          
        />
        <br />

        <input
          type="file"
          className="form-control"
          onChange={(e) => setFile(e.target.files[0])}
          placeholder="file"
          
        />
        <br />

        <input
          type="text"
          className="form-control"
          onChange={(e) => setPrice(e.target.value)}
          placeholder="price"
          
        />
        <br />

        <input
          type="text"
          className="form-control"
          onChange={(e) => setDescription(e.target.value)}
          placeholder="description"
          
        />
        <br />
        <button onClick={addProduct}>Add Product</button>
      </div>
    </>
  );
};

export default AddProduct;
