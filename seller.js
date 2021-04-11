const databasejs = require("./database");
const express = require("express");
const { request, response } = require("express");

router = express.Router();

router.get("/seller/all", (request, response) => {
  databasejs.connection_from_databasejs.query(
    "select * from seller",
    (errors, results) => {
      if (errors) {
        console.log(errors);
        response.status(500).send("Some error occurred");
      } else {
        response.status(200).send(results);
      }
    }
  );
});

router.get("/seller/by_id", (request, response) => {
  databasejs.connection_from_databasejs.query(
    `select * from seller where seller_id = ${request.query.id}`,
    (errors, results) => {
      if (errors) {
        console.log(errors);
        response.status(500).send("Some error occurred");
      } else {
        response.status(200).send(results);
      }
    }
  );
});

router.post("/seller/add", (request, response) => {
  databasejs.connection_from_databasejs.query(
    `insert into seller (seller_name, seller_wallet) 
    values ('${request.body.name}','${request.body.wallet}')`,
    (errors, results) => {
      if (errors) {
        console.log(errors);
        response.status(500).send("Some error occurred");
      } else {
        response.status(200).send("Created successfully");
      }
    }
  );
});

function create_seller(name, wallet) {
  databasejs.connection_from_databasejs.query(
    `insert into seller (seller_name, seller_wallet) values ('${name}','${wallet}')`,
    (errors, results) => {
      if (errors) {
        console.log(errors);
      } else {
        console.log("Created successfully!");
      }
    }
  );
}

function delete_seller_by_id(id) {
  databasejs.connection_from_databasejs.query(
    `delete from seller where seller_id = '${id}'`,
    (errors, results) => {
      if (errors) {
        console.log(errors);
      } else {
        console.log("Deleted successfully!");
      }
    }
  );
}

function update_seller_wallet_by_id(id, wallet) {
  databasejs.connection_from_databasejs.query(
    `update seller set seller_wallet = '${wallet}' where seller_id = '${id}'`,
    (errors, results) => {
      if (errors) {
        console.log(errors);
      } else {
        console.log("Updated successfully!");
      }
    }
  );
}

// module.exports = {
//   get_all_sellers_from_sellerjs: get_all_sellers,
//   get_seller_by_id_from_sellerjs: get_seller_by_id,
//   create_seller_from_sellerjs: create_seller,
//   delete_seller_by_id_from_sellerjs: delete_seller_by_id,
//   update_seller_wallet_by_id_from_sellerjs: update_seller_wallet_by_id,
// };

module.exports = router;
