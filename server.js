const express = require('express')
const connectDB = require('./config/db')
const path = require('path')

const app = express()
connectDB()

app.use(express.json({ extended: false }))

app.get('/', (req, res) => res.send("Api is running "))

app.use('/api/users', require('./routers/api/users'))
app.use('/api/book', require('./routers/api/users'))
app.use('/api/auth', require('./routers/api/auth'))
app.use('/api/search', require('./routers/api/searchBus'))



if (process.env.NODE_ENV === 'production') {
    app.use(express.static('client/build'))

    app.get('*', (req, res) => {
        res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'))
    })
}


const PORT = process.env.PORT || 8000;

app.listen(PORT, () => console.log(`server is running on port  ${PORT}`))