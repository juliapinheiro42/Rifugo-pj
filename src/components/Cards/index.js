
import React from 'react';
import { Card, CardBody, CardText } from 'reactstrap';
import './cards.css';


export default function Cards() {
 return (
   <div >

  <Card className='m-0 card'>
    <img 
      src="https://lh5.googleusercontent.com/p/AF1QipOnOFQqm4zdV9p36kZMFJwAI5ntzmJfjiTWERZs=w408-h306-k-no"
    />
    <CardBody>
      <h5>
        Polícia federal
      </h5>
      
      <h6 className="mb-2">
      Av. Rodrigues Alves, 1 - Centro, Rio de Janeiro - RJ, 20081-250
      </h6>
      
    </CardBody>
    </Card> 
    <Card className='m-0 card'>
    <img 
      src="https://lh5.googleusercontent.com/p/AF1QipNT_kcMWK--Bt1P48zgLeLjtZlp_UqmNkXY6olU=w408-h543-k-no"
    />
    <CardBody>
      <h5>
        Caritas Arquidiocesana
      </h5>
      
      <h6 className="mb-2">
       R. São Francisco Xavier, 483 - Maracanã, Rio de Janeiro - RJ, 20550-011
      </h6>
      
    </CardBody>
    
    </Card>
    
    <Card className='m-0 card'>
    <img 
      src="https://streetviewpixels-pa.googleapis.com/v1/thumbnail?panoid=E2Wu1gZ_nDO2ZoViVPFlPQ&cb_client=search.gws-prod.gps&w=408&h=240&yaw=152.75696&pitch=0&thumbfov=100"
    />
    <CardBody>
      <h5>
        Polícia federal
      </h5>
      
      <h6 className="mb-2">
      Av. Pres. Vargas, 70 - Vila Militar, Ponta Porã - MS, 79900-000
      </h6>
      
    </CardBody>
    </Card>
  
    <Card className='m-0 card'>
    <img 
      src="https://streetviewpixels-pa.googleapis.com/v1/thumbnail?panoid=MBPnnFdsQwSeECimJ9gGaQ&cb_client=search.gws-prod.gps&w=408&h=240&yaw=170.25737&pitch=0&thumbfov=100"
    />
    <CardBody>
      <h5>
        Caritas
      </h5>
      
      <h6 className="mb-2">
      R. Rio Grande do Sul, 10 - Méier, Rio de Janeiro - RJ, 20775-100
      </h6>
      <CardText tag="span">
        
      </CardText>
    </CardBody>
    </Card>
   </div>
 );
}

