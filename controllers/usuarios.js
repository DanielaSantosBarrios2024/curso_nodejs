const { request, response } = require ("express");
const res = require("express/lib/response");
const pool = require("../db/conexion");

const usuarioGet = async( req = request, res = response ) => {
    let conn;
    try{
        conn = await pool.getConnection();
        const usuarios = await conn.query(usuariosQueries.selectUsuarios)
        res.json ({usuarios});
        
    } catch (error){
        console.log(error);
        res.status(500).json({msg: "Por favor, contacte al administrador", error});
    }finally{
        if (conn) conn.end();
    } 
 };

 const usuarioPost = ( req = request, res = response ) => {
    const {nombre, apellido, mail, status = 1} = req.body; 
    let conn;
    try{
        conn = await pool.getConnection();
        const usuarios = await conn.query(usuariosQueries.InsertUsuario, [
            nombre, email, password, status
        ]);
        res.json ({usuarios});
        
    } catch (error){
        console.log(error);
        res.status(500).json({msg: "Por favor, contacte al administrador", error});
    }finally{
        if (conn) conn.end();
    } 
};

const usuarioPut = ( req = request, res = response ) => {
    const {email}= req.query;
    const {nombre, status} = req.body;
    let conn;
    try{
        conn = await pool.getConnection();
        const usuarios = await conn.query(usuariosQueries.updateUsuario, [nombre, status, email]);
        res.json ({usuarios});
        
    } catch (error){
        console.log(error);
        res.status(500).json({msg: "Por favor, contacte al administrador", error});
    }finally{
        if (conn) conn.end();
    } 
};

const usuarioDelete = ( req = request, res = response ) => {
    const {email} = req.query;
    let conn;
    try{
        conn = await pool.getConnection();
        const usuarios = await conn.query(usuariosQueries.deleteUsuario, [email]);
        res.json ({usuarios});
        
    } catch (error){
        console.log(error);
        res.status(500).json({msg: "Por favor, contacte al administrador", error});
    }finally{
        if (conn) conn.end();
    } 
    
};

module.exports = {usuariosGet, usuariosPost, usuariosPut, usuariosDelete};

