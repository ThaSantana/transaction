const transactions=require('./models/transactions')
const {v4}=require('uuid')
const { Timestamp } = require('mongodb')

class transactionServ{
        
    async createTransactions(){
        let transactions=[]

        for(let i=0;i<10;i++)
       console.log(i)
    }
}