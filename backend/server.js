console.log('hello')
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

//New database for laptop using link for images
app.get('/laptops1', async (req, res) => {
    try {
        const result = await client.query('SELECT * FROM laptops1')
        res.json(result.rows)
    } catch (err) {
        console.error(err)
        res.sendStatus(500)
    }
})
app.post('/laptops1', async (request, response) => {
    try {
        const { id, brand, model, price, image, description, specification } =
            request.body
        await client.query(
            'INSERT INTO laptops1 (id, model, brand, price, image, description, specification) VALUES ($1, $2, $3, $4, $5, $6,$7)',
            [id, model, brand, price, image, description, specification]
        )

        response.sendStatus(201)
    } catch (error) {
        console.error(error)
        response.sendStatus(500)
    }
})

app.get('/laptops1/:id', (req, res) => {
    const laptopId = req.params.id

    // Perform the database query to retrieve the product details based on the ID
    client
        .query('SELECT * FROM laptops1 WHERE id = $1', [laptopId])
        .then((result) => {
            const laptop = result.rows[0]
            res.json(laptop)
        })
        .catch((error) => {
            console.error('Error retrieving product:', error)
            res.status(500).json({ error: 'Failed to retrieve product' })
        })
})

//HEADPHONES PRODUCTS
app.get('/headPhones', async (request, response) => {
    try {
        const result = await client.query('SELECT * FROM headphone')

        // [id, brand, model, price, image]

        response.json(result.rows)
    } catch (error) {
        console.error(error)
        response.sendStatus(500)
    }
})
app.post('/headPhone', async (request, response) => {
    try {
        const { id, brand, model, price, image } = request.body
        await client.query(
            'INSERT INTO headphone (id, brand, model, price, image) VALUES ($1, $2, $3, $4, $5)',
            [id, brand, model, price, image]
        )

        response.sendStatus(201)
    } catch (error) {
        console.error(error)
        response.sendStatus(500)
    }
})

app.put('/headPhone/:id', async (request, response) => {
    const id = request.params.id
    const { brand, model, price, image } = request.body
    try {
        const update = await client.query(
            'UPDATE headphone SET brand = $2, model = $3, price = $4 ,  image =$5 WHERE id = $1',
            [id, brand, model, price, image]
        )
        response.json('Successfully update')
        response.sendStatus(201)
    } catch (error) {
        console.error(error)
        response.sendStatus(500)
    }
})

app.delete('/headPhone/:id', async (request, response) => {
    try {
        const id = request.params.id
        const deleteQuery = 'DELETE FROM headphone WHERE id = $1'
        const deleteValues = [id]
        await client.query(deleteQuery, deleteValues)
        response.json('Successfully')
        response.sendStatus(201)
    } catch (error) {
        console.error(error)
        response.sendStatus(500)
    }
})

//CONTACT US
app.get('/userInfo', async (request, response) => {
    try {
        const result = await client.query('SELECT * FROM contactUs')
        response.json(result.rows)
    } catch (error) {
        console.error(error)
        response.sendStatus(500)
    }
})
app.post('/userInfo', async (request, response) => {
    try {
        const { name, email, message } = request.body
        await client.query(
            'INSERT INTO contactUs (name, email, message) VALUES ($1, $2, $3)',
            [name, email, message]
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
