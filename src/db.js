import mongoose from 'mongoose'

import config from './config'

const DB_URL = config.DB_URL

export default callback => {
    let DB = mongoose.connect(DB_URL);
    callback(DB);
}