import React from 'react';
import {Switch, Route } from 'react-router-dom';
import Home from './pages/Home';
import Aboutus from './pages/Aboutus';
import Documentation from './pages/Documentation';
import Documentacion from './pages/Documentation/esindex';
import Duvidas from './pages/Duvidas';
import Preguntas from './pages/Duvidas/Preguntas';
import Map from './pages/Map';
import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';


export default function Routes() {
 return (
   <div>
     <Switch>
         <Route path='/' exact component={Home}/>
         <Route path='/aboutus' component={Aboutus}/>
         <Route path='/documentation' component={Documentation}/>
         <Route path='/documentacion' component={Documentacion}/>
         <Route path='/duvidas' component={Duvidas}/>
         <Route path='/preguntas' component={Preguntas}/>
         <Route path='/map' component={Map}/>
         <Route path='/signin' component={SignIn}/>
         <Route path='/signup' component={SignUp}/>
     </Switch>
   </div>
 );
}