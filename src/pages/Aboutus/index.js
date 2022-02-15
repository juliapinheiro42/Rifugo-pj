import React from 'react';
import Header from '../../components/Header';
import './about.css';
import logo from '../../assets/logo2.svg';
import Footer from '../../components/Footer';
import { BsGithub, BsLinkedin, BsArrowRepeat } from 'react-icons/bs';

export default function Aboutus() {
 return (
  <div className='container-center'>
  <Header/>
<div className="flex-column m-4 p-4">
       <h2 className="m-4 pt-4">Ajude na quebra de barreira linguística</h2>
       <button className=' btn m-4 p-2 d-flex align-items-center'>Clique aqui</button>
       </div> 
       <div className='h-100 pb-0 pb-md-4 about'> 
    <div className='d-flex flex-column m-3 prop'>
        <div className='pb-0 pb-md-4'>
        <h2 className='pb-0 pb-md-4'>Nosso propósito</h2>
        <h4>Para quem?</h4>
        <hr/>
        <span>Refugiados que não conseguem achar informações sobre como tirar a documentação no Brasil.</span>
        </div>
        <div className='pb-0 pb-md-5'>
            <h4>Por quê?</h4>
        <hr/>
        <span> Por falta de informação para os refugiados acerca de documentação, como por exemplo, o pedido de refúgio. <br/>
        Muitos refugiados não sabem como ou onde tirar esses documentos.
            Para isso criamos o rifugô. </span>
            </div>
            <div className='pb-0 pb-md-5'>
            <h4>Como?</h4>
        <hr/>
        <span> Rifugô foi o site que criamos para que a desinformação ou a barreira linguística não seja um problema para os refugiados.<br/>
         O site conta com APIs para geolocalização e tradução,
            também conta com tradutores voluntários para melhor comunicação. </span>
            </div>
            <div className='photo d-none d-lg-flex'>
               <img src={logo}/>
            </div>
    </div>
    </div>
   <div className='mor-div  p-3 pt-5 '>
       <h2 className='mb-5'>Conheça a nossa equipe</h2>
   <div className="pt-4 rowcard d-flex justify-content-between">
   <div className="outer-div">
                <div className="inner-div">
                    <div className="front">
                        <div className="front__bkg-photo"></div>
                        <div className="front__face-photo">
                        <img src={`https://github.com/juliapinheiro42.png`}/>
                        </div>
                        <div className="front__text">
                            <h3 className="front__text-header">Julia Pinheiro</h3>
                            <hr/>
                            <span className="text-muted">front-end developer</span>
                            <br/>
                            <span className="front__text-hover">
                    
                                Redes sociais
                                <BsArrowRepeat size={15} className='m-1'/>
                            </span>
                        </div>
                    </div>
                    <div className="back">
                        <a className='mr-2' href={`https://github.com/juliapinheiro42`}><BsGithub size={25}/></a>
                        <a href={`https://www.linkedin.com/in/julia-pinheiro-992a59180/`}><BsLinkedin size={25}/></a>
                    </div>

                </div>
            </div>

            <div className="outer-div">
                <div className="inner-div">
                    <div className="front">
                        <div className="front__bkg-photo"></div>
                        <div className="front__face-photo">
                        <img src={`https://github.com/LFC222.png`}/>
                        </div>
                        <div className="front__text">
                            <h3 className="front__text-header">Lucas Cavalcante</h3>
                            <hr/>
                            <span className="text-muted">back-end developer</span>
                            <br/>
                            <span className="front__text-hover">
                    
                                Redes sociais
                                <BsArrowRepeat size={15} className='m-1'/>
                            </span>
                        </div>
                    </div>
                    <div className="back">
                        <a className='mr-2' href={`https://github.com/LFC222`}><BsGithub size={25}/></a>
                        <a><BsLinkedin size={25}/></a>
                    </div>
                </div>
            </div>
            <div className="outer-div">
                <div className="inner-div">
                    <div className="front">
                        <div className="front__bkg-photo"></div>
                        <div className="front__face-photo">
                        <img src={`https://github.com/Adc1986.png`}/>
                        </div>
                        <div className="front__text">
                            <h3 className="front__text-header">Alice Danyelle</h3>
                            <hr/>
                            <span className="text-muted">Back-end developer</span>
                            <br/>
                            <span className="front__text-hover">
                    
                                Redes sociais
                                <BsArrowRepeat size={15} className='m-1'/>
                            </span>
                        </div>
                    </div>
                    <div className="back">
                        <a className='mr-2' href={`https://github.com/Adc1986`}><BsGithub size={25}/></a>
                        <a><BsLinkedin size={25}/></a>
                    </div>

                </div>
            </div>
                </div>
                </div>
<footer>
    <Footer/>
</footer>
</div>
 );
}