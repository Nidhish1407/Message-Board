const express = require('express')
const path = require('path');
const app = express()
const port = 3000

const {router:index} = require('./routers/index');
const form = require('./routers/new');

//const index = require(path.join(__dirname,'routers'));

app.use(express.urlencoded({ extended: false }))
app.use(express.json())


app.set('views',path.join(__dirname,'views'));
app.set('view engine','ejs');

app.use('/', index);
app.use('/new',form);

let host = '127.0.0.1'
app.listen(port,host, () => {
    console.log(`App listening on port ==> http://${host}:${port}/`)
})



