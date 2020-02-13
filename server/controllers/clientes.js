const express = require('express');
const router =  express.Router();
const {Clientes} = require('../models/clientes.js');
//Pruebas de .GET
router.get('/saludo',(req,res)=>{
    res.send("hola funciono");
})
router.get('/despido',(req,res)=>{
    res.send("adiós funciono");
})

//ReadALL
router.get('/all', (req, res) => { 
 Clientes
 .find()
 .then(clie => {
     console.log(clie);
     res.json(clie);
 })
 .catch(err => {
     res.json(err);
 })
})

router.get('/read', (_req, res) => {
    Clientes
        .find()
        .exec()
        .then(clie => res.status(200).send("Holi"))
        .catch(clie => res.status(400).send(error))
});
//ALL
router.get('/allread', async (req, res) => {
        try {
        const read= await Clientes.find({});
        res.send(read);
    }
    catch (err){
        res.status(500).send(err);
    }

});

//Agregar Clientes
router.post('/add',(req,res)=>{
    const {nombre,correo,numero,areaDeInteres} =req.body
    Clientes
    .create({
        nombre: nombre,
        correo: correo,
        numero: numero,
        areaDeInteres: areaDeInteres
    })
    .then(clie =>{
        res.json(clie);
    })
    .catch((err)=>{
        res.json(err);
    })
})

module.exports = router;