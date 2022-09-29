
const express = require('express')
const MongoClient = require('mongodb').MongoClient
require("dotenv").config();
const cors = require('cors')

const app = express()
const port = 8080
app.use(cors())
app.use(express.json)
/*const url = "mongodb+srv://jaysiagrahari:12345mongodb@cluster0.kdudvvo.mongodb.net/Animal-king?retryWrites=true&w=majority"

mongoose.connect(url, { useNewUrlParser: true })
    .then(() => {
        console.log('Database Connected')
    }).catch(err => console.log(err))*/

app.get('/', (request, response) => {
  response.send('App is running');
})
app.get('/api/animal', (req, resp) => {
  database.collection('animal').find({}).toArray((err, result) => {
    if (err) throw err
    resp.send(result)

  })
})
app.listen(8080, () => {
  MongoClient.connect(`mongodb://localhost:27017`, { useNewUrlParser: true }, (error, result) => {


    if (error) throw err
    database = result.db('tymongo')
    console.log('database connected')
  })
})


  //app.use("/api", web)

















