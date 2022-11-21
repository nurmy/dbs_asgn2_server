import pool from '../db.js'

export const createDisease = (req, res) => {
    try {
        const { disease_code, pathogen, description, id } = req.body
        pool.query(
            'INSERT INTO Disease VALUES($1, $2, $3, $4) RETURNING *',
            [disease_code, pathogen, description, id],
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

export const readDiseases = (req, res) => {
    try {
        pool.query(
            'SELECT * FROM Disease ORDER BY disease_code ASC',
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

export const updateDisease = (req, res) => {
    try {
        const { disease_code } = req.params
        const { pathogen, description, id } = req.body
        pool.query(
            'UPDATE Disease SET pathogen = $2, description = $3, id = $4 WHERE disease_code = $1 RETURNING *',
            [disease_code, pathogen, description, id],
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

export const deleteDisease = (req, res) => {
    try {
        const { disease_code } = req.params
        pool.query(
            'DELETE FROM Disease WHERE disease_code = $1 RETURNING *',
            [disease_code],
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
