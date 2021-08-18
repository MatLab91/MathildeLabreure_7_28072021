const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const path = __dirname + '/app/views/';

const app = express();

app.use(express.static(path));

var corsOptions = {
  origin: "http://localhost:8081"
};

app.use(cors(corsOptions));

// parse requests of content-type - application/json
app.use(bodyParser.json());

// parse requests of content-type - application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));

const db = require("./app/models");

db.sequelize.sync();
// // drop the table if it already exists
// db.sequelize.sync({ force: true }).then(() => {
//   console.log("Drop and re-sync db.");
// });

app.get('/', function (req,res) {
  res.sendFile(path + "index.html");
});

require("./app/routes/poste.routes")(app);

// set port, listen for requests
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Le serveur tourne sur le port ${PORT}.`);
});



/* const express = require("express");
const mysql = require ("mysql2");

const db = mysql.createConnection({
    host : "localhost",
    user : 'root',
    password: "password123",
    database: 'giraffe'
});

db.connect((err) => {
    if(err){
        throw err;
    }
    console.log('mySQL est connecté');
});

const app = express();

app.get('/addposte1', (req, res) => {
    let poste = {title: 'Post One', description: 'Cest le premier post', createdAt: '', updatedAt: ''}; 
    let sql = 'INSERT INTO postes SET ?';
    let query = db.query(sql, poste, (err, result) => {
        if(err) throw err;
        console.log(result);
        res.send('Le poste numéro 1 a été ajouté.')
    });
});



app.listen('3000', () => {
    console.log('Le serveur tourne sur le port 3000');
}) */