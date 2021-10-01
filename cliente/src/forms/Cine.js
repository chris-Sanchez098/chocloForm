import React, {useState} from 'react';
import { Formik, Form, Field, ErrorMessage} from 'formik';
import {Link} from 'react-router-dom';
import Axios from 'axios';


function Cine () {
	const [formularioSend, cambiarFormularioEnviado] = useState(false);
	
	return (
		<Formik
			initialValues={{
				genero_cine: '',
				num_peliculas: '',
				horario_peliculas: '',
				lugar_cine: '',
				dia_cine: '',
				duracion_cine: '',
				mecato: ''
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
				const genero_cine = valores.genero_cine;
				const num_peliculas = valores.num_peliculas;
				const horario_peliculas = valores.horario_peliculas;
				const lugar_cine = valores.lugar_cine;
				const dia_cine = valores.dia_cine;
				const duracion_cine = valores.duracion_cine;
				const mecato = valores.mecato;
				
				Axios.post("http://localhost:Papas001/api/insert/cine",  {genero_cine, num_peliculas, horario_peliculas, lugar_cine, dia_cine, duracion_cine, mecato}
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
                          <label htmlFor="genero_cine">Cual es tu genero cinematografico favorito?</label>
                          <Field
                              as="select"
                              id="genero_cine"
                              name="genero_cine"
                          //placeholder="Christian" 
                          >
                              <option value="Accion">Accion</option>
                              <option value="Comedia">Comedia</option>
                              <option value="Terror">Terror</option>
                              <option value="Drama">Drama</option>
                              <option value="Ciencia Ficcion">Ciencia Ficcion</option>

                          </Field>
                          <ErrorMessage name="nombre" component={() =>
                              (<div className="error">{errors.nombre}</div>)} />
  
                      </div>
					  <div>
						<label htmlFor="num_peliculas">Cuantas peliculas quieres ver?</label>
						<div>
								<label>
								<Field type="radio" name="num_peliculas" value="4" /> 4 hrs
								</label>
								<label>
								<Field type="radio" name="num_peliculas" value="5" /> 5 hrs
								</label>
								<label>
								<Field type="radio" name="num_peliculas" value="6" /> 6 hrs
								</label>
						</div>
					</div>
					<div>
						<label htmlFor="horario_peliculas">A que horas prefieres ver las peliculas?</label>
						<div>
								<label>
								<Field type="radio" name="horario_peliculas" value="Mañana" /> Mañana 
								</label>
								<label>
								<Field type="radio" name="horario_peliculas" value="Tarde" /> Tarde 
								</label>
								<label>
								<Field type="radio" name="horario_peliculas" value="Noche" /> Noche 
								</label>
						</div>
					</div>
					<div>
                          <label htmlFor="lugar_cine">En que lugar prefieres ir a cine?</label>
                          <Field
                              as="select"
                              id="lugar_cine"
                              name="lugar_cine"
                          //placeholder="Christian" 
                          >
                              <option value="Teatro">Teatro</option>
                              <option value="Parque">Parque</option>
                              <option value="Autocine">Autocine</option>
						</Field>
						</div>

						<label htmlFor="dia_cine">Cual es tu día favorito de la semana para ir a cine?</label>
						<div>
								<label>
								<Field type="radio" name="dia_cine" value="Lunes" /> Lunes 
								</label>
								<label>
								<Field type="radio" name="dia_cine" value="Martes" /> Martes 
								</label>
								<label>
								<Field type="radio" name="dia_cine" value="Miercoles" /> Miercoles 
								</label>
								<label>
								<Field type="radio" name="dia_cine" value="Jueves" /> Jueves 
								</label>
								<label>
								<Field type="radio" name="dia_cine" value="Viernes" /> Viernes 
								</label>
								<label>
								<Field type="radio" name="dia_cine" value="Sabado" /> Sabado 
								</label>
								<label>
								<Field type="radio" name="dia_cine" value="Domingo" /> Domingo 
								</label>
						</div>
						<div>
						<label htmlFor="duracion_cine">Cuanto tiempo suelen durar tus peliculas favoritas?</label>
						<div>
								<label>
								<Field type="radio" name="duracion_cine" value="2" /> 2 hrs
								</label>
								<label>
								<Field type="radio" name="duracion_cine" value="3" /> 3 hrs
								</label>
								<label>
								<Field type="radio" name="duracion_cine" value="4" /> 4 hrs
								</label>
								<label>
								<Field type="radio" name="duracion_cine" value="5" /> 5 hrs
								</label>
						</div>
					</div>
					<div>
						<label htmlFor="mecato">Cual es tu mecato favorito?</label>
						<div>
								<label>
								<Field type="radio" name="mecato" value="Crispetas" /> Crispetas 
								</label>
								<label>
								<Field type="radio" name="mecato" value="Papas" /> Papas 
								</label>
								<label>
								<Field type="radio" name="mecato" value="Jugo" /> Jugo 
								</label>
								<label>
								<Field type="radio" name="mecato" value="Perro caliente" /> Perro caliente 
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
								<Link to="/salida">
									<button type="submit" >
										Finalizar
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
 
export default Cine;