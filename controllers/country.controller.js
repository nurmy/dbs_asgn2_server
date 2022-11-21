import pool from '../db.js'

export const createCountry = (req, res) => {
    try {
        const { cname, population } = req.body
        pool.query(
            'INSERT INTO Country VALUES($1, $2) RETURNING *',
            [cname, population],
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

export const readCountries = (req, res) => {
    try {
        pool.query(
            'SELECT * FROM Country ORDER BY cname ASC',
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

export const updateCountry = (req, res) => {
    try {
        const { cname } = req.params
        const { population } = req.body
        pool.query(
            'UPDATE Country SET population = $2 WHERE cname = $1 RETURNING *',
            [cname, population],
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

export const deleteCountry = (req, res) => {
    try {
        const { cname } = req.params
        pool.query(
            'DELETE FROM Country WHERE cname = $1 RETURNING *',
            [cname],
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
