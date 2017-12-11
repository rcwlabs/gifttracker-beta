import express from 'express'

import Gift from '../models/gifts'

const router = express.Router()

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

router.get('/gift/:gift_id', (req, res) => {
    Gift.findById(req.params.gift_id, (err, gift) => {
        if (err) {
            res.send(err)
        }
        res.json(gift)
    })
});

router.put('/gift/:gift_id', (req, res) => {
    Gift.findById(req.params.gift_id, (err, gift) => {
        if (err) {
            res.send(err)
        }
        if (req.body.recipient) {
            gift.recipient = req.body.recipient
        }
        if (req.body.notes) {
            gift.notes = req.body.notes
        }
        gift.save((err) => {
            if (err) {
                res.send(err)
            }
            res.json({message: "Gift successfully updated"})
        })
    })
});

router.delete('/gift/:gift_id', (req, res) => {
    Gift.remove({
        _id: req.params.gift_id
    }, (err, gift) => {
        if (err) {
            res.send(err)
        }
        res.json({ message: "Gift successfully removed" })
    })
});

export default router