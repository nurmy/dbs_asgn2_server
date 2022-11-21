import pool from '../db.js'

export const createDiseaseType = (req, res) => {
    try {
        const { id, description } = req.body
        pool.query(
            'INSERT INTO DiseaseType VALUES($1, $2) RETURNING *',
            [id, description],
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

export const readDiseaseTypes = (req, res) => {
    try {
        pool.query(
            'SELECT * FROM DiseaseType ORDER BY id ASC',
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

export const updateDiseaseType = (req, res) => {
    try {
        const { id } = req.params
        const { description } = req.body
        pool.query(
            'UPDATE DiseaseType SET description = $2 WHERE id = $1 RETURNING *',
            [id, description],
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

export const deleteDiseaseType = (req, res) => {
    try {
        const { id } = req.params
        pool.query(
            'DELETE FROM DiseaseType WHERE id = $1 RETURNING *',
            [id],
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
