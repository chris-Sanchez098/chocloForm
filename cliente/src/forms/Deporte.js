import React, {useState} from 'react';
import { Formik, Form, Field, ErrorMessage} from 'formik';
import Axios from 'axios';
import {Link} from 'react-router-dom';

function Deporte () {
	const [formularioSend, cambiarFormularioEnviado] = useState(false);
	
	return (
		<Formik
			initialValues={{
				deporte_favorito: '',
				horas_practica: '',
				malas_experiencia: '',
				rutina: '',
                lugar_deporte: ''

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
				const deporte_favorito = valores.deporte_favorito;
				const horas_practica = valores.horas_practica;
				const malas_experiencia = valores.malas_experiencia;
				const rutina = valores.rutina;
				const lugar_deporte = valores.lugar_deporte;
				
				Axios.post("http://localhost:3001/api/insert/sport",{deporte_favorito, horas_practica, malas_experiencia, rutina, lugar_deporte }
                ).then(() => { alert('Insertado')});

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
							<label htmlFor="deporte_favorito">Cual es tu deporte favorito?</label>
                            <label>
                            <Field type="radio" name="deporte_favorito" value="Futbol" /> Futbol
                            </label>
                            <label>
                            <Field type="radio" name="deporte_favorito" value="Baloncesto" /> Baloncesto
                            </label>
                            <label>
                            <Field type="radio" name="deporte_favorito" value="Natacion" /> Natacion
                            </label>
                            <label>
                            <Field type="radio" name="deporte_favorito" value="Atletismo" /> Atletismo
                            </label>
                            <label>
                            <Field type="radio" name="deporte_favorito" value="Ciclismo" /> Ciclismo
                            </label>
                            <label>
                            <Field type="radio" name="deporte_favorito" value="Otros" /> Otros
                            </label>

								<ErrorMessage name="apellido" component={() => 
									(<div className="error">{errors.apellido}</div>)}/>
						</div>
                        <div>
                          <label htmlFor="horas_practica">Cuantas horas al día haces ejercicio?</label>
                          <Field
                              as="select"
                              id="horas_practica"
                              name="horas_practica"
                          //placeholder="Christian" 
                          >
                              <option value="1">1</option>
                              <option value="2">2</option>
                              <option value="3">3</option>

                          </Field>
						</div>
                        <div>
                          <label htmlFor="horas_practica">Como describirías tu rutina de ejercicio?</label>
                          <Field
                              as="select"
                              id="rutina"
                              name="rutina"
                          //placeholder="Christian" 
                          >
                              <option value="Basica">Basica</option>
                              <option value="Intermedia">Intermedia</option>
                              <option value="Fuerte">Fuerte</option>

                          </Field>
						</div>
						
						<div>                       
                            <label htmlFor="malas_experiencia">Has tenido una mala experiencia haciendo deporte?</label>
							<Field name="malas_experiencia" as="select">
								<option value="Si">Si</option>
								<option value="No">No</option>
							</Field>
						</div>

                        <div>
							<label htmlFor="lugar_deporte">En que lugar practicas deporte?</label>
							<div>
								<label>
									<Field type="radio" name="lugar_deporte" value="Gimnasio" /> Gimnasio
									</label>
									<label>
									<Field type="radio" name="lugar_deporte" value="Parque" /> Parque
									</label>
									<label>
									<Field type="radio" name="lugar_deporte" value="Calle" /> Calle
									</label>
                                    <label>
									<Field type="radio" name="lugar_deporte" value="Cancha" /> Cancha
									</label>
                                    <label>
									<Field type="radio" name="lugar_deporte" value="Piscina" /> Piscina
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
                                <Link to="/cine">
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
 
export default Deporte;