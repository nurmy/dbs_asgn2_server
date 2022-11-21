import express from 'express'

import {
    createPublicServant,
    readPublicServants,
    updatePublicServant,
    deletePublicServant,
} from './../controllers/publicservant.controller.js'

const router = express.Router()

router.post('/', createPublicServant)
router.get('/', readPublicServants)
router.patch('/:email', updatePublicServant)
router.delete('/:email', deletePublicServant)

export default router
