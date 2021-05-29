module.exports={
    obtener:function (conexion, funcion) {
        conexion.query("SELECT * FROM  fiscalia", funcion); 
        },
    
    insertar:function (conexion, datos, funcion) {
        conexion.query(
            "INSERT INTO fiscalia (nombre, direccion, latitud, longitud, telefono, encargado) VALUES (?,?,?,?,?,?)", 
            [datos.nombre, datos.direccion, datos.latitud, datos.longitud, datos.telefono, datos.encargado], 
             funcion); 
        },

    retornarDatosID:function (conexion, id, funcion){
        conexion.query("SELECT * FROM  fiscalia WHERE id_fiscalia=?",[id], funcion);
        },    

    eliminar:function (conexion, id, funcion) {
        conexion.query("DELETE FROM fiscalia WHERE id_fiscalia = ?", [id], funcion);
        },
    
    actualizar:function (conexion, datos, funcion) {
        conexion.query(
            "UPDATE fiscalia SET nombre=?, direccion=?, latitud=?, longitud=?, telefono=?, encargado=? WHERE id_fiscalia=?", 
            [datos.nombre, datos.direccion, datos.latitud, datos.longitud, datos.telefono, datos.encargado, datos.id_fiscalia], 
                funcion); 
        }
}
