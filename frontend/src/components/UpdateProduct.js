import axios from 'axios'
import React, {useState, useEffect} from 'react'
import Header from './Header'
import {useParams} from 'react-router-dom'

const UpdateProduct = () => {
    const {id} = useParams()
    const [data, setData] = useState([])
    const [name, setName] = useState("");
  const [file, setFile] = useState('');
  const [price, setPrice] = useState("");
  const [description, setDescription] = useState("");
    useEffect(() => {

        async function fetchData() {
            // You can await here
            const response =await fetch('http://localhost:8000/api/product/'+ id);
            const result = await response.json()
            setData(result)
            setName(result.name)
            setFile(result.file)
            setPrice(result.price)
            setDescription(result.description)
            // ...
          }
          fetchData();


    }, [])
    const editProduct = async(id)=>{
        const formData = new FormData();
    
        formData.append("name", name);
        formData.append("file", file);
        formData.append("price", price);
        formData.append("description", description);
    
        const result = await axios.post(
          "http://localhost:8000/api/updateproduct/"+ id +"?_method=PUT",
          formData
        );
    
        // eslint-disable-next-line no-lone-blocks
        
    
      };
    
    return (
        <>
        <Header />
        <div className="col-sm-6 offset-sm-3" style={{textAlign:'center'}}>
            
            <h1>Update Product</h1>
            <input type = "text" defaultValue= {data.name}  onChange={(e) => setName(e.target.value)}/> 
            <br/> <br/>
            <input type = "text" defaultValue= {data.price} onChange={(e) => setPrice(e.target.value)}/> 
            <br/> <br/>
            <input type = "text" defaultValue= {data.description} onChange={(e) => setDescription(e.target.value)}/> 
            <br/> <br/>
            <input type = "file" defaultValue= {data.file_path} onChange={(e) => setFile(e.target.files[0])}/> 
            <br/> <br/>
            <img style = {{width: 200}} src = {'http://localhost:8000/' + data.file_path} alt ="name" />
            <br/> <br/>
            <button onClick = {()=> editProduct(data.id)}>Update</button>
        </div>
      </>
    )
}

export default UpdateProduct
