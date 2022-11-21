import express from 'express'

import {
    createDoctor,
    readDoctors,
    updateDoctor,
    deleteDoctor,
} from './../controllers/doctor.controller.js'

const router = express.Router()

router.post('/', createDoctor)
router.get('/', readDoctors)
router.patch('/:email', updateDoctor)
router.delete('/:email', deleteDoctor)

export default router
