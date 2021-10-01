import React, {useState} from 'react';

import { Formik, Form, Field, ErrorMessage} from 'formik';
import Axios from 'axios';
import {Link} from 'react-router-dom';



function Carro () {
	const [formularioSend, cambiarFormularioEnviado] = useState(false);
	
	return (
		<Formik
			initialValues={{
				marca_favorita: '',
				tiene_carro: '',
				num_puertas: '',
				lugar_carro: '',
                dia_carro: '',
                marca_poseida: '',
                cambiar_carro: ''
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
				const marca_favorita = valores.marca_favorita;
				const tiene_carro = valores.tiene_carro;
				const num_puertas = valores.num_puertas;
				const lugar_carro = valores.lugar_carro;
				const dia_carro = valores.dia_carro;
				const marca_poseida = valores.marca_poseida;
				const cambiar_carro = valores.cambiar_carro;

				Axios.post("http://localhost:3001/api/insert/car",{marca_favorita, tiene_carro, num_puertas, lugar_carro, dia_carro, marca_poseida, cambiar_carro 
                }).then(() => { alert('Insertado')});

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
                          <label htmlFor="marca_favorita">Cual es tu marca de automovil favorita ?</label>
                          <Field
                              as="select"
                              id="marca_favorita"
                              name="marca_favorita"
                          //placeholder="Christian" 
                          >
                              <option value="Mazda">Mazda</option>
                              <option value="Renault">Renault</option>
                              <option value="Chevrolet">Chevrolet</option>
                              <option value="Hyundai">Hyundai</option>
                              <option value="Otra">Otra</option>

                          </Field>
                          <ErrorMessage name="nombre" component={() =>
                              (<div className="error">{errors.nombre}</div>)} />
  
                      </div>
						<div>
							<label htmlFor="tiene_carro">Tienes carro?</label>
                            <label>
                            <Field type="radio" name="tiene_carro" value="Si" /> Si
                            </label>
                            <label>
                            <Field type="radio" name="tiene_carro" value="No" /> No
                            </label>

								<ErrorMessage name="apellido" component={() => 
									(<div className="error">{errors.apellido}</div>)}/>
						</div>
                        <div>
                          <label htmlFor="num_puertas">De cuantas puertas es tu carro?</label>
                          <Field
                              as="select"
                              id="num_puertas"
                              name="num_puertas"
                          //placeholder="Christian" 
                          >
                              <option value="2">2</option>
                              <option value="4">4</option>
                              <option value="6">6</option>

                          </Field>
						</div>

						<div>
							<label htmlFor="lugar_carro">En que lugar te gustaría asistir a una exhibición de carros?</label>
							<div>
								<label>
									<Field type="radio" name="lugar_carro" value="Centro comercial" /> Centro comercial
									</label>
									<label>
									<Field type="radio" name="lugar_carro" value="Parque" /> Parque
									</label>
									<label>
									<Field type="radio" name="lugar_carro" value="Estadio" /> Estadio
									</label>
							</div>
						</div>

                        <div>
							<label htmlFor="dia_carro">que día podrías asistir a una exhibición de carros?</label>
							<div>
								<label>
									<Field type="radio" name="dia_carro" value="Lunes" /> Lunes
									</label>
									<label>
									<Field type="radio" name="dia_carro" value="Martes" /> Martes
									</label>
									<label>
									<Field type="radio" name="dia_carro" value="Miercoles" /> Miercoles
									</label>
                                    <label>
									<Field type="radio" name="dia_carro" value="Jueves" /> Jueves
									</label>
                                    <label>
									<Field type="radio" name="dia_carro" value="Viernes" /> Viernes
									</label>
                                    <label>
									<Field type="radio" name="dia_carro" value="Sabado" /> Sabado
									</label>
                                    <label>
									<Field type="radio" name="dia_carro" value="Domingo" /> Domingo
									</label>
							</div>
						</div>

                        <div>
                          <label htmlFor="marca_poseida">Que marca de automovil Tienes?</label>
                          <Field
                              as="select"
                              id="marca_poseida"
                              name="marca_poseida"
                          //placeholder="Christian" 
                          >
                              <option value="Mazda">Mazda</option>
                              <option value="Renault">Renault</option>
                              <option value="Chevrolet">Chevrolet</option>
                              <option value="Hyundai">Hyundai</option>
                              <option value="Otra">Otra</option>

                          </Field>
                          <ErrorMessage name="nombre" component={() =>
                              (<div className="error">{errors.nombre}</div>)} />
  
                        </div>
                        <div>
							<label htmlFor="cambiar_carro">Deseas cambiar tu carro?</label>
                            <label>
                            <Field type="radio" name="cambiar_carro" value="Si" /> Si
                            </label>
                            <label>
                            <Field type="radio" name="cambiar_carro" value="No" /> No
                            </label>

								<ErrorMessage name="apellido" component={() => 
									(<div className="error">{errors.apellido}</div>)}/>
						</div>
						
				
					<div className="containerCar">
						<div className="row">
							<div className="col">
								<button type="submit">Guardar</button>
							</div>
							<div className="col">

							</div>
							<div className="col">
								<Link to="/music">
									<button type="submit">
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
 
export default Carro;