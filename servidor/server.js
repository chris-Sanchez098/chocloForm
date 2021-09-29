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

app.post("/api/insert", async (req, res) => {
  const {nombre, apellido, correo} = req.body

  const pgInsert = `INSERT INTO usuario (nombre, apellido, correo) 
                    VALUES('${nombre}','${apellido}','${correo}')`; 

db.query(
  pgInsert, (err, result) =>{
    console.log(err);
  })
});

// create a GET route
/*
app.get('/express_backend', (req, res) => {
    
  }); 
*/
app.listen(port, () => console.log(`Listening on port ${port}`)); 

/**
 *  const pgInsert = "INSERT INTO usuario (nombre, apellido, correo) VALUES ('Juan', 'Rojas', 'jrojas@correo.com')";
    db.query(pgInsert, (err, result)=> {
      res.send({ express: 'YOUR EXPRESS BACKEND IS CONNECTED TO REACT' });
    })
client.connect();
 */