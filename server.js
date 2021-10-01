const express = require('express');
const app = express();
const cors = require('cors')
var keys = require('./confi/keys')
const {Client} = require('pg')
const port = process.env.PORT || 3001;

app.use(cors())
app.use(express.json());
app.use(express.urlencoded({extended: true}))

const db = new Client({
  connectionString: keys.postgresurl,
  ssl: {
    rejectUnauthorized: false
  }
});

db.connect();

app.post("/api/insert", (req, res) => {

  /**
   * const {genero_cine, num_peliculas, horario_pelicula,lugar_cine,dia_cine,duracion_cine,mecato} = req.body

  const pgInsert = `INSERT INTO cine (genero_cine, num_peliculas, horario_pelicula,lugar_cine,dia_cine,duracion_cine,mecato) 
    VALUES('${genero_cine}','${num_peliculas}','${horario_pelicula}','${lugar_cine}','${dia_cine}','${duracion_cine}','${mecato}')`;
   */

  const {nombre, apellido, correo,sexo, marca_favorita, tiene_carro, num_puertas, lugar_carro, dia_carro, marca_poseida, 
    cambiar_carro, genero_musica,horas_musica,razon_musica,bailas,
    genero_concierto, horario_concierto, num_artista, lugar_concierto, dia_concierto, duracion_concierto,
    deporte_favorito, horas_practica, malas_experiencia, rutina, lugar_deporte,
    genero_cine, num_peliculas, horario_pelicula,lugar_cine,dia_cine,duracion_cine,mecato} = req.body
  
  const pgInsert = `INSERT INTO usuario (nombre, apellido, correo,sexo) 
      VALUES('${nombre}','${apellido}','${correo}','${sexo}'); 
    INSERT INTO carro (marca_favorita, tiene_carro, num_puertas,lugar_carro,dia_carro,marca_poseida,cambiar_carro) 
      VALUES('${marca_favorita}','${tiene_carro}','${num_puertas}','${lugar_carro}','${dia_carro}','${marca_poseida}','${cambiar_carro}');
    INSERT INTO musica (genero_musica, horas_musica, razon_musica, bailas) 
      VALUES('${genero_musica}','${horas_musica}','${razon_musica}','${bailas}');
    INSERT INTO concierto (genero_concierto, horario_concierto, num_artista,lugar_concierto, dia_concierto, duracion_concierto) 
      VALUES('${genero_concierto}','${horario_concierto}','${num_artista}','${lugar_concierto}','${dia_concierto}','${duracion_concierto}');
    INSERT INTO deporte (deporte_favorito, horas_practica, malas_experiencias,rutinas,lugar_deporte) 
      VALUES('${deporte_favorito}','${horas_practica}','${malas_experiencia}','${rutina}','${lugar_deporte}');
    INSERT INTO cine (genero_cine, num_peliculas, horario_pelicula,lugar_cine,dia_cine,duracion_cine,mecato) 
      VALUES('${genero_cine}','${num_peliculas}','${horario_pelicula}','${lugar_cine}','${dia_cine}','${duracion_cine}','${mecato}')`

  db.query(pgInsert, (err, result) => {
    console.log(err);
  })
});

/*


app.post("/api/insert/car", (req, res) => {
  const {marca, tiene_carro, puertas, lugar, dia, masrca, cambiar} = req.body
  
  const pgInsert = `INSERT INTO carro (marca_favorita, tiene_carro, num_puertas,lugar_carro,dia_carro,marca_poseida,cambiar_carro) 
    VALUES('${marca}','${tiene_carro}','${puertas}','${lugar}','${dia}','${masrca}','${cambiar}')`; 

db.query(
  pgInsert, (err, result) =>{
    console.log(result);
  })
});



app.post("/api/insert/user", (req, res) => {
  const {nombre, apellido, correo, sexo} = req.body

  const pgInsert = `INSERT INTO usuario (nombre, apellido, correo,sexo) 
                    VALUES('${nombre}','${apellido}','${correo}','${sexo}')`; 

db.query(
  pgInsert, (err, result) =>{
    console.log(err);
  })
});

app.post("/api/insert/music", (req, res) => {
  const {genero_musica, horas_musica, razon_musica, bailas} = req.body

  const pgInsert = `INSERT INTO musica (genero_musica, horas_musica, razon_musica, bailas) 
                    VALUES('${genero_musica}','${horas_musica}','${razon_musica}','${bailas}')`; 

db.query(
  pgInsert, (err, result) =>{
    console.log(err);
  })
});

app.post("/api/insert/concert", (req, res) => {
  const {genero_concierto, horario_concierto, num_artista,lugar_concierto, dia_concierto, duracion_concierto} = req.body

  const pgInsert = `INSERT INTO concierto (genero_concierto, horario_concierto, num_artista,lugar_concierto, dia_concierto, duracion_concierto) 
                    VALUES('${genero_concierto}','${horario_concierto}','${num_artista}','${lugar_concierto}','${dia_concierto}','${duracion_concierto}')`; 

db.query(
  pgInsert, (err, result) =>{
    console.log(err);
  })
});

app.post("/api/insert/cine", (req, res) => {
  const {genero_cine, num_peliculas, horario_pelicula,lugar_cine,dia_cine,duracion_cine,mecato} = req.body

  const pgInsert = `INSERT INTO cine (genero_cine, num_peliculas, horario_pelicula,lugar_cine,dia_cine,duracion_cine,mecato) 
    VALUES('${genero_cine}','${num_peliculas}','${horario_pelicula}','${lugar_cine}','${dia_cine}','${duracion_cine}','${mecato}')`; 

db.query(
  pgInsert, (err, result) =>{
    console.log(err);
  })
});



app.post("/api/insert/sport", (req, res) => {
  const {deporte, hora, exp, rutina, lugar} = req.body

  const pgInsert = `INSERT INTO deporte (deporte_favorito, horas_practica, malas_experiencias,rutinas,lugar_deporte) 
                    VALUES('${deporte}','${hora}','${exp}','${rutina}','${lugar}')`; 

db.query(
  pgInsert, (err, result) =>{
    console.log(err);
  })
});
*/

// create a GET route
/*
app.get('/express_backend', (req, res) => {
    
  }); 
*/
if (process.env.NODE_ENV === 'production') {
  // Express will serve up production assets
  // like our main.js file, or main.css file!
  app.use(express.static('cliente/build'));

  // Express will serve up the index.html file
  // if it doesn't recognize the route
  const path = require('path');
  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'cliente', 'build', 'index.html'));
  });
}

app.listen(port, () => console.log(`Listening on port ${port}`)); 

/**
 *  const pgInsert = "INSERT INTO usuario (nombre, apellido, correo) VALUES ('Juan', 'Rojas', 'jrojas@correo.com')";
    db.query(pgInsert, (err, result)=> {
      res.send({ express: 'YOUR EXPRESS BACKEND IS CONNECTED TO REACT' });
    })
client.connect();
 */