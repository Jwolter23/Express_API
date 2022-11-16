const express = require('express')
const cors = require('cors')
const logger = require('morgan')
const companys = require('./Controllers/Company')
const stocks = require('./Controllers/Stock')
const PORT = process.env.PORT || 3001

const app = express()



app.use(cors())
app.use(logger('dev'))
app.use(express.json())
app.use(express.urlencoded({ extended: false}))



app.get('/', (req, res) => {
    res.send({msg: 'Welcome to Mock Express API'})
})

app.get('/Company', companys.getCompany)

app.get('/Stocks', stocks.getStock)




app.listen(PORT, () => {
    console.log(`Express  server listening on port ${PORT} `)
})
