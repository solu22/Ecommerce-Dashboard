
import './App.css';
//import Header from './components/Header';
import {BrowserRouter as Router , Routes, Route } from 'react-router-dom'

import Login from './components/Login';
import Register from './components/Register';
import AddProduct from './components/AddProduct';
import UpdateProduct from './components/UpdateProduct';
import Home from './components/Home';

function App() {
  return (
    
      <Router >
        <Routes>
          
          <Route path ="/login" element = { <Login />} />
          <Route path ="/register" element = { <Register />} />
          <Route path ="/add" element = { <AddProduct/>} />
          <Route path ="/update/:id" element = { <UpdateProduct />} />
          <Route path ="/" element = { <Home />} />
        </Routes>
      
      </Router>
    
   
  );
}

export default App;
