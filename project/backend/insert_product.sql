CREATE TRIGGER insert_trigger
AFTER INSERT ON product
FOR EACH ROW
SET new.product_code = CONCAT(product.product_init, product.product_id);

INSERT INTO product (`product_id`, `product_init`, `name`, `desc_item`, `category`,`price`, `quantity`, `img_src`, `created_at`) VALUES
(1, 'APLWTC', 'Apple Watch', '', 'eletronics', '399', 10, 'apple-watch-s7-og-202110.jfif.jpg', '2021-11-8 17:55:22')

UPDATE `heroku_993345239501248`.`user` SET `user_id` = '000001' WHERE (`user_id` = '000005');

INSERT INTO discount (`discount_code`, `discount_desc`, `type`, `value`, `expire_at`) VALUES
('CSFP5', 'Take 5% OFF your first purchase!!', 'percentage', 5.0, ''),
('FreeShipping', 'Free shipping on all orders!!', '', '', '2021-12-01 23:59:59');