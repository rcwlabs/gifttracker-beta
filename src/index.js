import express from 'express'
import bodyParser from 'body-parser'
import mongoose from 'mongoose'

import router from './routes'
import config from './config'

const app = express()
const PORT = config.PORT
const BODY_LIMIT = config.BODY_LIMIT

app.use(bodyParser.urlencoded({extended: true}))
app.use(bodyParser.json({
    limit: BODY_LIMIT
}))
app.use('/api', router)

app.get('/', (req, res) => {
    res.send('YES BABY...IT WORKS')
})

app.listen(PORT, () => {
    console.log('YAAASSSS')
})