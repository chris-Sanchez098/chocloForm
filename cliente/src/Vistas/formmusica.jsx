import React, { useState } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import Axios from 'axios';
//import 'bootstrap/dist/css/bootstrap.min.css'
import { Button, Breadcrumb } from 'react-bootstrap'


function Formmusica() {
    const [formularioSend, cambiarFormularioEnviado] = useState(false);

    return (
        <Formik
            initialValues={{
                genero_musica: '',
                horas_musica: '',
                razon_musica: '',
                bailas: ''

            }}

            validate={(valores) => {
                let errores = {};

                //Validacion nombre
                if (!valores.nombre) {
                    errores.nombre = 'Por favor ingresa un nombre';
                } else if (!/^[a-zA-ZÀ-ÿ\s]{1,40}$/.test(valores.nombre)) { /**verificamos que el nombre sea valido */
                    errores.nombre = 'El nombre solo puede contener letras y espacios'
                }


                //Validacion apellido
                if (!valores.apellido) {
                    errores.apellido = 'Por favor ingresa un apellido';
                } else if (!/^[a-zA-ZÀ-ÿ\s]{1,40}$/.test(valores.apellido)) { /**verificamos que el apellido sea valido */
                    errores.apellido = 'El apellido solo puede contener letras y espacios'
                }

                // Validacion correo
                if (!valores.correo) {
                    errores.correo = 'Por favor ingresa un correo';
                } else if (!/^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/.test(valores.correo)) { /**verificamos que el correo sea valido */
                    errores.correo = 'El correo solo puede contener letras, numeros,puntos,guiones y un dominio valido'
                }

                return errores;
            }}

            onSubmit={(valores, { resetForm }) => {
                /** en este metodo podemos acceder a todos los objectos */
                const genero_musica = valores.genero_musica;
                const horas_musica = valores.horas_musica;
                const razon_musica = valores.razon_musica;
                const bailas = valores.bailas;


                Axios.post("http://localhost:3001/api/insert", { genero_musica, horas_musica, razon_musica, bailas }).then(() => { alert('Insertado') });

                resetForm();
                cambiarFormularioEnviado(true);
                setTimeout(() => { cambiarFormularioEnviado(false) }, 5000); /* mensaje desaparece luego de 5 segundos
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
            {({ errors } /** importamos props de formik */) => (
                <Form className="formulario">
                    <div>
                        <label htmlFor="genero_musica">Cual es tu genero musical favorito ?</label>
                        <Field
                            as="select"
                            id="genero_musica"
                            name="genero_musica"
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
                    <div>

                        <div>
                            <label htmlFor="horas_musica">Cuantas horas escuchas musica al día?</label>
                            <div>

                                <Breadcrumb>
                                    <label>
                                        <Field type="radio" name="1" value="1" /> 1
                                    </label>
                                    <label>
                                        <Field type="radio" name="2" value="2" /> 2
                                    </label>
                                    <label>
                                        <Field type="radio" name="3" value="3" /> 3
                                    </label>
                                    <label>
                                        <Field type="radio" name="4" value="4" /> 4
                                    </label>
                                    <label>
                                        <Field type="radio" name="5" value="5" /> 5
                                    </label>
                                    <label>
                                        <Field type="radio" name="6" value="6" /> 6
                                    </label>
                                </Breadcrumb>

                            </div>
                        </div>


                        <ErrorMessage name="apellido" component={() =>
                            (<div className="error">{errors.apellido}</div>)} />
                    </div>
                    <div>
                        <label htmlFor="razon_musica">Por que razón escuchas música?</label>
                        <Field
                            as="select"
                            id="razon_musica"
                            name="razon_musica"
                        //placeholder="Jones" 
                        >
                            <option value="Para pasar el tiempo">Para pasar el tiempo</option>
                            <option value="Para motivarse">Para motivarse</option>
                            <option value="Para reducir el estres">Para reducir el estres</option>
                            <option value="Para hacer ejercicio">Para hacer ejercicio</option>
                        </Field>
                    </div>
                    <div>
                        <label htmlFor="bailas">Bailas?</label>
                        <Field
                            as="select"
                            id="bailas"
                            name="bailas"
                        //placeholder="Jones" 
                        >
                            <option value="si">Si</option>
                            <option value="no">No</option>
                        </Field>
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

export default Formmusica;
