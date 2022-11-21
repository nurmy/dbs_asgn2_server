import pool from '../db.js'

export const createPublicServant = (req, res) => {
    try {
        const { email, department } = req.body
        pool.query(
            'INSERT INTO PublicServant VALUES($1, $2) RETURNING *',
            [email, department],
            (error, results) => {
                if (error) {
                    throw error
                }
                res.status(200).json(results.rows[0])
            }
        )
    } catch (e) {
        res.status(500).json({
            err: e,
        })
    }
}

export const readPublicServants = (req, res) => {
    try {
        pool.query(
            'SELECT * FROM PublicServant ORDER BY department ASC',
            (error, results) => {
                if (error) {
                    throw error
                }
                res.status(200).json(results.rows)
            }
        )
    } catch (e) {
        res.status(500).json({
            err: e,
        })
    }
}

export const updatePublicServant = (req, res) => {
    try {
        const { email } = req.params
        const { department } = req.body
        pool.query(
            'UPDATE PublicServant SET department = $2 WHERE email = $1 RETURNING *',
            [email, department],
            (error, results) => {
                if (error) {
                    throw error
                }
                res.status(200).json(results.rows[0])
            }
        )
    } catch (e) {
        res.status(500).json({
            err: e,
        })
    }
}

export const deletePublicServant = (req, res) => {
    try {
        const { email } = req.params
        pool.query(
            'DELETE FROM PublicServant WHERE email = $1 RETURNING *',
            [email],
            (error, results) => {
                if (error) {
                    throw error
                }
                res.status(200).json(results.rows[0])
            }
        )
    } catch (e) {
        res.status(500).json({
            err: e,
        })
    }
}
