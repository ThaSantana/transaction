const express = require('express');
const cors = require('cors');
const connectMongoDb = require('./db/conn');
const sellerRoutes = require('./routes/sellerRoutes');
const swaggerUi=require('swagger-ui-express')
const swaggerDocs=require('./swagger.json');
//const { validationResult, body } = require('express-validator');
//const bodyParse=require('body-parser')
const {errors}=require('celebrate')



const app = express();




app.use(cors());
app.use(express.json());
//app.use(bodyParse.json())
app.use('/documentation',swaggerUi.serve,swaggerUi.setup(swaggerDocs))
app.use('/v1/sellers',sellerRoutes)
app.use(errors())





async function createServer() {
    await connectMongoDb().catch((err) => {
        console.log(`Error connecting to mongoDb. ${err}`);
    });

    app.listen(3000, console.log('Conectado na porta 3000'));
}

createServer();


