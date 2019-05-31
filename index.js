const express = require('express')
const app = express()
const bodyParser = require('body-parser')
var morgan = require('morgan')
const cors = require('cors')

app.use(cors())
app.use(bodyParser.json())

morgan.token('content', function (req, res) {
    if (req.method !== 'POST') {
        return ' '
    }
    return (
        JSON.stringify({
            name: req.body.name,
            number: req.body.number,
        })
    )
})

app.use(morgan(':method :url :status :res[content-length] - :response-time ms :content'))

let persons = [
    {
        id: 1,
        name: "Arto Hellas",
        number: "045-1236543"
    },
    {
        id: 2,
        name: "Arto Järvinen",
        number: "040-2233441"
    },
    {
        id: 3,
        name: "Lea Kutvonen",
        number: "050-5551234"
    },
    {
        id: 4,
        name: "Martti Tienari",
        number: "09-122434"
    }
]

app.get('/', (request, response) => {
    response.send('<h1>Welcome to PhoneBook</h1>')
})

app.get('/info', (request, response) => {
    const infoPage = `<p>Puhelinluettelossa ${persons.length} henkilön tiedot.</p> <p>${new Date}</p>`
    response.send(infoPage)
})

app.get('/api/persons', (request, response) => {
    response.json(persons)
})

app.get('/api/persons/:id', (request, response) => {
    const id = Number(request.params.id)
    const person = persons.find(p => p.id === id)
    if (person) {
        response.json(person)
    } else {
        response.status(404).end()
    }
})

app.delete('/api/persons/:id', (request, response) => {
    const id = Number(request.params.id)
    persons = persons.filter(person => person.id !== id)
    response.status(204).end()
})

const generateId = () => Math.floor(Math.random() * 1000000)

app.post('/api/persons', (request, response) => {
    const body = request.body
    if (!body.name) {
        return response.status(400).json({
            error: 'Name missing'
        })
    }
    if (!body.number) {
        return response.status(400).json({
            error: 'Number missing'
        })
    }
    const nameExists = persons.find(person => {
        person.name.toLowerCase === body.name.toLowerCase
    })
    if (nameExists) {
        return response.status(400).json({
            error: 'Name already exists'
        })
    }
    const person = {
        id: generateId(),
        name: body.name,
        number: body.number,
    }
    persons = persons.concat(person)
    response.json(person)
})

const PORT = 3001
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)
})