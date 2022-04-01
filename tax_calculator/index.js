require('dotenv').config()
const Messagem=require('./src/message')
const criarCalcChannel=require('./src/calcChannel')
const express=require('express')

var res='tax_calculation_res'
var req='tax_calculation_req'

async function calcTaxa(channel, message){

    const messagem = new Messagem(message.seller_id, message.amount);
    console.log('tudo certo...');
    console.log(messagem);

    messagem.calculateTax();

     const respJson = JSON.stringify(messagem);
     await channel.sendToQueue(res, Buffer.from(respJson));
     console.log('mensagem na fila...');
     //pegou a mensagem, transformou em objeto e calcular
}


const consumirMsg = async (queue) => {
    const calcChannel = new criarCalcChannel();
    const channel = await calcChannel.createChannel();
        console.log(queue)
    channel.consume(queue, async msg => {
       const resposta= JSON.parse(msg.content.toString());
         await channel.ack(msg);
           console.log(resposta)
         await calcTaxa(channel, resposta);
       //pegar o canal e conectar ,pegar mensagens da req
    });
}
consumirMsg(req)