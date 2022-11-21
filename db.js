import pg from 'pg'

const Pool = pg.Pool
const pool = new Pool({
    user: 'ujpakrov',
    host: 'mouse.db.elephantsql.com',
    database: 'ujpakrov',
    password: 'NQ_ZUKTcyU9I1z1b5UYesXDBoMQXIlx2',
    port: 5432,
})

export default pool
