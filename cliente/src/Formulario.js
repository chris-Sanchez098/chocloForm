import React, {useState} from 'react';
import { Formik, Form, Field, ErrorMessage} from 'formik';
import Axios from 'axios';

function Formulario () {
	const [formularioSend, cambiarFormularioEnviado] = useState(false);
	
	return (
		<Formik
			initialValues={{
				nombre: '',
				apellido: '',
				correo: ''
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
				const nombre = valores.nombre;
				const apellido = valores.apellido;
				const correo = valores.correo;
				
				Axios.post("http://localhost:3001/api/insert",  {nombre, apellido, correo}).then(() => { alert('Insertado')});

				resetForm();
				cambiarFormularioEnviado(true);
				setTimeout(() => {cambiarFormularioEnviado(false)}, 5000); /* mensaje desaparece luego de 5 segundos
				/** conexion con la base para recibir la info */
				/** 
				console.log(valores.nombre ) imprime el objecto con los valores nombre y correo 
				console.log(valores.correo )
				*/
				console.log(nombre);
				console.log(valores)
				console.log('Formulario Enviado')
			}}
		>
		{( {errors} /** importamos props de formik */ ) => (
					<Form className="formulario">
						<div>
							<label htmlFor="nombre">Nombre</label>
							<Field
								type="text" 
								id="nombre" 
								name="nombre" 
								placeholder="Christian" 
								/>
								<ErrorMessage name="nombre" component={() => 
									(<div className="error">{errors.nombre}</div>)}/>
								
						</div>
						<div>
							<label htmlFor="apellido">Apellido</label>
							<Field
								type="text" 
								id="apellido" 
								name="apellido" 
								placeholder="Jones" 
								/>
								<ErrorMessage name="apellido" component={() => 
									(<div className="error">{errors.apellido}</div>)}/>
						</div>
						<div>
							<label htmlFor="correo">Correo</label>
							<Field 
								type="email" 
								id="correo" 
								name="correo" 
								placeholder="correo@dominio.com" 
								/>
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
							<label htmlFor="correo">Sexo</label>
							<div>
								<label>
									<Field type="radio" name="sexo" value="hombre" /> Hombre
									</label>
									<label>
									<Field type="radio" name="sexo" value="mujer" /> Mujer
									</label>
									<label>
									<Field type="radio" name="sexo" value="otros" /> Otros
									</label>
							</div>
						</div>
						
						{/*
						<div>
							<Field name="mensaje" as="textarea" placeholder="Mensaje" />
						</div>
						*/}
						<button type="submit">Guardar</button>
						{formularioSend && <p className="exito" >Formulario enviado con exito!</p>}
					</Form>
		)}			
		</Formik>
	);
 }
 
export default Formulario;
