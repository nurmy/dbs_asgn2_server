import pool from '../db.js'

export const createSpecialize = (req, res) => {
    try {
        const { id, email } = req.body
        pool.query(
            'INSERT INTO Specialize VALUES($1, $2) RETURNING *',
            [id, email],
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

export const readSpecializes = (req, res) => {
    try {
        pool.query(
            'SELECT * FROM Specialize ORDER BY email ASC, id ASC',
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

export const deleteSpecialize = (req, res) => {
    try {
        const { id, email } = req.params
        pool.query(
            'DELETE FROM Specialize WHERE id = $1 AND email = $2 RETURNING *',
            [id, email],
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
