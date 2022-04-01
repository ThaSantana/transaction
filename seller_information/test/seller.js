const chai=require('chai')
const server=require('../server')
const chaihttp=require('chai-http')
const seller=require('../models/sellerModels')
const should=chai.should()
const mongoose=require('mongoose')
const res = require('express/lib/response')

chai.use(chaihttp)

describe('sellers',function(){
    before(function(next){
        Validar.next({},function(err){
            next();
        });
    });
    it('Criar um seller',function(done){
        var newSeller={
         seller_id: 1,
         name: "McDonalds",
         cnpj: "90891366000190",
         bankCode: 33,
         bankAccount: 1000,
         notes: "",
        }
        chai.request(server)
        .post('/v1/sellers/')
        .send(newSeller)
        .end(function(err,res){
            res.should.have.status(200);
            //res.body.should.propriety('seller');
            done();
        })
        
    });
    it('Encontrar Seller por id',function(done){
            const seller_id=1
            chai.request(server)
            .get('v1/sellers/'+ seller_id)
            .end((err, res) => {
                res.should.have.status(200);
                done();
            }

    )});

    it('Retornar um Seller de forma paginada',function(done){
        const seller = {
            seller_id: 6,
            name: "Marisa",
            cnpj: "98749730487216",
            bankCode: 33,
            bankAccount: 1000,
            notes: ""
        }
        chai.request(server)
            .patch(`/v1/sellers/${seller.seller_id}`)
            .send(seller)
            .end((err, res) => {
                res.should.have.status(200);
                done();
        
        
    });
    it('Alterar dados', function(done){
        var newSeller={
            seller_id: 1,
            name: "McDonalds",
            cnpj: "90891366000190",
            bankCode: 33,
            bankAccount: 1000,
            notes: "",
           }
           chai.request(server)
           .patch(`/v1/sellers/${seller.seller_id}`)
            .send(newSeller)
            .end((err, res) => {
                res.should.have.status(200);
                done();
        
            })
        })



    })
})
