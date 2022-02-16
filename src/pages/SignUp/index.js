import React, { useState} from 'react';
import { Link, Redirect } from 'react-router-dom';
import logo2 from '../../assets/logo.svg';
import Header from '../../components/Header';

export default function SignUp() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
   const [redirect, setRedirect] = useState(false);
  

  const handleSubmit = async (e) =>{
    e.preventDefault();
     
     await fetch('http://localhost:8000/api/register', {
       method: 'POST',
       headers:{'Content.Type': 'application/json'},
       body: JSON.stringify( {
        name, 
         email,
         password
       }
       )
     });
     setRedirect(true);
    }
     if(redirect === true) {
     return <Redirect to='/signin'/>
     }
  

  return (
    <div className="container-sign">
      <Header/>
      <div className="login">
        <div className="login-area">
          <img src={logo2} alt="Sistema Logo" />
        </div>

        <form onSubmit={handleSubmit}>
          <h1>Entrar</h1>
          <input type="text" placeholder="Seu nome" value={name} onChange={ (e) => setName(e.target.value) }/>
          <input type="email" placeholder="email@email.com" value={email} onChange={ (e) => setEmail(e.target.value) }/>
          <input type="password" placeholder="*******" value={password} onChange={(e) => setPassword(e.target.value) } />
          <button type="submit">Cadastrar</button>
        </form>  

        <Link className='d-none d-lg-block' to="/signin">Já tem uma conta? LogIn</Link>
      </div>
      <Link className='d-lg-none mt-5' to="/signin">Já tem uma conta? LogIn</Link>
    </div>
  );
}

 