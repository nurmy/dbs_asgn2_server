import express from 'express'

import {
    createDiscover,
    readDiscovers,
    updateDiscover,
    deleteDiscover,
} from './../controllers/discover.controller.js'

const router = express.Router()

router.post('/', createDiscover)
router.get('/', readDiscovers)
router.patch('/:cname/:disease_code', updateDiscover)
router.delete('/:cname/:disease_code', deleteDiscover)

export default router
