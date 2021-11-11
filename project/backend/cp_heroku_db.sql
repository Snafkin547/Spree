USE heroku_993345239501248;

SET @@auto_increment_increment=1;

CREATE TABLE cp_user (
	user_id int(10) ZEROFILL AUTO_INCREMENT,
	username VARCHAR(128) NOT NULL,
	password TEXT(128) NOT NULL,
    first_name VARCHAR(128),
    last_name VARCHAR(128),
	email CHAR(128) NOT NULL,
    is_active CHAR(8) NOT NULL,
	isSeller TINYINT,
    created_at timestamp,
    PRIMARY KEY (user_id),
    UNIQUE email_unique (email ASC) 
);

--User has address country/cities tables
CREATE TABLE cp_user_address (
	id int(10) ZEROFILL AUTO_INCREMENT,
	user_id int,
	address_line1 VARCHAR(128) NOT NULL,
    address_line2 VARCHAR(128),
    city VARCHAR(128) NOT NULL,
    state VARCHAR(128) NOT NULL
    postal_code VARCHAR(128) NOT NULL,
    country VARCHAR(128) NOT NULL,
    phone_number int(10),
    PRIMARY KEY (id),
    FOREIGN KEY (user_id) REFERENCES cp_user (user_id)
);

-- PCI compliant
CREATE TABLE cp_payment_details (
	id int(10) ZEROFILL AUTO_INCREMENT,
	user_id int,
	payment_type VARCHAR(128) NOT NULL,
    provider VARCHAR(128) NOT NULL,
    account_no int(10) NOT NULL,
    security_code int(5) NOT NULL,
    expiry DATE(5) NOT NULL,
    PRIMARY KEY (id),
    FOREIGN KEY (user_id) REFERENCES cp_user (user_id)
);

CREATE TABLE discount (
	discount_id int NOT NULL AUTO_INCREMENT,
    discount_code CHAR(50) NOT NULL UNIQUE,
    discount_desc CHAR(128),
	type VARCHAR(50),
	value DECIMAL(19,4),
    expire_at timestamp,
    PRIMARY KEY (discount_code)
); 

CREATE TABLE cp_product (
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
); 

CREATE TABLE shopping_session (
    id INT(30) NOT NULL AUTO_INCREMENT,
    user_id INT,
    total DECIMAL(10) NOT NULL DEFAULT '0.00',
    created_at TIMESTAMP NOT NULL,
    modified_at TIMESTAMP,
    PRIMARY KEY (`id`),
    CONSTRAINT `fk_shopping_user`
        FOREIGN KEY (`user_id`) REFERENCES cp_user (`user_id `)
       
);

CREATE TABLE cart_item  (
    id INT(8) NOT NULL AUTO_INCREMENT,
    session_id INT,
    product_id INT,
    quantity DECIMAL(8) NOT NULL,
    created_at TIMESTAMP NOT NULL,
    modified_at TIMESTAMP,
    PRIMARY KEY (id),
    FOREIGN KEY (session_id) REFERENCES shopping_session (id)
    FOREIGN KEY (product_id) REFERENCES cp_product (product_id)   
);

CREATE TABLE order_items  (
    id INT(8) NOT NULL AUTO_INCREMENT,
    order_id INT,
    product_id INT,
    created_at TIMESTAMP NOT NULL,
    modified_at TIMESTAMP,
    PRIMARY KEY (id),
    FOREIGN KEY (order_id) REFERENCES order_details (id)
    FOREIGN KEY (product_id) REFERENCES cp_product (product_id)   
);


CREATE TABLE order_details (
    id INT(20) NOT NULL AUTO_INCREMENT,
    user_id INT(10),
    total DECIMAL(10) NOT NULL,
    payment_id INT(20) NOT NULL,
    created_at TIMESTAMP NOT NULL,
    modified_at TIMESTAMP,
    UNIQUE KEY order_index (id),
    UNIQUE KEY `customer_order_index` (`id`,`user_id`) USING BTREE,
    PRIMARY KEY (id),
    CONSTRAINT `fk_shopping_user_order`
        FOREIGN KEY (user_id) REFERENCES cp_user (user_id)
    CONSTRAINT `fk_order_payment`
        FOREIGN KEY (payment_id) REFERENCES cp_payment_details (id)
);