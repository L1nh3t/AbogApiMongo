const express = require('express');
const router =  express.Router();
const {Abogados} = require('../models/abogados');
//Pruebas de .GET
router.get('/saludo',(req,res)=>{
    res.send("hola funciono");
})
router.get('/despido',(req,res)=>{
    res.send("adiós funciono");
})

//ReadALL
router.get('/all', (req, res) => { 
 Abogados
 .find()
 .then(abog => {
     console.log(abog);
     res.json(abog);
 })
 .catch(err => {
     res.json(err);
 })
})

router.get('/read', (_req, res) => {
    Abogados
        .find()
        .exec()
        .then(abog => res.status(200).send("Holi"))
        .catch(abog => res.status(400).send(error))
});
//ALL
router.get('/allread', async (req, res) => {
        try {
        const read= await Abogados.find({});
        res.send(read);
    }
    catch (err){
        res.status(500).send(err);
    }

});

//Agregar Abogados
router.post('/add',(req,res)=>{
    const {nombre,casosExitosos,areaLaboral,img_url} =req.body
    Abogados
    .create({
        nombre: nombre,
        casosExitosos : casosExitosos,
        areaLaboral : areaLaboral,
        img_url: img_url
    })
    .then(abog =>{
        res.json(abog);
    })
    .catch((err)=>{
        res.json(err);
    })
})

module.exports = router;