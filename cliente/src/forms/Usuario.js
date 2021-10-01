import React, {useState} from 'react';
import { Formik, Form, Field, ErrorMessage} from 'formik';
import Axios from 'axios';
import {Link} from "react-router-dom";
import { Breadcrumb } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';

function Usuario () {

	const [formularioSend, cambiarFormularioEnviado] = useState(false);
	
	return (
		<Formik
			initialValues={{
				nombre: '',
				apellido: '',
				correo: '',
				sexo: '',
				// campos carro
				marca_favorita: '',
				tiene_carro: '',
				num_puertas: '',
				lugar_carro: '',
                dia_carro: '',
                marca_poseida: '',
                cambiar_carro: '',

				genero_musica: '',
                horas_musica:'',
                razon_musica: '',
                bailas: '',

				//concierto
				genero_concierto: '',
				horario_concierto: '',
				num_artista: '',
				lugar_concierto: '',
				dia_concierto: '',
				duracion_concierto: '',

				//Deporte
				deporte_favorito: '',
				horas_practica: '',
				malas_experiencia: '',
				rutina: '',
				lugar_deporte: '',

				//cine
				genero_cine: '',
				num_peliculas: '',
				horario_pelicula: '',
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
				const nombre = valores.nombre;
				const apellido = valores.apellido;
				const correo = valores.correo;
				const sexo = valores.sexo;

				const marca_favorita = valores.marca_favorita;
				const tiene_carro = valores.tiene_carro;
				const num_puertas = valores.num_puertas;
				const lugar_carro = valores.lugar_carro;
				const dia_carro = valores.dia_carro;
				const marca_poseida = valores.marca_poseida;
				const cambiar_carro = valores.cambiar_carro;

				const genero_musica = valores.genero_musica;
                const horas_musica = valores.horas_musica;
                const razon_musica = valores.razon_musica;
                const bailas = valores.bailas;

				//concierto
				const genero_concierto = valores.genero_concierto;
				const horario_concierto = valores.horario_concierto;
				const num_artista = valores.num_artista;
				const lugar_concierto = valores.lugar_concierto;
				const dia_concierto = valores.dia_concierto;
				const duracion_concierto = valores.duracion_concierto;

				//Deporte
				const deporte_favorito = valores.deporte_favorito;
				const horas_practica = valores.horas_practica;
				const malas_experiencia = valores.malas_experiencia;
				const rutina = valores.rutina;
				const lugar_deporte = valores.lugar_deporte;

				//cine
				const genero_cine = valores.genero_cine;
				const num_peliculas = valores.num_peliculas;
				const horario_pelicula = valores.horario_pelicula;
				const lugar_cine = valores.lugar_cine;
				const dia_cine = valores.dia_cine;
				const duracion_cine = valores.duracion_cine;
				const mecato = valores.mecato;
				
				Axios.post("http://localhost:3001/api/insert", 
				{nombre, apellido, correo,sexo, marca_favorita, tiene_carro, num_puertas, lugar_carro, dia_carro, marca_poseida, 
				cambiar_carro, genero_musica,horas_musica,razon_musica,bailas,
				genero_concierto, horario_concierto, num_artista, lugar_concierto, dia_concierto, duracion_concierto,
				deporte_favorito, horas_practica, malas_experiencia, rutina, lugar_deporte,
				genero_cine, num_peliculas, horario_pelicula,lugar_cine,dia_cine,duracion_cine,mecato}
				).then(() => { alert('Insertado')});
				
				resetForm();
				cambiarFormularioEnviado(true);
				setTimeout(() => {cambiarFormularioEnviado(false)}, 5000); /* mensaje desaparece luego de 5 segundos */
			
				console.log(nombre);
				console.log(valores)
				console.log(horas_musica)
				console.log('Formulario Enviado')
			}}
		>
		{( {errors} /** importamos props de formik */ ) => (
					<Form className="formulario">
					<div className="usuario">
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
						<div>
							<label htmlFor="sexo">Sexo</label>
							<div>
								<label>
									<Field type="radio" name="sexo" value="Masculino" /> Masculino
									</label>
									<label>
									<Field type="radio" name="sexo" value="Femenino" /> Femenino
									</label>
									<label>
									<Field type="radio" name="sexo" value="Otros" /> Otros
									</label>
							</div>
						</div>
					</div>

					<div classname="carro">
						<div>
							<label htmlFor="marca_favorita">¿Cual es tu marca de automovil favorita?</label>
							<Field
								as="select"
								id="marca_favorita"
								name="marca_favorita"
							
							>
								<option value="Selecione">Selecione</option>
								<option value="Mazda">Mazda</option>
								<option value="Renault">Renault</option>
								<option value="Chevrolet">Chevrolet</option>
								<option value="Hyundai">Hyundai</option>
								<option value="Otra">Otra</option>

							</Field>
							<ErrorMessage name="nombre" component={() =>
								(<div className="error">{errors.nombre}</div>)} />
						</div>
						<div></div>
						<div>
							<label htmlFor="tiene_carro"><p>¿Tienes carro?</p></label>
							<Breadcrumb>
								<label>
									<Field type="radio" name="tiene_carro" value="Si" /> Si &nbsp;&nbsp;
								</label>
								<label>
									<Field type="radio" name="tiene_carro" value="No" /> No &nbsp;&nbsp;
								</label>
							</Breadcrumb>
						</div>
						<div>
							<label htmlFor="num_puertas">¿De cuantas puertas es tu carro?</label>
							<Field
								as="select"
								id="num_puertas"
								name="num_puertas"
							//placeholder="Christian" 
							>
								<option value="Selecione">Selecione</option>
								<option value="2">2</option>
								<option value="4">4</option>
								<option value="6">6</option>

							</Field>
						</div>

						<div>
							<label htmlFor="lugar_carro">¿En que lugar te gustaría asistir a una exhibición de carros?</label>
							<div>
								<Breadcrumb>
									<label>
										<Field type="radio" name="lugar_carro" value="Centro comercial" /> Centro comercial &nbsp;&nbsp;&nbsp;
									</label>
									<label>
										<Field type="radio" name="lugar_carro" value="Parque" /> Parque &nbsp;&nbsp;&nbsp;
									</label>
									<label>
										<Field type="radio" name="lugar_carro" value="Estadio" /> Estadio
									</label>
								</Breadcrumb>
							</div>
						</div>

						<div>
							<label htmlFor="dia_carro">¿Que día podrías asistir a una exhibición de carros?</label>
							<div>
								<Breadcrumb>
									<label>
										<Field type="radio" name="dia_carro" value="Lunes" /> Lunes &nbsp;&nbsp;
									</label>
									<label>
										<Field type="radio" name="dia_carro" value="Martes" /> Martes &nbsp;&nbsp;
									</label>
									<label>
										<Field type="radio" name="dia_carro" value="Miercoles" /> Miercoles &nbsp;&nbsp;
									</label>
									<label>
										<Field type="radio" name="dia_carro" value="Jueves" /> Jueves &nbsp;&nbsp;
									</label>
									<label>
										<Field type="radio" name="dia_carro" value="Viernes" /> Viernes &nbsp;&nbsp;
									</label>
									<label>
										<Field type="radio" name="dia_carro" value="Sabado" /> Sabado &nbsp;&nbsp;
									</label>
									<label>
										<Field type="radio" name="dia_carro" value="Domingo" /> Domingo
									</label>
								</Breadcrumb>
							</div>
						</div>

						<div>
							<label htmlFor="marca_poseida">¿Que marca de automovil Tienes?</label>
							<Field
								as="select"
								id="marca_poseida"
								name="marca_poseida"
							//placeholder="Christian" 
							>
								<option value="Selecione">Selecione</option>
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
							<label htmlFor="cambiar_carro">¿Deseas cambiar tu carro?</label>
							<Breadcrumb>
								<label>
									<Field type="radio" name="cambiar_carro" value="Si" /> Si &nbsp;&nbsp;
								</label>
								<label>
									<Field type="radio" name="cambiar_carro" value="No" /> No &nbsp;&nbsp;
								</label>
							</Breadcrumb>

							<ErrorMessage name="apellido" component={() =>
								(<div className="error">{errors.apellido}</div>)} />
						</div>

					</div>

					<div classname="musica">
						<div>
							<label htmlFor="genero_musica">¿Cual es tu genero musical favorito?</label>
							<Field
								as="select"
								id="genero_musica"
								name="genero_musica"
						
							>
								<option value="Selecione">Selecione</option>
								<option value="Pop">Pop</option>
								<option value="Reggaeton">Reggaeton</option>
								<option value="Rock">Rock</option>
								<option value="Vallenato">Vallenato</option>
								<option value="Salsa">Salsa</option>

							</Field>

						</div>
						<div>

							<div>
								<label htmlFor="horas_musica">¿Cuantas horas escuchas musica al día?</label>
								<div>

									<Breadcrumb>
										<label>
											<Field type="radio" name="horas_musica" value="1" /> 1 &nbsp;&nbsp;
										</label>
										<label>
											<Field type="radio" name="horas_musica" value="2" /> 2 &nbsp;&nbsp;
										</label>
										<label>
											<Field type="radio" name="horas_musica" value="3" /> 3 &nbsp;&nbsp;
										</label>
										<label>
											<Field type="radio" name="horas_musica" value="4" /> 4 &nbsp;&nbsp;
										</label>
										<label>
											<Field type="radio" name="horas_musica" value="5" /> 5 &nbsp;&nbsp;
										</label>
										<label>
											<Field type="radio" name="horas_musica" value="6" /> 6
										</label>
									</Breadcrumb>

								</div>
							</div>
						</div>
						<div>
							<label htmlFor="razon_musica">¿Por que razón escuchas música?</label>
							<Field
								as="select"
								id="razon_musica"
								name="razon_musica"
							
							>
								<option value="Selecione">Selecione</option>
								<option value="Para pasar el tiempo">Para pasar el tiempo</option>
								<option value="Para motivarse">Para motivarse</option>
								<option value="Para reducir el estres">Para reducir el estres</option>
								<option value="Para hacer ejercicio">Para hacer ejercicio</option>
							</Field>
						</div>
						<div>
							<label htmlFor="bailas">¿Bailas?</label>
							<Field
								as="select"
								id="bailas"
								name="bailas"
							
							>
								<option value="Selecione">Selecione</option>
								<option value="si">Si</option>
								<option value="no">No</option>
							</Field>
						</div>
					</div>

					<div classname="concierto">
						<div>
							<label htmlFor="genero_concierto">¿Que genero musical prefieres para el concierto?</label>
							<Field
								as="select"
								id="genero_concierto"
								name="genero_concierto"
							
							>
								<option value="Selecione">Selecione</option>
								<option value="Pop">Pop</option>
								<option value="Reggaeton">Reggaeton</option>
								<option value="Rock">Rock</option>
								<option value="Vallenato">Vallenato</option>
								<option value="Salsa">Salsa</option>

							</Field>
							<ErrorMessage name="nombre" component={() =>
								(<div className="error">{errors.nombre}</div>)} />

						</div>
						<label htmlFor="horario_concierto">¿En que horario prefieres asistir a un concierto?</label>
						<div>
							<Breadcrumb>
								<label>
									<Field type="radio" name="horario_concierto" value="9:00 PM" /> 9:00 PM &nbsp;&nbsp;
								</label>
								<label>
									<Field type="radio" name="horario_concierto" value="10:00 PM" /> 10:00 PM &nbsp;&nbsp;
								</label>
								<label>
									<Field type="radio" name="horario_concierto" value="11:00 PM" /> 11:00 PM &nbsp;&nbsp;
								</label>
								<label>
									<Field type="radio" name="horario_concierto" value="12:00 PM" /> 12:00 PM &nbsp;&nbsp;
								</label>
								<label>
									<Field type="radio" name="horario_concierto" value="1:00 AM" /> 1:00 AM &nbsp;&nbsp;
								</label>
							</Breadcrumb>
						</div>

						<div>
							<label htmlFor="num_artista">¿Cuantos artistas desearias que se presenten?</label>
							<div>
								<Breadcrumb>
									<label>
										<Field type="radio" name="num_artista" value="3" /> 3  &nbsp;&nbsp;
									</label>
									<label>
										<Field type="radio" name="num_artista" value="4" /> 4  &nbsp;&nbsp;
									</label>
									<label>
										<Field type="radio" name="num_artista" value="5" /> 5  &nbsp;&nbsp;
									</label>
									<label>
										<Field type="radio" name="num_artista" value="6" /> 6  &nbsp;&nbsp;
									</label>
									<label>
										<Field type="radio" name="num_artista" value="7" /> 7  &nbsp;&nbsp;
									</label>
									<label>
										<Field type="radio" name="num_artista" value="8" /> 8  &nbsp;&nbsp;
									</label>
								</Breadcrumb>
							</div>
						</div>

						<div>
							<label htmlFor="lugar_concierto">¿Cual es tu lugar favorito para un concierto?</label>
							<Field
								as="select"
								id="lugar_concierto"
								name="lugar_concierto"
							>
								<option value="Selecione">Selecione</option>
								<option value="Parque">Parque</option>
								<option value="Estadio">Estadio</option>
								<option value="Club">Club</option>

							</Field>
							<ErrorMessage name="correo" component={() =>
								(<div className="error">{errors.correo}</div>)} />
						</div>

						<div>
							<label htmlFor="dia_concierto">¿Que día prefieres asistir a los conciertos?</label>
							<div>
								<Breadcrumb>
									<label>
										<Field type="radio" name="dia_concierto" value="Jueves" /> Jueves  &nbsp;&nbsp;
									</label>
									<label>
										<Field type="radio" name="dia_concierto" value="Viernes" /> Viernes  &nbsp;&nbsp;
									</label>
									<label>
										<Field type="radio" name="dia_concierto" value="Sabado" /> Sabado  &nbsp;&nbsp;
									</label>
									<label>
										<Field type="radio" name="dia_concierto" value="Domingo" /> Domingo  &nbsp;&nbsp;
									</label>
								</Breadcrumb>
							</div>
						</div>
						<div>
							<label htmlFor="duracion_concierto">Por lo general ¿cuánto te quedas en los conciertos?</label>
							<div>
								<Breadcrumb>
									<label>
										<Field type="radio" name="duracion_concierto" value="4" /> 4 hrs &nbsp;&nbsp;
									</label>
									<label>
										<Field type="radio" name="duracion_concierto" value="5" /> 5 hrs &nbsp;&nbsp;
									</label>
									<label>
										<Field type="radio" name="duracion_concierto" value="6" /> 6 hrs &nbsp;&nbsp;
									</label>
									<label>
										<Field type="radio" name="duracion_concierto" value="7" /> 7 hrs &nbsp;&nbsp;
									</label>
								</Breadcrumb>
							</div>
						</div>
					</div>
					<div>
						<div>
							<label htmlFor="deporte_favorito">¿Cual es tu deporte favorito?</label>
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
						</div>
						<div>
							<label htmlFor="horas_practica">¿Cuantas horas al día haces ejercicio?</label>
							<Field
								as="select"
								id="horas_practica"
								name="horas_practica"
							>
								<option value="Selecione">Selecione</option>
								<option value="1">1</option>
								<option value="2">2</option>
								<option value="3">3</option>

							</Field>
						</div>
						<div>
							<label htmlFor="rutina">¿Como describirías tu rutina de ejercicio?</label>
							<Field
								as="select"
								id="rutina"
								name="rutina"
							>
								<option value="Selecione">Selecione</option>
								<option value="Basica">Basica</option>
								<option value="Intermedia">Intermedia</option>
								<option value="Fuerte">Fuerte</option>

							</Field>
						</div>

						<div>
							<label htmlFor="malas_experiencia">¿Has tenido una mala experiencia haciendo deporte?</label>
							<Field name="malas_experiencia" as="select">
								<option value="Selecione">Selecione</option>
								<option value="Si">Si</option>
								<option value="No">No</option>
							</Field>
						</div>

						<div>
							<label htmlFor="lugar_deporte">¿En que lugar practicas deporte?</label>
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
					</div>

					<div classname="cine">
						<div>
							<label htmlFor="genero_cine">¿Cuál es tu genero cinematografico favorito?</label>
							<Field
								as="select"
								id="genero_cine"
								name="genero_cine"
							>
								<option value="Selecione">Selecione</option>
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
							<label htmlFor="num_peliculas">¿Cuántas peliculas quieres ver?</label>
							<div>
								<Breadcrumb>
									<label>
										<Field type="radio" name="num_peliculas" value="1" /> 1 &nbsp;&nbsp;
									</label>
									<label>
										<Field type="radio" name="num_peliculas" value="2" /> 2 &nbsp;&nbsp;
									</label>
									<label>
										<Field type="radio" name="num_peliculas" value="3" /> 3 &nbsp;&nbsp;
									</label>
								</Breadcrumb>
							</div>
						</div>
						<div>
							<label htmlFor="horario_pelicula">¿A que horas prefieres ver las peliculas?</label>
							<div>
								<Breadcrumb>
									<label>
										<Field type="radio" name="horario_pelicula" value="Mañana" /> Mañana &nbsp;&nbsp;
									</label>
									<label>
										<Field type="radio" name="horario_pelicula" value="Tarde" /> Tarde &nbsp;&nbsp;
									</label>
									<label>
										<Field type="radio" name="horario_pelicula" value="Noche" /> Noche &nbsp;&nbsp;
									</label>
								</Breadcrumb>
							</div>
						</div>
						<div>
							<label htmlFor="lugar_cine">¿En que lugar prefieres ir a cine?</label>
							<Field
								as="select"
								id="lugar_cine"
								name="lugar_cine"
							
							>
								<option value="Selecione">Selecione</option>
								<option value="Teatro">Teatro</option>
								<option value="Parque">Parque</option>
								<option value="Autocine">Autocine</option>
							</Field>
						</div>

						<label htmlFor="dia_cine">¿Cual es tu día favorito de la semana para ir a cine?</label>
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
							<label htmlFor="duracion_cine">¿Por cuanto tiempo te gustaría ver películas?</label>
							<div>
								<Breadcrumb>
									<label>
										<Field type="radio" name="duracion_cine" value="2" /> 2 hrs &nbsp;&nbsp;
									</label>
									<label>
										<Field type="radio" name="duracion_cine" value="3" /> 3 hrs &nbsp;&nbsp;
									</label>
									<label>
										<Field type="radio" name="duracion_cine" value="4" /> 4 hrs &nbsp;&nbsp;
									</label>
									<label>
										<Field type="radio" name="duracion_cine" value="5" /> 5 hrs &nbsp;&nbsp;
									</label>
								</Breadcrumb>
							</div>
						</div>
						<div>
							<label htmlFor="mecato">¿Cual es tu mecato favorito?</label>
							<div>
								<Breadcrumb>
									<label>
										<Field type="radio" name="mecato" value="Crispetas" /> Crispetas &nbsp;&nbsp;
									</label>
									<label>
										<Field type="radio" name="mecato" value="Papas" /> Papas &nbsp;&nbsp;
									</label>
									<label>
										<Field type="radio" name="mecato" value="Jugo" /> Jugo &nbsp;&nbsp;
									</label>
									<label>
										<Field type="radio" name="mecato" value="Perro caliente" /> Perro caliente &nbsp;&nbsp;
									</label>
								</Breadcrumb>
							</div>
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
									<button type="submit" disabled={!formularioSend}>
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
 
export default Usuario;
