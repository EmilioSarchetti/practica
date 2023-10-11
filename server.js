const express = require('express');
const mysql = require('mysql');

const app = express();
app.use(express.json());

const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '123456',
  database: 'database',
});

db.connect((err) => {
  if (err) {
    console.error('Error al conectar a la base de datos: ' + err);
    return;
  }
  console.log('Conexión exitosa a la base de datos');
});

// Operación C: Crear un usuario
app.post('/usuarios', (req, res) => {
  const { nombre, correo } = req.body;
  const sql = 'INSERT INTO usuarios (nombre, correo) VALUES (?, ?)';
  db.query(sql, [nombre, correo], (err, result) => {
    if (err) {
      console.error('Error al crear usuario: ' + err);
      res.status(500).send('Error al crear usuario');
    } else {
      res.status(201).send('Usuario creado exitosamente');
    }
  });
});

// Operación R: Leer todos los usuarios
app.get('/usuarios', (req, res) => {
  const sql = 'SELECT * FROM usuarios';
  db.query(sql, (err, results) => {
    if (err) {
      console.error('Error al obtener usuarios: ' + err);
      res.status(500).send('Error al obtener usuarios');
    } else {
      res.status(200).json(results);
    }
  });
});

// Operación U: Actualizar un usuario
app.put('/usuarios/:id', (req, res) => {
  const userId = req.params.id;
  const { nombre, correo } = req.body;
  const sql = 'UPDATE usuarios SET nombre = ?, correo = ? WHERE id = ?';
  db.query(sql, [nombre, correo, userId], (err, result) => {
    if (err) {
      console.error('Error al actualizar usuario: ' + err);
      res.status(500).send('Error al actualizar usuario');
    } else {
      res.status(200).send('Usuario actualizado exitosamente');
    }
  });
});

// Operación D: Eliminar un usuario
app.delete('/usuarios/:id', (req, res) => {
  const userId = req.params.id;
  const sql = 'DELETE FROM usuarios WHERE id = ?';
  db.query(sql, userId, (err, result) => {
    if (err) {
      console.error('Error al eliminar usuario: ' + err);
      res.status(500).send('Error al eliminar usuario');
    } else {
      res.status(200).send('Usuario eliminado exitosamente');
    }
  });
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Servidor en ejecución en el puerto ${PORT}`);
});