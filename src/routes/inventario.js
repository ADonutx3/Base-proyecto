const express = require('express');
const router = express.Router();

// Models
const inventario = require('../models/inventario');

// Helpers
const { isAuthenticated } = require('../helpers/auth');


router.post('/inventario/guardar', isAuthenticated, async (req, res)=>{
  const newDataInventary = new inventario({
    producto: req.body.producto,
    cantidad: req.body.cantidad,
    precio: req.body.precio});

  await newDataInventary.save();

  console.log(newDataInventary);



  res.redirect("/inventario");
})


router.get('/inventario', isAuthenticated, async (req, res) => {
  res.render('panel/inventario');
});



module.exports = router;
