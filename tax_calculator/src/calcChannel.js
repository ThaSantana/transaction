    require('dotenv').config()
const {channel,connect}=require('amqplib')

var server='amqp://dev:devteste@localhost:5672'
var res='tax_calculation_res'
var req='tax_calculation_req'

class CriarCalcChannel{
    
    async createChannel () {
        try {
            console.log(server)
            const connection = await connect(server);
            const channel = await connection.createChannel();

            await channel.assertQueue(req);
            await channel.assertQueue(res);
            
            console.log('Conectado...');
            return channel;
        } catch (err) {
            console.log('Não conectou')
            console.log(err);
            return null;
        }
    }
}

module.exports = CriarCalcChannel;