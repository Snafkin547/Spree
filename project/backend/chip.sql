CREATE DATABASE ChipSpree;
USE ChipSpree;

CREATE TABLE USER (
	Uid int NOT NULL AUTO_INCREMENT primary key,
	username CHAR(128) NOT NULL,
	firstname CHAR(128) NOT NULL,
	lastname CHAR(128) NOT NULL,
	password CHAR(128) NOT NULL,
	email CHAR(128) UNIQUE,
	isBuyer TINYINT,
	isSeller TINYINT
);
CREATE TABLE ITEM (
	Iid int NOT NULL AUTO_INCREMENT primary key,
	name CHAR(128) NOT NULL,
	price DECIMAL(19,4) NOT NULL,
	desc_item TEXT,
	quantity INT NOT NULL,
	src CHAR(255) NOT NULL
);

INSERT INTO ITEM (name, price, desc_item, quantity, src)
VALUES ('iPhone 13 Pro', 1200, 'Apple Inc, iphone13pro cellphone', 100, 'Testing');

INSERT INTO ITEM (name, price, desc_item, quantity, src)
VALUES ('Samsung Galaxy S21', 900, 'cellphone', 100, 'Testing');

CREATE USER 'chip'@'%' IDENTIFIED BY 'bumet673';
GRANT ALL PRIVILEGES ON ChipSpree.* TO 'chip'@'%' with grant option;
