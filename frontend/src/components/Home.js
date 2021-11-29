import axios from "axios";
import React, { useState, useEffect } from "react";
import Header from "./Header";
import { Table } from "react-bootstrap";
import { Link, useNavigate } from 'react-router-dom'

const Home = () => {
 const navigate = useNavigate()
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState([]);

    useEffect(() => {
      if(!localStorage.getItem('user-info'))
      {
          navigate("/register")
      }
      return

  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])
  
  useEffect(() => {
    getData()
    setLoading(false);
  }, []);
  
  const deleteIt = async(id)=>{
    await axios.delete('http://localhost:8000/api/delete/'+id)
    getData()
  }
  
  const getData = async ()=>{
    const result = await axios.get("http://localhost:8000/api/list");
    const info = result.data;
    setData(info);
  }

  return (
    <div>
      <Header />
      {loading && loading}
      <div className = "col-sm-8 offset-sm-2">
      <h1 style={{ textAlign: "center" }}>Our Products</h1>
      <Table style= {{backgroundColor:'grey'}} >
        <thead style = {{textAlign: 'center'}}>
          <tr>
            <th>Id</th>
            <th> Name</th>
            <th>Image</th>
            <th>Price</th>
            <th>Description</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody style = {{textAlign: 'center'}}>
          {
              data.map((item)=>
              <tr style = {{textAlign: 'center'}}>
         
            <td>{item.id}</td>
            <td>{item.name}</td>
            
            <td>{item.price}</td>
            <td>{item.description}</td>
            <td><img style = {{width:100, textAlign:'center'}} src ={"http://localhost:8000/" + item.file_path} alt ="products's" /></td>
            <td><span style 
            = {{backgroundColor:'maroon', color:'wheat', padding:'9px', borderRadius:'4px', cursor:'pointer'}}
            onClick = {()=>deleteIt(item.id)}>Delete</span></td>

            <td><Link to ={'update/'+ item.id}><span style = {{backgroundColor:'green', color:'wheat', padding:'9px', borderRadius:'4px', cursor:'pointer'}}>Update</span></Link></td>
         
          </tr>
              )
          }
         
        </tbody>
      </Table>
      </div>
    </div>
  );
};

export default Home;
