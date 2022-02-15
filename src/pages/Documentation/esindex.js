import React from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import logo2 from '../../assets/logo2.svg';
import './doc.css';

export default function Documentacion() {
 return (
   <div className='container-center'>
   <Header/>
   <div className="flex-column m-4 p-5">
        <h2  className="mb-3 mr-3 mt-4">Voltar para o português</h2>
        <a href='/documentation' type='button' className='btn'>click</a>
    </div>

    <div className=" doc">
        <div className=' ml-3 mt-3'>
        <h2 class=""> PROCEDIMIENTO DE LA SOLICITACIÓN DE ASILO</h2>

        <h3 className=""> Para registrar su solicitación de asilo</h3>
    
            <span className="">Llenar un <b>TERMO DE SOLICITACIÓN DE ASILO</b> en cualquier unidad de la Policía Federal</span> <br/>
            <span className="">
            Informar una <b>DIRECCIÓN (donde usted vive o puede ser encontrado), TELÉFONO y EMAIL</b> para contacto.
            </span>
        </div>
       
            <span>
                Es muy importante que usted mantenga sus contactos actualizados en la Policía Federal y en el <b>CONARE</b>,</span> <br/> <span className='ml-4'>
                para que usted pueda recibir todas las comunicaciones o notificaciones que sean necesarias.</span> <br/> <span> En caso de cambio, informe el <b>CONARE</b> a través del
                correo conare@mj.gov.br.
            </span>
            <h4 className=" ml-3  mt-3"> Es importante saber que:</h4>
            <span className=" mt-3">
            Para que el protocolo provisional siga siendo válido y pueda usted seguir trabajando de manera regular, </span> <br/> <span>
             es necesario renovarlo en la Policía Federal a cada 1 año. </span> <br/> <span>
                Los solicitantes que no renovaren el protocolo en el plazo están sujetos al archivo de su solicitud de asilo. </span> <br/> <span>
                Haga atención a la fecha de renovación anotada en su protocolo, y comparezca en la Policía Federal antes de la fecha de vencimiento.
            </span>
            <div class=" photo d-lg-flex d-none justify-content-end align-items-end">
               <img src={logo2}/>
            </div>
        </div>
    <div className="doc">
        <h3 className=" ml-3">Después de registrar su solicitación en la Policía Federal</h3>
        <div>
            <span className=" mt-3">
            Recibirá un <b>PROTOCOLO PROVISIONAL</b>, válido por 1 año y renovable hasta la decisión final del <b>CONARE</b> sobre su pedido de refugio.</span> <br/> <span>
                refugio. Este protocolo será su <b>DOCUMENTO DE IDENTIDAD</b> en Brasil.</span> <br/> <span>
                Brasil. Él sirve de prueba

                de su situación migratoria regular y de que usted está protegido y no puede ser devuelto para un país donde su vida esté en riesgo.</span> <br/> <span>
                Con este protocolo usted tendrá derecho a <b>CARTERA DE TRABAJO (CTPS)</b> y <b>REGISTRO DE PERSONA FÍSICA (CPF)</b> </span> <br/> <span>y acceder a todos los servicios públicos disponibles en Brasil.
            </span>
        </div>
        <div>
            <span className=" mt-3">
            Tendrá el derecho a ser entrevistado EN PERSONA por un funcionario del <b>CONARE</b>
            </span> <br/> <span> o de la Defensoría Pública de la Unión, del sexo que usted preferir, que le preguntará en detalles los motivos que llevaran a su decisión de dejar su país.
            </span> <br/> <span> La entrevista será realizada en un idioma que <b>USTED</b> comprenda y, si necesario, usted tiene <b>DERECHO A UN INTÉRPRETE</b>.
            </span>
        </div>
        <div>
            <h4 className=" ml-3 mt-4 d-flex justify-content-start"> Qué es el CPF y quien puede solicitarlo?</h4>
            <span className=" mt-3">
            El CPF (Cadastro de Pessoa Física) es uno de los principales documentos para ciudadanos residentes en Brasil,porque permite el acceso a facilidades y servicios.</span> <br/> <span>
                Como el Sistema Público de Salud (SUS), el registro en instituciones públicas de educación, la apertura de cuentas bancarias y otras operaciones financieras.
            </span>
        </div>
        <div className="d-none d-lg-block ml-3 mt-3">
            <h4 className=" d-flex justify-content-start ml-3 mt-4"> Cuáles son los documentos necesarios para solicitar el CPF?</h4>
            <span className="mt-3">Los mayores de 18 años deberán presentar el original o la copia autenticada de su documento de identificación.</span> <br/>
            <span className=" mt-3">  Los
                menores de 18 años deberán presentar el original o la copia autenticada de su documento de identificación </span> <br/> <span>
                y el documento de identificación de uno de los padres o responsable.</span>
        </div>
    </div>
    
    <div className='doc'>
        <h3 className=" d-flex justify-content-start ml-3"> Qué es CTPS e quién puede solicitarla?</h3>

        <span class="mt-3">
        La Cartera de Trabajo y Seguridad Social (CTPS) es el documento que comprueba toda la vida laboral </span> <br/> <span> del trabajador y autoriza a las empresas a contratarle como empleado.</span> <br/> <span>
             Este documento es obligatorio para el ejercicio de actividades profesionales </span> <br/> <span>
            y puede ser solicitado por cualquier persona mayor de 14 años, nacional o extranjera, con residencia regular en Brasil.
        </span>
        <h4 className=" d-flex justify-content-start ml-3 mt-3 ">Dónde puedo solicitar la CTPS?</h4>
        <span className=" mt-3">
        La persona interesada en sacar o renovar la Cartera
            de Trabajo y Seguridad Social deberá dirigirse a la Superintendencia Regional del Trabajo y Empleo (SRTE) </span> <br/> <span>
           o a la Gerencia Regional más cercana a su residencia, portando todos los documentos necesarios. 
           </span> <br/> <span>Informaciones sobre la ubicación de los puestos de atendimiento pueden ser encontradas por teléfono 158 o en la Central de Atendimiento “Alô Trabalho”.
        </span>
        <h4 class=" d-flex justify-content-start mt-3 ml-3">Cuáles los documentos necesarios para la CTPS?</h4>
        <ul>
                <li className="ml-3 mt-3">
                    Dos fotos 3cmx4cm, con fondo blanco, coloridas o en blanco y negro, iguales y recientes;
                </li>
                <li className=" ml-3 mt-3">
                    Protocolo Provisional emitido por la Policía Federal original con copia;
                </li>
            </ul>
        </div>
        <div className='doc'>
        <h3 className=" d-flex justify-content-start ml-3">Si su pedido de asilo fue negado</h3>

        <div>
            <span className="">
            Presentar un RECURSO PARA EL Ministro de La Justicia
                en el plazo de <b>15 DÍAS</b> contados a partir del recibimiento de la notificación.</span> <br/> <span>
                El pedido de revisión de la decisión del <b>CONARE</b> debe ser fundamentado, o sea, debe indicar y explicar en detalles las razones por las cuales usted no está de acuerdo con la decisión </span> <br/> <span>
                y si el problema de la decisión está en la interpretación de los hechos o aplicación de las reglas al caso.
            </span> <br/>
            <span className="">
            Puede usted ser ASISTIDO POR UN ABOGADO de la Defensoría Pública de la Unión o de las organizaciones socias del ACNUR en el momento de hacer su RECURSO. </span> <br/> <span>
                Para tanto, deberá usted buscar una de estas organizaciones tan pronto cuanto reciba la notificación sobre la decisión </span> <br/> <span>
                porque el recurso debe ser entregue a la Policía Federal en el plazo máximo de 15 días del recibimiento de la notificación; 
            </span> <br/>
            <span className="">
            Caso la <b>la DECISIÓN DEL MINISTRO DE LA JUSTICIA</b> JUSTICIA también
                resulte negativa, significa que el proceso administrativo de refugio ha terminado </span> <br/> <span> y que usted estará sujeto a la ley de extranjeros vigente en Brasil.</span> <br/> <span>
                En este caso, debe usted buscar la Defensoría Pública de la Unión para obtener las orientaciones sobre las medidas adecuadas.
            </span>
        </div>
        </div>
        <footer>
          <Footer/>
           </footer>
   
   </div>
 );
}