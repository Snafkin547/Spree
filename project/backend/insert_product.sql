CREATE TRIGGER insert_trigger
AFTER INSERT ON product
FOR EACH ROW
SET new.product_code = CONCAT(product.product_init, product.product_id);


-- Commands: verifies how the table was created to check if the user_id is a key
-- erro code 1215 cannot add foreign key constraint
SHOW ENGINE INNODB STATUS.
SHOW CREATE TABLE cp_user;

SET @auto_increment_increment=1;

INSERT INTO product (`product_id`, `product_init`, `name`, `desc_item`, `category`,`price`, `quantity`, `img_src`, `created_at`) VALUES
(1, 'APLWTC', 'Apple Watch', '', 'eletronics', '399', 10, 'apple-watch-s7.jfif.jpg', '2021-11-8 17:55:22')

UPDATE `heroku_993345239501248`.`user` SET `user_id` = '000001' WHERE (`user_id` = '000005');

INSERT INTO discount (`discount_code`, `discount_desc`, `type`, `value`, `expire_at`) VALUES
('CSFP5', 'Take 5% OFF your first purchase!!', 'percentage', 5.0, ''),
('FreeShipping', 'Free shipping on all orders!!', '', '', '2021-12-01 23:59:59');

column_virt INT(10) AS (column_1 + column_2) NOT NULL,
KEY column_2_column_3_idx (column_2, column_3),