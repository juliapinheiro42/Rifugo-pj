
import React, { useContext, useState } from 'react';
import { Link, Redirect } from 'react-router-dom';
import './signin.css';
import logo2 from '../../assets/logo.svg';
import Header from '../../components/Header';

export default function SignIn() {
  const [Email, setEmail] = useState('');
  const [Password, setPassword] = useState('');
  const [redirect, setRedirect] = useState(false);

  const handleSubmit = async (e) =>{
    e.preventDefault();
     
     await fetch('http://localhost:8000/api/Login', {
       method: 'POST',
       headers:{'Cotent.Type': 'application/json'},
       credentials: 'include',
       body: JSON.stringify( {
         Email,
         Password
       }
       )
     });
     setRedirect(true);
    }
     if(redirect) {
     return <Redirect to='/'/>
     }

  return (
    <div className="container-sign">
      <Header/>
      <div className="login">
        <div className="login-area ">
          <img src={logo2} alt="Sistema Logo" />
        </div>

        <form onSubmit={handleSubmit}>
          <h1>Entrar</h1>
          <input type="text" placeholder="email@email.com" value={Email} required onChange={ (e) => setEmail(e.target.value) }/>
          <input type="password" placeholder="*******" value={Password} required onChange={(e) => setPassword(e.target.value) } />
          <button type="submit">Submit</button>
        </form>  
        <Link className='d-none d-lg-block' to="/signin">Já tem uma conta? LogIn</Link>
      </div>
      <Link className='d-lg-none mt-5' to="/signup">Já tem uma conta? LogIn</Link>
    </div>
  );
}
