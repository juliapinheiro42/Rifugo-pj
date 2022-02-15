import React, { useState} from 'react';
import './lateral.css';
import logo from '../../assets/rifugo.svg';
import { BsSearch } from "react-icons/bs";
import Cards from '../Cards';


export default function CLateral() {
  const [value, setValue] = useState('');
  


 return (
   <div className='lateral'>
    <div className='search'>
      <div>
    <img src={logo}/>
    </div>
    <div className='mt-4 ml-5 mb-3 search-label'>
  
      <input  value={value}
        onChange={(e)=> setValue(e.target.value)}
        placeholder= "pesquisar"
        />
        <button><BsSearch role="button" /></button>
       
   </div> 
   <div className='h1 mt-3 ml-5'>
          <h1>Na sua área</h1>
        </div> 
    </div>
    <div className='mt-2 search'>
    <Cards/>  
    </div>
   </div>
 );
}