import express from 'express'
import bodyParser from 'body-parser'
import cors from 'cors'

import diseasetypeRouter from './routes/diseasetype.route.js'
import countryRouter from './routes/country.route.js'
import diseaseRouter from './routes/disease.route.js'
import discoverRouter from './routes/discover.route.js'
import usersRouter from './routes/users.route.js'
import publicservantRouter from './routes/publicservant.route.js'
import doctorRouter from './routes/doctor.route.js'
import specializeRouter from './routes/specialize.route.js'
import recordRouter from './routes/record.route.js'

const app = express()

app.use(bodyParser.json())
app.use(cors())

app.use('/diseasetype', diseasetypeRouter)
app.use('/country', countryRouter)
app.use('/disease', diseaseRouter)
app.use('/discover', discoverRouter)
app.use('/users', usersRouter)
app.use('/publicservant', publicservantRouter)
app.use('/doctor', doctorRouter)
app.use('/specialize', specializeRouter)
app.use('/record', recordRouter)

export default app
