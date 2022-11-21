import pool from '../db.js'

export const createUser = (req, res) => {
    try {
        const { email, name, surname, salary, phone, cname } = req.body
        pool.query(
            'INSERT INTO Users VALUES($1, $2, $3, $4, $5, $6) RETURNING *',
            [email, name, surname, salary, phone, cname],
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

export const readUsers = (req, res) => {
    try {
        pool.query(
            'SELECT * FROM Users ORDER BY email ASC',
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

export const updateUser = (req, res) => {
    try {
        const { email } = req.params
        const { name, surname, salary, phone, cname } = req.body
        pool.query(
            'UPDATE Users SET name = $2, surname = $3, salary = $4, phone = $5, cname = $6 WHERE email = $1 RETURNING *',
            [email, name, surname, salary, phone, cname],
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

export const deleteUser = (req, res) => {
    try {
        const { email } = req.params
        pool.query(
            'DELETE FROM Users WHERE email = $1 RETURNING *',
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
