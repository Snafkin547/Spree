USE heroku_993345239501248;

CREATE TABLE cp_user (
	user_id int(10) ZEROFILL AUTO_INCREMENT PRIMARY KEY,
	username VARCHAR(128) NOT NULL,
	password TEXT(128) NOT NULL,
    first_name VARCHAR(128),
    last_name VARCHAR(128),
	email CHAR(128) NOT NULL,
    is_active CHAR(8) NOT NULL,
	isSeller TINYINT,
    created_at timestamp,
    UNIQUE KEY email (email ASC) 
);

-- Possibility to create country/cities tables to fetch for user information
-- had to add ZEROFILL on the user_id to be exactly the same
CREATE TABLE cp_user_address (
	id int(10) ZEROFILL AUTO_INCREMENT PRIMARY KEY,
	user_id int(10) ZEROFILL,
	deliver_to VARCHAR(128) NOT NULL,
	address_line1 VARCHAR(128) NOT NULL,
    address_line2 VARCHAR(128),
    city VARCHAR(128) NOT NULL,
    state VARCHAR(128) NOT NULL,
    postal_code VARCHAR(128) NOT NULL,
    country VARCHAR(128) NOT NULL,
    phone_number int(10),
    CONSTRAINT `fk_user_address`
        FOREIGN KEY (user_id) REFERENCES cp_user (user_id)
);

-- PCI compliant
CREATE TABLE cp_payment_details (
	id int(10) ZEROFILL AUTO_INCREMENT PRIMARY KEY,
	user_id int ZEROFILL,
    payment_type VARCHAR(128) NOT NULL,
    provider VARCHAaccount_noR(50) NOT NULL,
    name_on_card VARCHAR(128) NOT NULL,
    card_number VARCHAR(128) NOT NULL,
    exp_month int(5) NOT NULL,
    exp_year int(5) NOT NULL,
    security_code int(5) NOT NULL,
    bill_zipcode int(10) NOT NULL,
    CONSTRAINT `fk_payment_user`
        FOREIGN KEY (user_id) REFERENCES cp_user (user_id)
);

-- create a better one that can create the discount_code
CREATE TABLE cp_discount (
	discount_id int(8) NOT NULL AUTO_INCREMENT PRIMARY KEY,
    discount_desc CHAR(128),
	type VARCHAR(50),
	value DECIMAL(19,4),
    expire_at timestamp,
    discount_code CHAR(50) NOT NULL UNIQUE KEY
); 


--  product_code was created hopping I could concatinate product_id + product_init to generaye product_code but no success in setting it up
CREATE TABLE cp_product (
	product_id int(8) NOT NULL AUTO_INCREMENT PRIMARY KEY,
    product_init VARCHAR(50) NOT NULL,
	name VARCHAR(128) NOT NULL,
    desc_item TEXT NOT NULL,
    category VARCHAR(128) NOT NULL,
	price DECIMAL(19,4) NOT NULL,
	quantity INT NOT NULL,
	img_src TEXT NOT NULL,
    created_at timestamp,
    product_code CHAR(50) NOT NULL UNIQUE,
    discount_code CHAR(50),
    CONSTRAINT `fk_product_discount`
        FOREIGN KEY (discount_code) REFERENCES discount (discount_code)
); 

CREATE TABLE cp_shopping_session (
    id INT(30) NOT NULL AUTO_INCREMENT PRIMARY KEY ,
    user_id INT ZEROFILL,
    total DECIMAL(10) NOT NULL DEFAULT '0.00',
    created_at TIMESTAMP NOT NULL,
    modified_at TIMESTAMP,
    CONSTRAINT `fk_shopping_user`
        FOREIGN KEY (user_id) REFERENCES cp_user (user_id)       
);

CREATE TABLE cp_cart_item  (
    id INT(8) NOT NULL AUTO_INCREMENT PRIMARY KEY,
    session_id INT,
    product_id INT,
    quantity DECIMAL(8) NOT NULL,
    created_at TIMESTAMP NOT NULL,
    modified_at TIMESTAMP,
    CONSTRAINT `fk_cart_item_session`
        FOREIGN KEY (session_id) REFERENCES shopping_session (id),
    CONSTRAINT `fk_cart_item_product`
        FOREIGN KEY (product_id) REFERENCES cp_product (product_id)
);

CREATE TABLE cp_order_details (
    id INT(10) NOT NULL AUTO_INCREMENT PRIMARY KEY,
    user_id INT ZEROFILL,
    payment_id INT ZEROFILL,
    total DECIMAL(10) NOT NULL,    
    created_at TIMESTAMP NOT NULL,
    modified_at TIMESTAMP,
    CONSTRAINT `fk_order_user`
        FOREIGN KEY (user_id) REFERENCES cp_user (user_id),
    CONSTRAINT `fk_order_payment`
        FOREIGN KEY (payment_id) REFERENCES cp_payment_details (id)
);

CREATE TABLE cp_order_items  (
    id INT NOT NULL AUTO_INCREMENT PRIMARY KEY ,
    order_id INT,
    product_id INT,
    created_at TIMESTAMP NOT NULL,
    modified_at TIMESTAMP,
    CONSTRAINT `fk_order_items_details`
        FOREIGN KEY (order_id) REFERENCES order_details (id),
    CONSTRAINT `fk_order_items_product`
        FOREIGN KEY (product_id) REFERENCES cp_product (product_id)   
);