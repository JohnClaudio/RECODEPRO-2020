create schema luthienshop;
use luthienshop;

create table produto(
id_produto int(11) NOT NULL AUTO_INCREMENT,
nome VARCHAR(70) NOT NULL,
nome_imagem varchar(100) NOT NULL UNIQUE,
categoria VARCHAR(50) NOT NULL,
descricao VARCHAR(150) NOT NULL,
preco DECIMAL(8,2) NOT NULL,
preco_desconto DECIMAL(8,2) NOT NULL,
PRIMARY KEY(id_produto));

create table pedido( 
id_pedido int(11) NOT NULL AUTO_INCREMENT,
nome VARCHAR(120) NOT NULL,
endereco VARCHAR(200) NOT NULL,
telefone VARCHAR(14) NOT NULL,
nome_produto VARCHAR(60) NOT NULL,
valor_unitario DECIMAL(8,2) NOT NULL,
qtd_produto int(5) NOT NULL,
valor_total DECIMAL(8,2) NOT NULL,
PRIMARY KEY(id_pedido));


insert into produto (nome,descricao,nome_imagem,preco,preco_desconto) values 
('Violino', 'Violino 4/4 Arco Madeira C/ Breu Cavalete Estojo Luxo','./shop_items/01.png',321.00,300.00),
('violino','Violino Eagle 4/4 Ve 441 + Estojo, Arco Crina E Breu','./shop_items/02.png',1100.00,919.99),
('violino','Violino 4/4 Ronsani Preto Estojo+ Arco+ Breu+ Estante+afinad','./shop_items/03.png',749.99,681.77),
('violino','Violino Artesanal Rolim Orquestra Profissional Tampo Inteiro','./shop_items/04.png',2000.00,1901.99);


