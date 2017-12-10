import express from 'express'
import bodyParser from 'body-parser'
import mongoose from 'mongoose'

import config from './config'
import Gift from './models/gifts'

const app = express()
const PORT = config.PORT
const DB_URL = config.DB_URL
const router = express.Router()

mongoose.connect(DB_URL)

app.use(bodyParser.urlencoded({extended: true}))
app.use(bodyParser.json())
app.use('/api', router)

app.get('/', (req, res) => {
    res.send('YES BABY...IT WORKS')
})

router.get('/', (req, res) => {
    res.send('YES THIS API IS SO SO MMMMMM')
})

router.post('/gift', (req, res) => {
    let gift = new Gift()
    gift.recipient = req.body.recipient
    gift.gift = req.body.gift
    gift.price = req.body.price
    gift.store = req.body.store
    gift.notes = req.body.notes

    gift.save((err) => {
        if (err) {
            res.send(err)
        }
        res.json({message: "Gift saved successfully"})
    })
});

router.get('/gifts', (req, res) => {
    Gift.find((err, gifts) => {
        if (err) {
            res.send(err)
        }
        res.json(gifts)
    })
});

app.listen(PORT, () => {
    console.log('YAAASSSS')
})