const mysql = require('mysql');
const con = mysql.createConnection({
    host: "crunch-database2.csxudt2oyi44.ca-central-1.rds.amazonaws.com:3306",
    user: "admin",
    password: "1234567890",
});
con.connect((err) => {
    if (err)
        throw err;
    console.log("Connected");
    con.end();
});
//# sourceMappingURL=dbseed.js.map