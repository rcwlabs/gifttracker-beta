import { Router } from 'express'
import mongoose from 'mongoose'

import Gift from '../models/gift'

export default({ config, DB }) => {
    let router = Router();

    router.get('/', (req, res) => {
        res.send('YES THIS API IS SO SO MMMMMM')
    });
    
    router.post('/gift', (req, res) => {
        let newGift = new Gift()
        newGift.recipient = req.body.recipient
        newGift.gift = req.body.gift
        newGift.price = req.body.price
        newGift.store = req.body.store
        newGift.notes = req.body.notes
    
        newGift.save((err) => {
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

    return router;

}

