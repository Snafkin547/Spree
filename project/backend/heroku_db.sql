USE heroku_993345239501248;

CREATE TABLE USER (
	Uid int NOT NULL AUTO_INCREMENT primary key,
	username CHAR(128) NOT NULL,
	password CHAR(128) NOT NULL,
	email CHAR(128),
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

CREATE TABLE `shopping_cart`.`product` (
    `id` INT(10) NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(100) NOT NULL,
    `desc` TEXT NOT NULL,
    `SKU` VARCHAR(50) NOT NULL,
    `category` VARCHAR(50) NOT NULL,
    `price` DECIMAL(6) NOT NULL,
    `discount_id` INT(5) DEFAULT '0',
    `created_at` TIMESTAMP NOT NULL,
    `modified_at` TIMESTAMP,
    UNIQUE KEY `prod_index` (`id`) USING BTREE,
    UNIQUE KEY `sku_index` (`id`,`SKU`) USING BTREE,
    PRIMARY KEY (`id`),
    CONSTRAINT `fk_prod_discount`
        FOREIGN KEY (`discount_id`)
        REFERENCES `shopping_cart`.`discount` (`id`)
        ON DELETE SET NULL
        ON UPDATE SET NULL
) ENGINE=InnoDB;

CREATE TABLE `shopping_cart`.`shopping_session` (
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
        REFERENCES `shopping_cart`.`payment_details` (`id`)
        ON DELETE SET NULL
        ON UPDATE SET NULL
) ENGINE=InnoDB;