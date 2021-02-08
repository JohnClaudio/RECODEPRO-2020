const mongoose = require('mongoose');

    mongoose.connect('mongodb://localhost/luthienshop', {useNewUrlParser: true, useUnifiedTopology: true}).then(()=>{
        console.log("Mongo DB Conectado")
        }).catch((err)=>{console.log("falha ao conectar"), err});

        var pedidos = new mongoose.Schema({
            "nome": String,
            "endereco": String,
            "telefone": String,
            "produto": String,
            "qtd": String,
            "produto": String,
            "total": String
        }, { collection: 'pedidos' }
        );
        
        module.exports = { Mongoose: mongoose, UserSchema: pedidos }