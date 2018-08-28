DROP DATABASE IF EXISTS bamazon;

CREATE DATABASE bamazon;

USE bamazon;

CREATE TABLE products (
  id INT NOT NULL AUTO_INCREMENT,
  product_name VARCHAR(45) NOT NULL,
  department VARCHAR(45) NOT NULL,
  price DECIMAL(10,2) NULL,
  stock INT (10),
  PRIMARY KEY (id)
);

INSERT INTO products (product_name, department, price, stock)
VALUES ("Camera-FM2", "photgraphy", 300.00, 100);

INSERT INTO products (product_name, department, price, stock)
VALUES ("Imacon Scanner", "photgraphy", 10000.00, 2);

INSERT INTO products (product_name, department, price, stock)
VALUES ("Profoto Strob", "photgraphy", 1200.00, 10);

INSERT INTO products (product_name, department, price, stock)
VALUES ("Camera-MamiyaRZ", "photgraphy", 800.00, 10);

INSERT INTO products (product_name, department, price, stock)
VALUES ("Camera-M7II", "photgraphy", 2000.00, 3);

INSERT INTO products (product_name, department, price, stock)
VALUES ("Camera-Wista4x5", "photgraphy", 1500.00, 5);

INSERT INTO products (product_name, department, price, stock)
VALUES ("Color-Film35mm", "photgraphy", 8.00, 130);

INSERT INTO products (product_name, department, price, stock)
VALUES ("B&W-Film35mm", "photgraphy", 6.00, 100);
