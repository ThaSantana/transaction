require('dotenv').config()
const Message=require('./message')
const CriarCalcChannel=require('./calcChannel')

var res='tax_calculation_res'
var req='tax_calculation_req'

let channel;

const consumirNmensagem = async (channel) => {
    channel.consume(res, async msg => { //consumir e entrar na resposta
        const message = JSON.parse(msg.content.toString());
        await channel.ack(msg);

        console.log(`Deu certo?`);
        console.log(message);
        return message;
        //Depois de enviar a mensagem, ele consome e mostra a resposta.
    });
}
const  publish= async (queue) =>{
    const calcChannel = new CriarCalcChannel()
    const channel = await calcChannel.createChannel()
    const message= new Message(1,200)
    console.log(message)
    await channel.sendToQueue(queue,Buffer.from(JSON.stringify(message)))
    await consumirNmensagem(channel)
    //Criar canal,criar mensagem,enviar mensagem para req
}
publish('tax_calculation_req')