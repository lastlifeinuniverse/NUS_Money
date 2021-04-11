const seller_router = require("./seller");
const express = require("express");
const body_parser = require("body-parser");
const cors = require("cors");

service = express();

service.use(cors());
service.use(body_parser.json());
service.use(seller_router);

// Now the service can listen to requests on 127.0.0.1:3000
service.listen(3000);


//to import the functions in current directory

//const sellerjs = require("./seller");

//*CREATE

//sellerjs.insert_seller_into_sellerjs(99,'"abc"',12345);

//*READ

//sellerjs.get_all_sellers_from_sellerjs();

//sellerjs.get_seller_by_id_from_sellerjs(99);

//*UPDATE

//sellerjs.update_seller_in_sellerjs('99', '"Andrew"', 0);

//*DELETE

//sellerjs.del_seller_by_id_from_sellerjs(99);

// const customerjs = require("./customer");

// customerjs.get_all_customers_from_customersjs();

// const productjs = require("./product");

// productjs.get_all_products_from_productjs();