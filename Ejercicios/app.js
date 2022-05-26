/* eslint-disable jest/require-hook */
const config = require('./utils/config')
const express = require('express')
const app = express()
const cors = require('cors')
const middleware = require('./utils/middleware')
const logger = require('./utils/logger')
const mongo = require('mongoose')

const notesRouter = require('./controllers/notes')
app.use('/api/notes', notesRouter)

const personRouter = require('./controllers/phonebook')
const { request } = require('express')

logger.info('connecting to', config.MONGODB_URI)

mongo.connect(config.MONGODB_URI)
    .then(() => {
        logger.info('connected to MongoDB')
    })
    .catch((error) => {
        logger.error('error connecting to MongoDB:', error.message)
    })

app.use(cors())
app.use(express.static('build'))
app.use(express.json())
app.use(requestLogger)

app.use('/api/notes', notesRouter)
app.use('/api/person', personRouter)

app.use(middleware.unknownEndpoint)
app.use(middleware.errorHandler)

module.exports = app