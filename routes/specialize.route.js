import express from 'express'

import {
    createSpecialize,
    readSpecializes,
    deleteSpecialize,
} from './../controllers/specialize.controller.js'

const router = express.Router()

router.post('/', createSpecialize)
router.get('/', readSpecializes)
router.delete('/:id/:email', deleteSpecialize)

export default router
