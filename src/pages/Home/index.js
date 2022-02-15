import React from 'react';
import './home.css';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import refugee from '../../assets/refugio.svg';
import logo from '../../assets/logo2.svg';
export default function Home() {
 return (
  <div className='container-center'>
    <Header/>
  <div className="flex-column m-4 p-4">
         <h2 className="m-4 pt-4">Ajude na quebra de barreira linguística</h2>
         <button className=' btn m-4 p-2 d-flex align-items-center'>Clique aqui</button>
         </div>
    <div class="cardes p-1 ">
    <div class=" cardss d-flex justify-content-between align-items-center mt-4 flex-lg-row d-flex mb-3 mb-lg-4">
        <div class="card1 mb-sm-3 m-2 mb-lg-4 d-block">
        <img src={refugee} alt='refugiados'/>
        </div>
        <div class="card2 mb-sm-3 m-2 d-none d-md-block mb-lg-4">
        <img src={refugee} alt='refugiados'/>
        </div>
        <div class="card3 mb-sm-3 m-2 d-none d-lg-block mb-lg-4 ">
        <img src={refugee} alt='refugiados'/>
        </div>
    </div>
    <div className='d-flex flex-column m-lg-5 m-3 words'>
      <h2>Conheça Rifuĝo</h2>
      <div>
      <h5>Rifuĝo significa Refúgio em Esperanto</h5>
      <span>Esperanto foi criado com a intenção de gerar<br/>
     maior entendimento entre os povos que quebraria a <br/>
     barreira linguística. <br/>
     O termo esperanto significa "aquele que tem esperança".<br/> </span>
      <span>Rifugô é um site com o foco na documentação <br/>
      dos refugiados e no combate da barreira linguística <br/>
      que atinge esse grupo minoritário.</span> <br/>
      <span>Com o design totalmente pensado nos refugiados,<br/>
      as cores são em homenagem a bandeira apresentada <br/>
      nas Olimpíadas.
       </span>
       </div>
       <div className='m-4 d-none d-xl-flex'>
         <a href='/aboutus' className='btn ' type='button'>Saiba mais</a>
       </div>
       <div className='photo d-none d-lg-flex'>
         <img src={logo} />
       </div>
    </div>
  </div>
  <footer>
<Footer/>
  </footer>
</div>
 )
}