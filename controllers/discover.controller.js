import pool from '../db.js'

export const createDiscover = (req, res) => {
    try {
        const { cname, disease_code, first_enc_date } = req.body
        pool.query(
            'INSERT INTO Discover VALUES($1, $2, $3) RETURNING *',
            [cname, disease_code, first_enc_date],
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

export const readDiscovers = (req, res) => {
    try {
        pool.query(
            'SELECT * FROM Discover ORDER BY cname ASC, disease_code ASC',
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

export const updateDiscover = (req, res) => {
    try {
        const { cname, disease_code } = req.params
        const { first_enc_date } = req.body
        pool.query(
            'UPDATE Discover SET first_enc_date = $3 WHERE cname = $1 AND disease_code = $2 RETURNING *',
            [cname, disease_code, first_enc_date],
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

export const deleteDiscover = (req, res) => {
    try {
        const { cname, disease_code } = req.params
        pool.query(
            'DELETE FROM Discover WHERE cname = $1 AND disease_code = $2 RETURNING *',
            [cname, disease_code],
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
