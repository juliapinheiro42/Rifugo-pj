
import React from "react";
import Footer from '../../components/Footer';
import CLateral from '../../components/CLateral';
import  MapContainer from '../../components/Mapa';
import './map.css';

 export default function Map() {
  

  return (
    <div>
     <div className='d-flex flex-row'>
       <CLateral/>
       <MapContainer className='w-50 h-50'/>
     </div>
     <footer>
       <Footer/>
     </footer>
    </div>
  );
 }