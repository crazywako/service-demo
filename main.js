import path from 'path'
import bodyParser from 'body-parser'
import express from 'express'
import config from './config'
import dotenv from 'dotenv'
dotenv.config()


const app = express();
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())
console.log('Public path = ' + config.publicPath)
app.use(config.publicPath, express.static('dist'))

app.get('*', (req, res) => {
    res.sendFile(path.resolve('./dist/index.html'))
})

const port = process.env.PORT || 8080
app.listen(port, () => {
    console.log('Listening on port :' + port)
})
