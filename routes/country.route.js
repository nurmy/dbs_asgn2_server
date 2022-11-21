import express from 'express'

import {
    createCountry,
    readCountries,
    updateCountry,
    deleteCountry,
} from './../controllers/country.controller.js'

const router = express.Router()

router.post('/', createCountry)
router.get('/', readCountries)
router.patch('/:cname', updateCountry)
router.delete('/:cname', deleteCountry)

export default router
