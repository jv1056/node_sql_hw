var mysql = require("mysql");
var inquirer = require('inquirer');
require('nodemon');

var connection = mysql.createConnection({
  host: "localhost",

  // Your port; if not 3306
  port: 3306,

  // Your username
  user: "root",

  // Your password
  password: "jOKER357",
  database: "bamazon"
});




function buy(){
  readItems();
inquirer.prompt([
  {
    type: "input",
    name: "itemID",
    message: "Please enter the ID # of the item you would like to buy",
  },
  {
    type: "input",
    name: "quantity",
    message: "Please enter the quantity",
  }
]).then(function(answers) {
  transaction(answers);

});
}




connection.connect(function(err) {
  if (err) throw err;
  console.log("connected as id " + connection.threadId);
  // afterConnection();
});





function readItems() {
  console.log("Selecting all Items...\n");
  connection.query("SELECT * FROM products", function(err, res) {
  console.log(res);

  //how to read only select column values from tables?

  });
}

function transaction(answers){
  connection.query('SELECT * FROM `products` WHERE `id` = ?', answers.itemID, function (err, results, fields) {
    if (err) throw err;


    if (results[0].stock >= answers.quantity){
    var item = results[0];
    var newStockVal = item.stock - answers.quantity;
    var total = item.price * answers.quantity;

    console.log("your total is: $ " + total);
    updateStock(newStockVal, answers.itemID);

    }else{
      invalid();
    }

  });
}

function updateStock(newStockVal, productID){
  connection.query('UPDATE products SET quantity = ? WHERE id = ?', [newStockVal, productID], function (error, results, fields) {
  if (error) throw error;
  console.log(results);
  // ...
  connection.end();
});
buy();
}

function invalid(){
  console.log("Sorry it appears we don't have enough stock!");
  setTimeout(function(){ buy(); }, 2000);
}

buy();
