const express = require('express');
const app = express();
const http = require('http');
const nwProduct = require('./Router/nwProduct')
const{json} = require('express');

app.use(json())
app.use(express.urlencoded({extended:false}))

app.use('/api/nwProducts',nwProduct)

app.listen(6000, () => console.log('*** listen port 6000 started ****'));