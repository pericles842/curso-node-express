const express = require('express');
require('dotenv').config();

const path = require('path');
const app = express();

// Configuración de vistas con EJS
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'src', 'views'));


// Middleware para parsear JSON
app.use(express.json());
app.use(express.urlencoded({ extended: false }));



app.get('/prueba', (req, res) => {
     
    res.send('vi tu saludo');
    //res.render('home',{title:'Home'});
})

const routes = require('./src/routes/routes');

// Importa rutas
for (const routePath in routes) {
    app.use(routePath, routes[routePath]);
}

//servidor
const PORT = process.env.SERVER_PORT || 3000;
app.listen(PORT || 3000, () => {
    console.log(`🟢 Servidor corriendo en http://localhost:${PORT}`);
});
