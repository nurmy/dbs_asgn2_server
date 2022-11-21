import pool from '../db.js'

export const createRecord = (req, res) => {
    try {
        const { email, cname, disease_code, total_deaths, total_patients } =
            req.body
        pool.query(
            'INSERT INTO Record VALUES($1, $2, $3, $4, $5) RETURNING *',
            [email, cname, disease_code, total_deaths, total_patients],
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

export const readRecords = (req, res) => {
    try {
        pool.query(
            'SELECT * FROM Record ORDER BY email ASC, cname ASC, disease_code ASC',
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

export const updateRecord = (req, res) => {
    try {
        const { email, cname, disease_code } = req.params
        const { total_deaths, total_patients } = req.body
        pool.query(
            'UPDATE Record SET total_deaths = $4, total_patients = $5 WHERE email = $1 AND cname = $2 AND disease_code = $3 RETURNING *',
            [email, cname, disease_code, total_deaths, total_patients],
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

export const deleteRecord = (req, res) => {
    try {
        const { email, cname, disease_code } = req.params
        pool.query(
            'DELETE FROM Record WHERE email = $1 AND cname = $2 AND disease_code = $3 RETURNING *',
            [email, cname, disease_code],
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
