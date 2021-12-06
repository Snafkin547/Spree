-- Useful mysql commands

-- set the auto incrementation to 1 in <table> that has AUTO INCREMENT
SET @auto_increment_increment=1;

-- update a field value from a table
UPDATE `heroku_993345239501248`.`cp_user` SET `user_id` = '000001' WHERE (`user_id` = '000005');

-- order the tables can be dropped based on foreign keys
drop table cp_order_items;
drop table cp_order_details;
drop table cp_cart_item;
drop table cp_shopping_session;
drop table cp_product;
drop table cp_discount;
drop table cp_payment_details;
drop table cp_user_address;
drop table cp_user;

-- erro code 1215 cannot add foreign key constraint, check the status of engine
SHOW ENGINE INNODB STATUS.

-- Commands: verifies how the table was created to check if the user_id is a key
SHOW CREATE TABLE cp_user;

-- Insert statements 
INSERT INTO cp_product (`product_init`, `name`, `desc_item`, `category`,`price`, `quantity`, `img_src`, `product_code`) VALUES
                       ('APLWTC', 'Apple Watch Series 7', '45mm Midnight Aluminum', 'eletronics', '399', 19, 'img/apple-watch-series-7.jpg', 'APLWTC1')

INSERT INTO cp_discount (`discount_code`, `discount_desc`, `type`, `value`, `expire_at`) VALUES
('CSFP5', 'Take 5% OFF your first purchase!!', 'percentage', 5.0, ''),
('FreeShipping', 'Free shipping on all orders!!', '', '', '2021-12-01 23:59:59');

-- Alter table add/drop columns
alter table cp_payment_details ADD name_on_card VARCHAR(128) NOT NULL; 
alter table cp_payment_details ADD card_number VARCHAR(128) NOT NULL; 
alter table cp_payment_details ADD exp_month int(5) NOT NULL; 
alter table cp_payment_details ADD exp_year int(5) NOT NULL;
alter table cp_payment_details ADD bill_zipcode int(10) NOT NULL; 
ALTER TABLE cp_payment_details DROP COLUMN account_no;
ALTER TABLE cp_payment_details DROP COLUMN expiry;

-- Change column position in table
ALTER TABLE cp_payment_details MODIFY security_code int(5) NOT NULL AFTER bill_zipcode;
ALTER TABLE cp_user_address ADD COLUMN delivery_to VARCHAR(128) NOT NULL FIRST;
DELETE FROM cp_user_address;