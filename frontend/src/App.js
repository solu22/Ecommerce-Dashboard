
import './App.css';
//import Header from './components/Header';
import {BrowserRouter as Router , Routes, Route } from 'react-router-dom'
import HomePage from './components/HomePage';
import Login from './components/Login';
import Register from './components/Register';
import AddProduct from './components/AddProduct';
import UpdateProduct from './components/UpdateProduct';

function App() {
  return (
    
      <Router >
        <Routes>
          <Route path= "/" element = { <HomePage />}/>
          <Route path ="/login" element = { <Login />} />
          <Route path ="/register" element = { <Register />} />
          <Route path ="/add" element = { <AddProduct/>} />
          <Route path ="/update" element = { <UpdateProduct />} />
        </Routes>
      
      </Router>
    
   
  );
}

export default App;
