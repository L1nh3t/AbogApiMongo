const express = require('express');
const router =  express.Router();
const {Abogados} = require('../models/abogados');

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