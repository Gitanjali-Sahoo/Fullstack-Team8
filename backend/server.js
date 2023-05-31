import { config } from 'dotenv'
import pkg from 'pg'
const { Client } = pkg

import express, { request, response } from 'express'
import cors from 'cors'
import bodyParser from 'body-parser'

const app = express()
// app.use(express.static('/frontend/src/assets'))
// Serve static images from the "assets/images" directory

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


// //Persons Post for signup form

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
        res.sendStatus(500).json({ error: 'An error occurred during sign-up' })
    }
})

//Signin form post method

app.post('/signin', (req, res) => {
    const { email, password } = req.body

    // Query the database to check user credentials
    client.query(
        'SELECT * FROM users WHERE email = $1',
        [email],
        (err, result) => {
            if (err) {
                console.error('Error executing query', err)
                res.status(500).json({
                    success: false,
                    error: 'Internal Server Error'
                })
            } else {
                const user = result.rows[0]

                if (!user || user.password !== password) {
                    res.status(401).json({
                        success: false,
                        error: 'Invalid email or password'
                    })
                } else {
                    // Successful sign-in
                    res.status(200).json({ success: true })
                }
            }
        }
    )
})

//Product page

//get method for laptops

app.get('/laptops', async (req, res) => {
    try {
        const result = await client.query('SELECT * FROM laptops')
        res.json(result.rows)
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
