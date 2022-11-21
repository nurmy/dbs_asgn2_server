import express from 'express'

import {
    createRecord,
    readRecords,
    updateRecord,
    deleteRecord,
} from './../controllers/record.controller.js'

const router = express.Router()

router.post('/', createRecord)
router.get('/', readRecords)
router.patch('/:email/:cname/:disease_code', updateRecord)
router.delete('/:email/:cname/:disease_code', deleteRecord)

export default router
