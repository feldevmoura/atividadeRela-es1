CREATE TABLE products (
id INT AUTO_INCREMENT PRIMARY KEY,
name VARCHAR(100),
description VARCHAR(200),
product_type INT,
preco FLOAT
);

INSERT INTO products (name, description, product_type, preco) 
VALUES('iphone', 'Smartphone caro', 1,12999),
	  ('macbook', 'Mackbook pro 13pol mi', 1, 10999),
      ('lava e seca', 'Lavadora de Roupas Samsung WW4000 Digital Inverter ww1134473PX Inox Look-11kg', 2, 2999);

CREATE TABLE product_types (
	id INT AUTO_INCREMENT PRIMARY KEY,
	name VARCHAR(50),
    description VARCHAR(200)
);

INSERT INTO product_types (name, description) 
VALUES('Eletronico', 'Eletronicos'),
	  ('Eletrodoméstico', 'Eletrodomésticos'),
      ('Bebida','Bebidas');
      