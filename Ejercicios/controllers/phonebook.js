/* eslint-disable jest/require-hook */
const personRouter = require('express').Router()
const Person = require('../models/person')

personRouter.delete('/:id', (request, response, next) => {
    Person.findByIdAndRemove(request.params.id)
        .then(() => {
            response.status(204).end()
        })
        .catch((error) => next(error))
})

personRouter.put('/api/phonebook/:id', (request, response, next) => {
    const body = request.body

    const pers = {
        name: body.name,
        number: body.number,
    }
    const opts = {
        runValidators: true,
        new: true,
        context: 'query',
    }

    Person.findByIdAndUpdate(request.params.id, pers, opts)
        .then((updatePerson) => {
            response.json(updatePerson)
        })
        .catch((error) => next(error))
})

personRouter.get('/', (request, response) => {
    Person.find({}).then((persona) => {
        response.json(persona)
    })
})

personRouter.get('/:id', (request, response, next) => {
    Person.findById(request.params.id)
        .then((pers) => {
            if (pers) {
                response.json(pers)
            } else {
                response.status(404).end()
            }
        })
        .catch((error) => next(error))
})

personRouter.post('/', (request, response, next) => {
    if (!request.body.name || !request.body.number) {
        return response
            .status(400)
            .json({ error: 'Name or/and number are missing' })
    }

    const persona = new Person({
        name: request.body.name,
        number: request.body.number,
        id: '',
    })

    Person.findById(request.params.id)
        .then((foundPerson) => {
            console.log('dato', foundPerson)
            if (foundPerson) {
                const opts = {
                    runValidators: true,
                    new: true,
                    context: 'query',
                }
                console.log('encontrado actualizando')
                Person.findByIdAndUpdate(request.params.id, foundPerson, opts)
                    .then((updatePerson) => {
                        response.json(updatePerson)
                    })
                    .catch((error) => next(error))
            } else {
                persona
                    .save()
                    .then((guardarP) => {
                        response.json(guardarP)
                    })
                    .catch((error) => next(error))
            }
        })
        .catch((error) => next(error))

    // eslint-disable-next-line no-unused-vars
    /*
    morgan.token('valores', function (req, res) {
        return [`{"name": ${req.body.name}, "number": ${req.body.number} }`]
    })
    */
})

module.exports = personRouter