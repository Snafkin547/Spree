USE heroku_993345239501248;

SET @@auto_increment_increment=1;

CREATE TABLE IF NOT EXISTS user (
	user_id int(10) ZEROFILL AUTO_INCREMENT,
	username VARCHAR(128) NOT NULL,
	password TEXT(128) NOT NULL,
    first_name VARCHAR(128) NOT NULL,
    last_name VARCHAR(128) NOT NULL,
	email CHAR(128) NOT NULL,
	isBuyer TINYINT,
    created_at timestamp,
    PRIMARY KEY (user_id),
    UNIQUE email_unique (email ASC) 
);

UPDATE `heroku_993345239501248`.`user` SET `user_id` = '000001' WHERE (`user_id` = '000005');

CREATE TABLE discount (
	discount_id int NOT NULL AUTO_INCREMENT,
    discount_code CHAR(50) NOT NULL UNIQUE,
    discount_desc CHAR(128),
	type VARCHAR(50),
	value DECIMAL(19,4),
    expire_at timestamp,
    PRIMARY KEY (discount_id)
); 

INSERT INTO discount (`discount_code`, `discount_desc`, `type`, `value`, `expire_at`) VALUES
('CSFP5', 'Take 5% OFF your first purchase!!', 'percentage', 5.0, ''),
('FreeShipping', 'Free shipping on all orders!!', '', '', '2021-12-01 23:59:59');

CREATE TABLE product (
	product_id int(8) NOT NULL AUTO_INCREMENT,
    product_init VARCHAR(50) NOT NULL,
	name VARCHAR(128) NOT NULL,
    desc_item TEXT NOT NULL,
    category VARCHAR(128) NOT NULL,
	price DECIMAL(19,4) NOT NULL,
	quantity INT NOT NULL,
	img_src TEXT NOT NULL,
    created_at timestamp,
    product_code VARCHAR(50) NOT NULL UNIQUE,
    discount_code CHAR(50),
    PRIMARY KEY (product_id),
    FOREIGN KEY (discount_code) REFERENCES discount (discount_code)
) ENGINE=InnoDB; 

CREATE TRIGGER insert_trigger
AFTER INSERT ON product
FOR EACH ROW
SET new.product_code = CONCAT(product.product_init, product.product_id);

INSERT INTO product (`product_id`, `product_init`, `name`, `desc_item`, `category`,`price`, `quantity`, `img_src`, `created_at`) VALUES
(1, 'APLWTC', 'Apple Watch', '', 'eletronics', '399', 10, 'apple-watch-s7-og-202110.jfif.jpg', '2021-11-8 17:55:22')


CREATE TABLE cart_item (
	Iid int NOT NULL AUTO_INCREMENT primary key,
	name CHAR(128) NOT NULL,
	price DECIMAL(19,4) NOT NULL,
	desc_item TEXT,
	quantity INT NOT NULL,
	src CHAR(255) NOT NULL
);


CREATE TABLE order_items (
	Iid int NOT NULL AUTO_INCREMENT primary key,
	name CHAR(128) NOT NULL,
	price DECIMAL(19,4) NOT NULL,
	desc_item TEXT,
	quantity INT NOT NULL,
	src CHAR(255) NOT NULL
);


CREATE TABLE payment_details (
	Iid int NOT NULL AUTO_INCREMENT primary key,
	name CHAR(128) NOT NULL,
	price DECIMAL(19,4) NOT NULL,
	desc_item TEXT,
	quantity INT NOT NULL,
	src CHAR(255) NOT NULL
);


CREATE TABLE `shopping_session` (
    `id` INT(30) NOT NULL AUTO_INCREMENT,
    `user_id` INT(10) DEFAULT NULL,
    `total` DECIMAL(10) NOT NULL DEFAULT '0.00',
    `created_at` TIMESTAMP NOT NULL,
    `modified_at` TIMESTAMP,
    UNIQUE KEY `session_index` (`id`,`user_id`) USING BTREE,
    PRIMARY KEY (`id`),
    CONSTRAINT `fk_shopping_user`
        FOREIGN KEY (`user_id`)
        REFERENCES `shopping_cart`.`user` (`id`)
        ON DELETE SET NULL
        ON UPDATE SET NULL
) ENGINE=InnoDB;

CREATE TABLE `order_details` (
    `id` INT(20) NOT NULL AUTO_INCREMENT,
    `user_id` INT(10),
    `total` DECIMAL(10) NOT NULL,
    `payment_id` INT(20) NOT NULL,
    `created_at` TIMESTAMP NOT NULL,
    `modified_at` TIMESTAMP,
    UNIQUE KEY `order_index` (`id`) USING BTREE,
    UNIQUE KEY `customer_order_index` (`id`,`user_id`) USING BTREE,
    PRIMARY KEY (`id`),
    CONSTRAINT `fk_shopping_user_order`
        FOREIGN KEY (`user_id`)
        REFERENCES `shopping_cart`.`user` (`id`)
        ON DELETE SET NULL
        ON UPDATE SET NULL,
    CONSTRAINT `fk_order_payment`
        FOREIGN KEY (`payment_id`)
        REFERENCES `payment_details` (`id`)
        ON DELETE SET NULL
        ON UPDATE SET NULL
) ENGINE=InnoDB;