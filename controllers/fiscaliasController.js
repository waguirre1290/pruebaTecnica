var conexion = require('../config/conexion');
var fiscalia = require('../model/fiscalia');

module.exports={

    index:function (eq, res) {

       fiscalia.obtener(conexion, function(err, datos) {
           console.log(datos);
           res.render('fiscalias/index', { title: 'Express', fiscalias:datos});
       })
    },

    crear:function (req,res) {
        res.render('fiscalias/crear');
        
    },

    guardar:function (req,res) {
        console.log(req.body);
        fiscalia.insertar(conexion, req.body, function(err) {
             res.redirect('/fiscalias');
        })
    },

    eliminar:function (req,res) {
        console.log(req.params.id);

        fiscalia.eliminar(conexion, req.params.id, function (err) {
             res.redirect('/fiscalias');
        })
        
    },

    editar:function (req, res) {
        fiscalia.retornarDatosID(conexion, req.params.id, function (err, registros){
            console.log(registros[1]);
            res.render('fiscalias/editar', {fiscalia:registros[0]});
        });
    },

    actualizar:function name(req,res) {
        console.log(req.body.nombre);
            fiscalia.actualizar(conexion, req.body, function(err) {
                 res.redirect('/fiscalias');
           })
    }
}