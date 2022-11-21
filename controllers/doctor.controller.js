import pool from '../db.js'

export const createDoctor = (req, res) => {
    try {
        const { email, degree } = req.body
        pool.query(
            'INSERT INTO Doctor VALUES($1, $2) RETURNING *',
            [email, degree],
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

export const readDoctors = (req, res) => {
    try {
        pool.query(
            'SELECT * FROM Doctor ORDER BY degree ASC',
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

export const updateDoctor = (req, res) => {
    try {
        const { email } = req.params
        const { degree } = req.body
        pool.query(
            'UPDATE Doctor SET degree = $2 WHERE email = $1 RETURNING *',
            [email, degree],
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

export const deleteDoctor = (req, res) => {
    try {
        const { email } = req.params
        pool.query(
            'DELETE FROM Doctor WHERE email = $1 RETURNING *',
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
