DROP DATABASE IF EXISTS burgers_db;
CREATE DATABASE burgers_db;

USE burgers_db;

create table burgers (
id INT PRIMARY KEY AUTO_INCREMENT,
burger_name VARCHAR(255),
burger_description VARCHAR(510),
devoured boolean not null default 0
);

