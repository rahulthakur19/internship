
import React, {useEffect, useState} from "react";
import './App.css';
import axios from 'axios';
import Popup from 'reactjs-popup';
import Chart from './components/Piechart'
import ProductCard from 'react-ui-cards'
export default function App() {
  
  
  let [data, setData] = useState([]);
  const [select, setselect] = useState('');
 
  const [category,setCategory] = useState([]);
    const getRepo = async() => { 
  
      await axios.get('https://fakestoreapi.com/products/categories').then((response) =>{
      const myRepo = response.data;
      console.log(typeof(myRepo));
      setCategory(myRepo)});
      };
  useEffect(() => {
        fetch(
          "https://fakestoreapi.com/products")
                      .then((res) => res.json())
                      .then(json => {
                          console.log(json);
                          setData(json);
                      });
       
      }, []);
      
  function handleChange (e){
   
    setselect(e.target.value);
   
  };
  
 
  
  useEffect(() => {
   
    data = data.filter(data => data.category == select);
    
    setData(data);
    getRepo();
    }, [select])

  return (
    <div>
      <div className="navbar">
      <Popup trigger={<button> Statistics </button>} 
     position="right center">
      <Chart />
    </Popup>  
    <div class="mb-3">
         <label class="form-label">Categories</label>
           <select id="state"
             onChange={handleChange} class="form-select mb-5">
                
                <option>All</option>
                { category.map((object) => ( 
                <option>
                    {object}
                    </option>
                ))
           }
            </select>
      </div>
    </div>
   
      <div className="hero">
      { 
        data.map(function({uid, title,description,image}){
         
              return (
                <div className="card">
                  <img src={image} ></img>
                  <hr></hr>
                  <div className="container">
                  <h3>{title}</h3>
                  <p>{description}</p></div>
                  </div>
                );
            })}
            </div>     
       </div>
  );
}