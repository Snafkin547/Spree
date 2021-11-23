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

-- erro code 1215 cannot add foreign key constraint
SHOW ENGINE INNODB STATUS.

-- Commands: verifies how the table was created to check if the user_id is a key
-- erro code 1215 cannot add foreign key constraint
SHOW ENGINE INNODB STATUS.
SHOW CREATE TABLE cp_user;

INSERT INTO product (`product_id`, `product_init`, `name`, `desc_item`, `category`,`price`, `quantity`, `img_src`, `created_at`) VALUES
(1, 'APLWTC', 'Apple Watch', '', 'eletronics', '399', 10, 'apple-watch-s7.jfif.jpg', '2021-11-8 17:55:22')

INSERT INTO cp_discount (`discount_code`, `discount_desc`, `type`, `value`, `expire_at`) VALUES
('CSFP5', 'Take 5% OFF your first purchase!!', 'percentage', 5.0, ''),
('FreeShipping', 'Free shipping on all orders!!', '', '', '2021-12-01 23:59:59');