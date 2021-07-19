const db = require('../utils/db');
const TBL_CUSTOMER = 'customer';

module.exports = {

    all : async function(){
        return await db.load(`select * from ${TBL_CUSTOMER}`);
    },
    add : async function(entity) {
        return await db.add(entity, TBL_CUSTOMER);
    },
    update : async function(newVal, idUser, attribute) {
        const sql = `
        update ${TBL_CUSTOMER} set ${attribute} = '${newVal}' where idUser = ${idUser}
        `;
        return await db.load(sql);    
    },
    single: async function(idUser){
        return await db.load(`select * from ${TBL_CUSTOMER} where id = ${idUser} `);

    },

    singleByEmail: async function(email){
        const rows =  await db.load(`select * from ${TBL_CUSTOMER} where email = '${email}' `);
        if(rows.length === 0){
            return null;
        }
        return rows[0];
    }

    
}