const express = require('express');
const mongoose = require('mongoose');
const cors= require('cors');
const clientes = require("./controllers/clientes.js");
const app = express();
app.use(cors());
//Puerto
const PORT = process.env.PORT || 5000;
//URL mongoATLAS
const URL_MONGO = 'mongodb+srv://linhetsa:l1nh3tj43n@clusterdevfroja-ugo6l.mongodb.net/test?retryWrites=true&w=majority';
app.use(express.json())
app.use('/clientes',clientes);

//Puerto
// app.listen(PORT,()=>{
//     console.log("its running");
// })

app.get('/', (req, res)=>{
res.send("Hola Bienvenido a AbogAPI")
});


//Conexion Base de Datos
mongoose.connect(URL_MONGO,{useNewUrlParser:true,useUnifiedTopology:true},(err)=>{
    if(!err){
        console.log("Connected DB");
        app.listen(PORT, function () {
            console.log('ITS RUNNING '+ PORT);
          });
    } else{
        console.log(err);
    }
});
