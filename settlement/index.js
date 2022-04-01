const express=require('express')
const cors=require('cors')
const conectarMongo=require('./database/base')
const settlementRoutes=require('./routes/settlementRoutes')

const app = express();




app.use(cors());
app.use(express.json());
app.use('/v1/transactions',settlementRoutes)

async function criarMongo() {
    await conectarMongo().catch((err) => {
        console.log(`Error connecting to mongoDb. ${err}`);
    });

    app.listen(8080, console.log(`Conectado na porta 8080`));
}

criarMongo();