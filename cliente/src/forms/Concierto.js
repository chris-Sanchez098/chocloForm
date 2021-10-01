import React, {useState} from 'react';
import { Formik, Form, Field, ErrorMessage} from 'formik';
import Axios from 'axios';
import {Link} from 'react-router-dom';

function Concierto () {
	const [formularioSend, cambiarFormularioEnviado] = useState(false);
	
	return (
		<Formik
			initialValues={{
				genero_concierto: '',
				horario_concierto: '',
				num_artistas: '',
				lugar_concierto: '',
				dia_concierto: '',
				duracion_concierto: ''


			}}

			validate={ (valores) => {
				let errores = {};

				// Validacion nombre
				if(!valores.nombre) {
					errores.nombre = 'Por favor ingresa un nombre';
				} else if(!/^[a-zA-ZÀ-ÿ\s]{1,40}$/.test(valores.nombre)) { /**verificamos que el nombre sea valido */
					errores.nombre = 'El nombre solo puede contener letras y espacios'
				}

				// Validacion apellido
				if(!valores.apellido) {
					errores.apellido = 'Por favor ingresa un apellido';
				} else if(!/^[a-zA-ZÀ-ÿ\s]{1,40}$/.test(valores.apellido)) { /**verificamos que el apellido sea valido */
					errores.apellido = 'El apellido solo puede contener letras y espacios'
				}
		
				// Validacion correo
				if(!valores.correo) {
					errores.correo = 'Por favor ingresa un correo';
				} else if(!/^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/.test(valores.correo)) { /**verificamos que el correo sea valido */
					errores.correo = 'El correo solo puede contener letras, numeros,puntos,guiones y un dominio valido'
				}

				return errores;
			}}

			onSubmit={(valores, {resetForm}) => { 
				/** en este metodo podemos acceder a todos los objectos */
				const genero_concierto = valores.genero_concierto;
				const horario_concierto = valores.horario_concierto;
				const num_artistas = valores.num_artistas;
				const lugar_concierto = valores.lugar_concierto;
				const dia_concierto = valores.dia_concierto;
				const duracion_concierto = valores.duracion_concierto;

				Axios.post("http://localhost:3001/api/insert/concert",  
                {genero_concierto, horario_concierto, num_artistas, lugar_concierto, dia_concierto, duracion_concierto}).then(() => { alert('Insertado')});

				resetForm();
				cambiarFormularioEnviado(true);
				setTimeout(() => {cambiarFormularioEnviado(false)}, 5000); /* mensaje desaparece luego de 5 segundos
				/** conexion con la base para recibir la info */
				/** 
				console.log(valores.nombre ) imprime el objecto con los valores nombre y correo 
				console.log(valores.correo )
				*/
				//console.log(nombre);
				//console.log(sexo);
				console.log(valores)
				console.log('Formulario Enviado')
			}}
		>
		{( {errors} /** importamos props de formik */ ) => (
					<Form className="formulario">
                      <div>
                          <label htmlFor="genero_concierto">Cual es tu genero musical favorito ?</label>
                          <Field
                              as="select"
                              id="genero_concierto"
                              name="genero_concierto"
                          //placeholder="Christian" 
                          >
                              <option value="Pop">Pop</option>
                              <option value="Reggaeton">Reggaeton</option>
                              <option value="Rock">Rock</option>
                              <option value="Vallenato">Vallenato</option>
                              <option value="Salsa">Salsa</option>

                          </Field>
                          <ErrorMessage name="nombre" component={() =>
                              (<div className="error">{errors.nombre}</div>)} />
  
                      </div>
						<label htmlFor="horario_concierto">En que horario prefieres asistir a un concierto?</label>
    					<div>
                                    <label>
                                    <Field type="radio" name="9:00 PM" value="9:00 PM" /> 1
                                    </label>
                                    <label>
                                        <Field type="radio" name="10:00 PM" value="10:00 PM" /> 2
                                    </label>
                                    <label>
                                        <Field type="radio" name="11:00 PM" value="11:00 PM" /> 3
                                    </label>
                                    <label>
                                        <Field type="radio" name="12:00 PM" value="12:00 PM" /> 4
                                    </label>
                                    <label>
                                        <Field type="radio" name="1:00 AM" value="1:00 AM" /> 5
                                    </label>

						</div>
						<div>
                        <label htmlFor="lugar_concierto">Cual es tu lugar favorito para un concierto?</label>
                        <Field
                            as="select"
                            id="lugar_concierto"
                            name="lugar_concierto"
                        //placeholder="Christian" 
                        >
                            <option value="Parque">Parque</option>
                            <option value="Estadio">Estadio</option>
                            <option value="Club">Club</option>

                        </Field>
							<ErrorMessage name="correo" component={() =>
								(<div className="error">{errors.correo}</div>)} />
						</div>

						{/*
						<div>
							<Field name="pais" as="select">
								<option value="Colombia">Colombia</option>
								<option value="Mexico">Mexico</option>
								<option value="Argentina">Argentina</option>
								<option value="Canada">Canada</option>
							</Field>
						</div>
						*/}
						
						<div>
							<label htmlFor="dia_concierto">Que día prefieres asistir a los conciertos?</label>
							<div>
									<label>
									<Field type="radio" name="dia_concierto" value="Jueves" /> Jueves
									</label>
									<label>
									<Field type="radio" name="dia_concierto" value="Viernes" /> Viernes
									</label>
									<label>
									<Field type="radio" name="dia_concierto" value="Sabado" /> Sabado
									</label>
									<label>
									<Field type="radio" name="dia_concierto" value="Domingo" /> Domingo
									</label>
							</div>
						</div>
						<div>
						<label htmlFor="duracion_concierto">Por lo general cuanto te quedas en los conciertos?</label>
						<div>
								<label>
								<Field type="radio" name="duracion_concierto" value="4" /> 4 hrs
								</label>
								<label>
								<Field type="radio" name="duracion_concierto" value="5" /> 5 hrs
								</label>
								<label>
								<Field type="radio" name="duracion_concierto" value="6" /> 6 hrs
								</label>
								<label>
								<Field type="radio" name="duracion_concierto" value="7" /> 7 hrs
								</label>
						</div>
					</div>
						
                    <div className="container">
                        <div className="row">
                            <div className="col">
                                <button type="submit">Guardar</button>
                            </div>
                            <div className="col">

                            </div>
                            <div className="col">
                                <Link to="/sport">
                                    <button type="submit" >
                                        Siguiente
                                    </button>
                                </Link>
                            </div>
                        </div>
                    </div>
						{formularioSend && <p className="exito" >Formulario enviado con exito!</p>}
					</Form>
		)}			
		</Formik>
	);
 }
 
export default Concierto;