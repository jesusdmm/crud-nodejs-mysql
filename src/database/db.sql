-- creating database
CREATE DATABASE crudnodejsmysql;

-- using database
use crudnodejsmysql;

-- creating a table
CREATE TABLE customer (
    id INT(6) UNSIGNED AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(50) NOT NULL,
    address VARCHAR(100) NOT NULL,
    phone VARCHAR(15)
);

-- tp show all tables
SHOW TABLES;

-- to describe the table
describe customer;

select * from customer;


ALTER USER 'root'@'localhost' IDENTIFIED WITH mysql_native_password BY '1234';

-- copiar y pegar para regenerar la tabla de mysql