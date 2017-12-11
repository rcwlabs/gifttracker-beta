import mongoose, { Schema } from 'mongoose'

let GiftSchema = new Schema({
    recipient: String,
    gift: String,
    price: Number,
    store: String,
    purchased: { type: Boolean, default: false },
    notes: String,
    date: { type: Date, default: Date.now }
})

export default mongoose.model('Gift', GiftSchema)