
const model= require("./../model/model");
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')

module.exports =  {
    create: (req, res) => {
        console.log('kavin')
        const body = req.body;
        model.create(body, (err, results) => {
          if (err) {
            console.log(err);
            return res.status(500).json({
              success: 0,
              message: "Database connection errror"
            });
          }
          return res.status(200).json({
            success: 1,
            data: results
          });
        });
      },
      getall:(req, res) => {
          console.log('suriya')
       model.getall((err, results) => {
          if (err) {
            console.log(err);
            return;
          }
          return res.json({
            success: 1,
            data: results
          });
        });
      },
      getbybrand: (req, res) => {
        const brand = req.params.brand;
        model.getbybrand(brand, (err, results) => {
          if (err) {
            console.log(err);
            return;
          }
          if (!results) {
            return res.json({
              success: 0,
              message: "Records not Found"
            });
          }
        
          return res.json({
            success: 1,
            data: results
          });
        });
      },
      getbyram: (req, res) => {
        const ram = req.params.ram;
        model.getbybrand(ram, (err, results) => {
          if (err) {
            console.log(err);
            return;
          }
          if (!results) {
            return res.json({
              success: 0,
              message: "Records not Found"
            });
          }
          
          return res.json({
            success: 1,
            data: results
          });
        });
      },
      getbyrom: (req, res) => {
        const rom = req.params.rom;
        model.getbybrand(rom, (err, results) => {
          if (err) {
            console.log(err);
            return;
          }
          if (!results) {
            return res.json({
              success: 0,
              message: "Record not Found"
            });
          }
          results.password = undefined;
          return res.json({
            success: 1,
            data: results
          });
        });
      },
      getbyprice: (req, res) => {
        const price = req.params.price;
        model.getbybrand(price, (err, results) => {
          if (err) {
            console.log(err);
            return;
          }
          if (!results) {
            return res.json({
              success: 0,
              message: "Records not Found"
            });
          }
          
          return res.json({
            success: 1,
            data: results
          });
        });
      },
      getbyrating: (req, res) => {
        const rating = req.params.rating;
        model.getbybrand(rating, (err, results) => {
          if (err) {
            console.log(err);
            return;
          }
          if (!results) {
            return res.json({
              success: 0,
              message: "Records not Found"
            });
          }
          
          return res.json({
            success: 1,
            data: results
          });
        });
      },
      addtowishlist: (req,res)=>{
        console.log('kaviiiin')
        const body = req.body;
        model.getbyid(body, (err, results) => {
          if (err) {
            console.log(err);
            return res.status(500).json({
              success: 0,
              message: "Database connection errror"
            });
          }
          return res.status(200).json({
            success: 1,
            data: results
          });
        });
      }    
      
}
