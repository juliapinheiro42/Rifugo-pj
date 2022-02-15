import React from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import logo2 from '../../assets/logo2.svg';
import './duvidas.css';

export default function Preguntas() {
 return (
   <div className='container-center'>
   <Header/>
   <div className="flex-column m-4 p-5">
        <h2  className="mb-3 mr-3 mt-4">Voltar ao português</h2>
        <a type='button' href='/duvidas' className='btn'>click</a>
    </div>
     
    <div className=" doc">
        <div>
        <h2 class=" d-flex justify-content-start ml-3">PREGUNTAS FRECUENTES </h2>
        <h3 class=" d-flex justify-content-start text-align-center ml-3">Quiero convertirme en un buscador de refugiados</h3>
        <h5 class="ml-3 justify-content-start">1) No tengo ningún documento.¿Todavía puedo solicitar refugio?</h5>
            <span class="">                Sí. La ausencia de documentos no impide la presentación y recepción de la solicitud de reconocimiento de la condición de refugiado.</span> <br/>
            <span>
            Sin embargo, la ausencia de documentos hará que el análisis de la solicitud sea más complejo
            </span>
        </div>
        <h5 class="ml-3 justify-content-start">2)¿Necesito programar el servicio en la Policía Federal?</h5>
            <span class="">
            Cada Policía Federal tiene sus propias reglas de servicio. Por tanto, lo ideal es contactar con el Departamento de Policía Federal más cercano</span><br/> 
            <span>  y preguntar sobre la necesidad de concertar una cita.
            </span>
            <h5 className="ml-3 justify-content-start d-lg-block d-none"> 3) Tengo más de un documento de identificación. <br/>¿Cuál debo presentar al solicitar el reconocimiento de la condición de refugiado?</h5>
            <span class="">
            Siempre que tenga un pasaporte, utilícelo para solicitar refugio. </span> <br/> <span> Si el pasaporte no tiene datos de membresía, puede usar los documentos a continuación, en el siguiente orden:
                </span> <br/>  
                 <ul className="d-lg-block d-none">
                    <li className="d-lg-block d-none"> certificado de nacimiento;</li>
                    <li className=" d-lg-block d-none"> certificado de boda;</li>
                    <li className=" d-lg-block d-none">
                        certificado consular del país de nacionalidad; o
                        Justificación judicial.
                    </li>
                </ul>
                <span>
                En caso de duda, consulte el artículo 68 del Decreto N ° 9.199 / 1997.
                </span>
            <div class=" photo d-lg-flex d-none justify-content-end align-items-end">
               <img src={logo2}/>
            </div>
        </div>
    <div class="doc">
        <h3 class=" d-flex justify-content-start ml-3 ">Soy un buscador de refugiados. ¿Y ahora?</h3>
        <h5 class="ml-3 justify-content-start">1)¿Qué es el Protocolo de Refugio? ¿Cuál es su vigencia y cómo renovarla?</h5>
            <span class="">
            Como solicitante del reconocimiento de la condición de refugiado, el inmigrante cuenta con el Protocolo
            </span> <br/> <span>de Refugiado, que le sirve de identidad y da fe de su condición migratoria regular en el país, siempre que sea válido.  </span> <br/> <span>

            Por lo tanto, es fundamental que este Protocolo permanezca en vigor mientras se encuentra en curso el proceso de solicitud de reconocimiento de la condición de refugiado.
            </span> <br/> <span>El Protocolo tiene una vigencia de un año y debe renovarse en cualquier unidad de la Policía Federal. </span> <br/> <span> 
            En otras palabras: el Protocolo de Refugiados debe renovarse todos los años mientras el proceso es analizado por el Comité Nacional de Refugiados (Conare).
            </span> <br/> <span className="ml-3 justify-content-start d-lg-block d-none">
            Para renovar su protocolo, verifique su estado:

            </span> <br/> <span className="ml-3 justify-content-start d-lg-block d-none">a) a) si su Protocolo de Refugio aún no es de Sisconare, debe registrarse en Sisconare y completar el formulario de registro.
            </span> <br/> <span className="ml-3 justify-content-start d-lg-block d-none"> Al finalizar se generará un número de control que deberás presentar en una unidad de la Policía Federal (PF) para finalizar la renovación.

            </span> <br/> <span className="ml-3 justify-content-start d-lg-block d-none">b) si tu Protocolo de Refugio ya es de Sisconare, solo dirígete a la Policía Federal para renovarlo (consulta la necesidad de cita con la Policía Federal).

            </span>
        <div>
        <h5 className="ml-3 justify-content-start d-lg-block d-none">2)¿Cómo obtengo el Documento Provisional de Registro Nacional de Migración (DPRNM), <br/> previsto en el Decreto N ° 9.277 / 2018? </h5>
            <span className="ml-3 justify-content-start d-lg-block d-none">
            El Documento Provisional de Registro Nacional de Migración (DPRNM) será tramitado por la Policía Federal en el momento</span><br />
            <span> en que el solicitante solicite asilo por primera vez, o cuando se renueve el Protocolo de Refugio. </span><br />
            <span className="ml-3 justify-content-start d-lg-block d-none">
            En otras palabras: el solicitante no necesita tomar ninguna medida adicional: si quiere solicitar refugio por primera vez, debe registrarse en Sisconare</span> <br/> <span>
            y completar el formulario de solicitud de reconocimiento de su condición de refugiado; </span> <br/>
                 <span className="ml-3 justify-content-start d-lg-block d-none">
                 si ya es solicitante, debe seguir las pautas de renovación de acuerdo con su caso (registrar o simplemente programar asistencia en la Policía Federal).
                </span>

                <h5 className="ml-3 justify-content-start d-lg-block d-none">3)¿Cuál es la diferencia entre el Protocolo de Refugio <br/> y el Documento Provisional del Registro Nacional de Migraciones (DPRNM)?</h5>
               <span>  El Protocolo de Refugiado es el documento que el solicitante recibe inmediatamente al solicitar el reconocimiento de la condición de refugiado </span> <br/>
                 <span>
                 y será utilizado como documento de identidad hasta la recepción del Documento Provisional de Registro Nacional de Migración (DPRNM).
            </span>
            <br/>
                 <span className="ml-3 justify-content-start d-lg-block d-none">El DPRNM, previsto en el Decreto N ° 9.277 / 2018, se convirtió en el documento de identificación de los solicitantes de asilo, en sustitución del Protocolo de Refugiados.</span>

                  <br/>
                 <span className="ml-3 justify-content-start d-lg-block d-none"> RECUERDE: el DPRNM tiene una vigencia de un año y debe ser renovado anualmente por la Policía Federal.</span>
        </div>
        </div>
    
    <div className='doc pt-5'>
            <h3 class=" d-flex justify-content-start ml-3 ">Entrevista de elegibilidad</h3>
            <h5 class="ml-3 justify-content-start">¿Puedo elegir el método de realización de la entrevista (presencial u online)?</h5>
            <span>
            No, la decisión sobre cómo realizar la entrevista la toma la Coordinación General de Conare.</span> <br/> <span> 
            Sin embargo, esta decisión se basa en los datos de contacto del solicitante, en particular, la dirección del solicitante.</span> <br/> <span> 
            Por lo tanto, es muy importante asegurarse de que sus datos estén siempre actualizados.

            </span> <br/> <span>  Para actualizar sus datos de contacto en Sisconare, acceda al sistema y, luego de iniciar sesión, seleccione la opción “Actualizar mis datos”. <br/></span>
        
                <h5 class="ml-3 justify-content-start">2)¿Puedo elegir el lugar de la entrevista?</h5>
                <span>
                No, la decisión sobre el lugar de la entrevista la toma la Coordinación General de Conare.
                </span> <br/> <span>  Sin embargo, esta decisión se basa en los datos de contacto del solicitante, en particular, la dirección del solicitante.
                </span> <br/> <span> Por lo tanto, es muy importante asegurarse de que sus datos estén siempre actualizados.

                </span> <br/> <span> Para actualizar sus datos de contacto en Sisconare, acceda al sistema y, luego de iniciar sesión, seleccione la opción “Actualizar mis datos”.
           </span>
           <h5 className="ml-3 justify-content-start d-lg-block d-none">3) Si mi entrevista está demorando demasiado, ¿cómo puedo solicitar más urgencia?</h5>
                <span className="ml-3 justify-content-start d-lg-block d-none">
                Las entrevistas siguen, por regla general, un orden cronológico; sin embargo, uno de los criterios de priorización es el mantenimiento de datos de registro actualizados.
                </span> <br/> <span className="ml-3 justify-content-start d-lg-block d-none"> De esta forma, asegúrese de que sus datos estén siempre actualizados.
                </span> <br/> <span className="ml-3 justify-content-start d-lg-block d-none">  Si hay un cambio de teléfono, correo electrónico o dirección, actualice sus datos en Sisconare, en el menú "Actualizar mis datos".

                </span> <br/> <span className="ml-3 justify-content-start d-lg-block d-none">Recuerde que, mientras se analiza su solicitud de asilo, su situación migratoria en Brasil es regular, ya que tiene un permiso </span> <br/> 
                <span className="ml-3 justify-content-start d-lg-block d-none"> 
                de residencia provisional hasta la decisión final de la Conare (art. 156, §3 del Decreto No. 9.199 / 2017 y art. 21 de la Ley N ° 9.474, de 1997).
           </span>

    </div>
   
        <div className='doc'>
        <h3 class=" d-flex justify-content-start ml-3">Mercado de trabajo</h3>
        <h5 class="ml-3 justify-content-start">1) ¿Cómo acceder a la Tarjeta de trabajo digital?</h5>
            <span >
            Se puede acceder a la Tarjeta de trabajo digital por computadora o instalar en teléfonos inteligentes </span> <br/> 
                <span>  con sistema operativo Android e iOS y funcionará como una extensión del documento físico.</span> <br/> 
                <span> 
                Consulte el sitio web del Ministerio de Economía para obtener pautas sobre cómo acceder a la Tarjeta de Trabajo Digital.
            </span> 
            <h5 class="ml-3 justify-content-start">2) Soy empleador y deseo contratar formalmente a un solicitante para el reconocimiento de la condición de refugiado.</h5>
            <span>
            Los solicitantes de reconocimiento de la condición de refugiado se encuentran en un estado migratorio regular en Brasil y, por lo tanto, pueden ser contratados formalmente.</span> <br/> 
                <span> 
                El sustento legal para dicha autorización lo brinda la  Ley No. 9.474, de 22 de julio de 1997.
            </span>
            </div>
        <footer>
          <Footer/>
           </footer>
   
   </div>
 )
}