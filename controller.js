var express = require('express');
var mongoose = require('mongoose');
const router = require('router')
const boat = require('./models')
const {findAllBoats,createboat} =require('./methods');

module.exports.getAllProducts = async (req,res)=>{
    // console.log(req.body)
    const data =await findAllBoats()
    res.send(data)
}
module.exports.createProduct  = async (request,response)=>{
    // const {productName} = request.body
    // console.log(productName)
    const data = await createboat({...request.body});
    response.send(data);
}
