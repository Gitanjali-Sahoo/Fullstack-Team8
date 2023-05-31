console.log('hello')
import { config } from 'dotenv'
import pkg from 'pg'
const { Client } = pkg

import express, { request, response } from 'express'
import cors from 'cors'
import bodyParser from 'body-parser'

const app = express()

// Dotenv
config()

// Middlewares
app.use(bodyParser.json())
app.use(
    bodyParser.urlencoded({
        extended: true
    })
)

app.use(cors())
app.use(express.json())
app.use((request, response, next) => {
    response.header('Access-Control-Allow-Origin', '*')
    response.header('Access-Control-Allow-Headers', 'Content-Type')
    next()
})

// Implementerar databasen
const client = new Client({
    database: process.env.DB_NAME,
    host: process.env.DB_HOST,
    password: process.env.DB_PASSWORD,
    port: process.env.DB_PORT,
    user: process.env.DB_USERNAME
})

client.connect(function (err) {
    if (err) throw err
    console.log('Database Connected')
})

//Rutterna
app.get('/', (req, res) => {
    res.json('Welcome to backend')
})

app.get('/users', async (req, res) => {
    try {
        const result = await client.query('SELECT * FROM users')
        res.json(result.rows)
    } catch (err) {
        console.error(err)
        res.sendStatus(500)
    }
})


// //Persons Post
app.post('/users/submit-form', async (req, res) => {
    const { name, email, password } = req.body
    try {
        await client.query(
            'INSERT INTO users (name, email, password) VALUES ($1, $2, $3)',
            [name, email, password]
        )
        res.sendStatus(201)
    } catch (err) {
        console.error(err)
        res.sendStatus(500)
    }
})


//HEADPHONES PRODUCTS
app.get('/headPhones', async (request, response) =>{
    const { title, price, image } = request.body;
    try {
        await client.query(
            'INSERT INTO headPhone (title, price, image) VALUES ($1, $2, $3)',
            [title, price, image]
        );
        response.json(result.rows)
    } catch (error) {
        console.error(error)
        response.sendStatus(500)
    }
})
app.post('/headPhone', async (request, response) =>{
    try {
        await client.query(
            'INSERT INTO headPhone (title, price, image) VALUES ($1, $2, $3)',
            [title, price, image]
        )
        response.sendStatus(201)
    } catch (error) {
        console.error(error)
        response.sendStatus(500)
    }
})

app.put("/headPhone/:id", async (request, response) =>{
    const id = request.params.id;
    const {title, image, price } = request.body
try{
    const update = await client.query(
        'UPDATE headPhone SET title = $2, price = $3, image = $4 WHERE id = $1')
    [id,title, price, image]
    response.json('Successfully update')
    response.sendStatus(201)
} catch (error) {
    console.error(error)
    response.sendStatus(500)
}
})

app.delete("/headPhone/:id", async (request, response) =>{
try{
    const id = request.params.id;
    const dalete = await client.query
    ('DELETE FROM headPhone WHERE id = $1')
    const deleteValues = [id]
    await client.query(deleteQuery, deleteValues)
} catch (error) {
    console.error(error)
    response.sendStatus(500)
}
})

//CONTACT US
app.get('/userInfo', async (request, response) =>{
    try {
        const result = await client.query('SELECT * FROM userInfo')
        response.json(result.rows)
    } catch (error) {
        console.error(error)
        response.sendStatus(500)
    }
})
app.post('/userInfo', async (request, response) =>{
    const { title, price, image } = request.body;
    try {
        await client.query(
            'INSERT INTO userInfo (title, price, image) VALUES ($1, $2, $3)',
            [title, price, image]
        )
        response.sendStatus(201)
    } catch (error) {
        console.error(error)
        response.sendStatus(500)
    }
})

app.listen(3000, () => {
    console.log('Server is running')
})
