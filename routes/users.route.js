import express from 'express'

import {
    createUser,
    readUsers,
    updateUser,
    deleteUser,
} from './../controllers/users.controller.js'

const router = express.Router()

router.post('/', createUser)
router.get('/', readUsers)
router.patch('/:email', updateUser)
router.delete('/:email', deleteUser)

export default router
