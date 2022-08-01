let products = require('../products')
// const {v4: uuid} = require('uuid')
const { v4: uuidv4 } = require('uuid');


const { writeDataToFile } = require('../utils')         // possible bug detection 

function findAll(){
    return new Promise((resolve, reject) => {
        resolve(products)
    })
}


function findById(id){
    return new Promise((resolve, reject) => {
    const product = products.find((p) => p.id === id)
    resolve(product)
    })
}

function create(product){
    return new Promise((resolve, reject) => {
    const newProduct = {id: uuidv4(), ...product}               // uuid was used to generate a unique id| | the spread array product was used to get the new array of the products      
    products.push(newProduct)                                   //To add to JSON file, i created a utility function
    writeDataToFile('./data/products.json', products)
    resolve(newProduct)
    })
}


function update(id, product){
    return new Promise((resolve, reject) => {
    const  index  = products.findIndex((p) => p.id === id)
    products[index] = { id, ...product}                                  

    writeDataToFile('./data/products.json', products)
    resolve(Products[index])
    })
}

function remove(id){
    return new Promise((resolve, reject) => {
    products = products.filter((p) => p.id !== id)
    writeDataToFile('./data/products.json', products)
    resolve()
    })
}


module.exports = {
    findAll,
    findById,
    create,
    update,
    remove
}




