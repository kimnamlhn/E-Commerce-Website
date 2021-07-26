const db = require('../utils/db');
const TBL_PRODUCT = 'product';

module.exports = {

    all : async function(){
        return await db.load(`select * from ${TBL_PRODUCT}`);
    },
    add : async function(entity) {
        return await db.add(entity, TBL_PRODUCT);
    },
    update : async function(newVal, idProduct, attribute) {
        const sql = `
        update ${TBL_PRODUCT} set ${attribute} = '${newVal}' where idProduct = ${idProduct}
        `;
        return await db.load(sql);    
    },
    single: async function(idCustomer){
        return await db.load(`select * from ${TBL_PRODUCT} where idProduct = ${idProduct} `);

    },

    hexProduct: async function(){
        const rows =  await db.load(`select * from ${TBL_PRODUCT} limit 6 `);
        // console.log(rows);
        if(rows.length === 0){
            return null;
        }
        return rows;
    },

    tripleProduct: async function(){
        const rows =  await db.load(`select * from ${TBL_PRODUCT} limit 3 `);
        // console.log(rows);
        if(rows.length === 0){
            return null;
        }
        return rows;
    },


    singleTest: async function(){
        return await db.load(`select * from ${TBL_PRODUCT} where idProduct = 1 `);

    },
    
}