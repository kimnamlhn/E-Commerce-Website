const db = require('../utils/db');
const TBL_CUSTOMER = 'customer';
module.exports = {

    all() {
        return db.load(`select * from ${TBL_CUSTOMER}`);
      },
    
    // async single(id) {
    // const rows = await db.load(`select *,cast(MatKhau as char) AS MatKhau from ${TBL_CUSTOMER} where idTaiKhoan = ${id}`);
    // if (rows.length === 0)
    //     return null;

    // return rows[0];
    // },
    // async singleByUserName(username) {
    //     const rows = await db.load(`select *, cast(MatKhau as char) AS MatKhau from ${TBL_CUSTOMER} where TenTaiKhoan = '${username}'`);
    //     if (rows.length === 0)
    //       return null;
    
    //     return rows[0];
    //   },
    // add(entity) {
    // return db.add(entity, TBL_CUSTOMER)
    // },
    // lastId(){
    //     const sql = `select idTaiKhoan from TaiKhoan ORDER BY idTaiKhoan DESC LIMIT 1`;
    //     const lastid = db.load(sql);
    //     return lastid;
    // },
    // update(newVal, idTaiKhoan, attribute) {
    //   const sql = `
    //   update ${TBL_CUSTOMER} set ${attribute} = '${newVal}' where idTaiKhoan = ${idTaiKhoan}
    //   `;
    //   return db.load(sql);
    // },
    // async singleByidTaiKhoan(idTaiKhoan) {
    //   const rows = await db.load(`select *, cast(MatKhau as char) AS MatKhau from ${TBL_CUSTOMER} where idTaiKhoan = '${idTaiKhoan}'`);
    //   if (rows.length === 0)
    //     return null;
    //   return rows[0];
    // },
    
}


