const mysql = require("mysql");

parameters = {
  host: "fintechsg.mysql.database.azure.com",
  port: 3306,
  user: "fintechlab@fintechsg",
  password: "FinTechSG2021",
  database: "b7g8_cheny",
};

connection = mysql.createConnection(parameters);

connection.connect((errors) => {
  if (errors) {
    console.log("Failed to connect to the database." + errors);
  } else {
    console.log("Connected to MySQL!");
  }
});

setInterval(() => {
  connection.query("SELECT 1");
}, 5000);

module.exports = {
  connection_from_databasejs: connection,
};