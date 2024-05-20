const cds = require('@sap/cds');
module.exports = cds.service.impl(async function(){
    this.on('READ','Products',async req=>{
        try{
         const service = await cds.connect.to("Northwind");
            let result = await service.tx(req).run(req.query);
            return result;
        }
        catch(error){
            req.error('500',error);
        }
    });
});