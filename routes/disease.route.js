import express from 'express'

import {
    createDisease,
    readDiseases,
    updateDisease,
    deleteDisease,
} from './../controllers/disease.controller.js'

const router = express.Router()

router.post('/', createDisease)
router.get('/', readDiseases)
router.patch('/:disease_code', updateDisease)
router.delete('/:disease_code', deleteDisease)

export default router
