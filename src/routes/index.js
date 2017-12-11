import express from 'express'

import config from '../config'
import initDb from '../db'

import gift from '../controller/gift'

let router = express()

initDb(DB => {

    // ROUTES GO HERE
    router.use('/', gift({ config, DB }))

});

export default router