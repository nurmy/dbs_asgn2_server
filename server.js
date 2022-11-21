import app from './express.js'

app.listen(8080, (err) => {
    if (err) {
        console.log(err)
    }
    console.log(`listening on port 8080`)
})
