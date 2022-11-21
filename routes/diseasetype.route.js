import express from 'express'

import {
    createDiseaseType,
    readDiseaseTypes,
    updateDiseaseType,
    deleteDiseaseType,
} from './../controllers/diseasetype.controller.js'

const router = express.Router()

router.post('/', createDiseaseType)
router.get('/', readDiseaseTypes)
router.patch('/:id', updateDiseaseType)
router.delete('/:id', deleteDiseaseType)

export default router
