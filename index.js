//* THIS CODE SHOWS HOW TO SET A COOKIE IN YOUR BROWSER
// ****************************************************************************************************************************************************************************************************************************************

// * SMIT-WMA-Batch-11-Backend-06-Multer

// // const cookieParser = require('cookie-parser') //* THis is an old way to use this*/
// import cookieParser from 'cookie-parser'
// import express from 'express'

// const app = express()
// const port = 3000


// app.use(cookieParser());

// //* IF YOU WANT TO SET A COOKIE USE RES
// app.get('/', function (req, res) {
//     res.cookie("name", 'abrar');
//     res.send("done");
// })

// //* IF YOU WANT TO READ A COOKIE USE REQ
// app.get('/read', function (req, res) {
//     console.log(req.cookies);
//     res.send("Read page");
// })



// app.listen(port, () => {
//     console.log(`Example app listening on port ${port}`)
// })


// ****************************************************************************************************************************************************************************************************************************************
// import express from 'express'

// // const bcrypt = require("bcrypt") //* THis is an old way to use this*/
// import bcrypt from "bcrypt"

// const app = express()
// const port = 3000
// app.get('/', function (req, res) {
//     bcrypt.genSalt(10, function (err, salt) {
//         // console.log(salt); //* Result of this: $2b$10$KUMaHHVqNkCa6ULvtct3pO
//         bcrypt.hash("malik", salt, function (err, hash) {
//             console.log(hash); //* RESULT :: $2b$10$DdX9qWxf1zUhAj7MVPeSOudyKTUwBqQL7QeUuHTpcGGd1eKz1VTr6
//         });
//     });
// })

//* THE COMEPAIR OF THIS WILL SHOW THE RESULT IN BOOLIEN
// app.get("/", function (req, res) {
//     bcrypt.compare("malik", "$2b$10$DdX9qWxf1zUhAj7MVPeSOudyKTUwBqQL7QeUuHTpcGGd1eKz1VTr6", function (err, result) {
//         console.log(result);
//     });
// })
// ****************************************************************************************************************************************************************************************************************************************


// import express from 'express'
// // const jwt = require('jsonwebtoken') //* THis is an old way to use this*/
// import jwt from "jsonwebtoken"
// import bcrypt from "bcrypt"
// import cookieParser from 'cookie-parser'
// const app = express()
// const port = 3000


// app.use(cookieParser());

// app.get("/", function (req, res) {
//     let token = jwt.sign({ emil: "abrar@gmail.com" }, "blackVigo")
//     res.cookie("token", token)
//     console.log(token); //* RESULT OF THIS: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWlsIjoiYWJyYXJAZ21haWwuY29tIiwiaWF0IjoxNzMzMDU0OTI4fQ.K9GOlHqDhwVLGAIKPp00KeRuJftQp6S-qcjKBT6XKts
//     res.send("Done!")
// })

// app.get("/read", function (req, res) {
//     // console.log(req.cookies); //* WITH ONLY THIS YOU WILL GET  AN OBJECT THAT WILL HAVE YOUR DATA
//     // console.log(req.cookies.token); //* THIS WILL ONLY SHOW THE TOKEN
//     // res.send("read Done!")
//     let data = jwt.verify(req.cookies.token, 'blackVigo')
//     console.log(data); //* Decript Data result: { emil: 'abrar@gmail.com', iat: 1733055317 }

// })
// app.listen(port, () => {
//     console.log(`Example app listening on port ${port}`)
// })
// ****************************************************************************************************************************************************************************************************************************************


import dotenv from "dotenv";
dotenv.config();
import express from "express";
import cookieParser from "cookie-parser";
import cors from "cors";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import connectDB from "./src/db/index.js";
import userRoutes from "./src/routes/users.routes.js";


const app = express();

app.use(cors());
app.use(express.json());
app.use(cookieParser());

app.get("/", (req, res) => {
    res.send("Hello Boss Man!");
});

//* ROUTES
app.use("/api/v5", userRoutes);

connectDB()
    .then(() => {
        app.listen(process.env.PORT, () => {
            console.log(`⚙️  Server is running at port : ${process.env.PORT}`);
        });
    })
    .catch((err) => {
        console.log("MONGO DB connection failed !!! ", err);
    });