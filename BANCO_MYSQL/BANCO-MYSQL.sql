create schema luthienshop;
use luthienshop;

create table produto(
id_produto int(11) NOT NULL AUTO_INCREMENT,
nome_imagem varchar(100) NOT NULL UNIQUE,
categoria VARCHAR(70) NOT NULL,
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


insert into produto (categoria,descricao,nome_imagem,preco,preco_desconto) values 
('Violino', 'Violino 4/4 Arco Madeira C/ Breu Cavalete Estojo Luxo','./shop_items/01.png',321.00,300.00),
('violino','Violino Eagle 4/4 Ve 441 + Estojo, Arco Crina E Breu','./shop_items/02.png',1100.00,919.99),
('violino','Violino 4/4 Ronsani Preto Estojo+ Arco+ Breu+ Estante+afinad','./shop_items/03.png',749.99,681.77),
('violino','Violino Artesanal Rolim Orquestra Profissional Tampo Inteiro','./shop_items/04.png',2000.00,1901.99),
('violino','Kit Violino Dominante 4/4 Completo Estante Afinador Espaleir','./shop_items/05.png',2200.00,2099.99),
('violino','Kit Violino Dominante 4/4 Completo Vermont ','./shop_items/06.png',600.00,519.99),
('teclado','Kit Teclado Casio Tone Ct-s100 Musical 61 Teclas Preto ','./shop_items/07.png',880.00,799.99),
('teclado','teclado Musical Yamaha Psr F51 61 Teclas C/ Fonte E Suporte ','./shop_items/08.png',1000.00,945.99),
('teclado','Teclado Roland Go Keys Bluetooth Go61k Kit Completo Go-61k ','./shop_items/09.png',2300.00,1999.99),
('violao','Violão eletroacústico Michael Galaxy VM925DTC abeto black ','./shop_items/10.png',1200.00,1009.99),
('violao','Violão eletroacústico Michael Galaxy VM925DT abeto mahogany ','./shop_items/11.png',900.00,799.99),
('flauta','Flauta Transversal Shelter Em Dó Com Estojo Tjs6456n','./shop_items/12.png',980.00,899.99),
('flauta','Flauta Doce Yamaha Yrs23 G Soprano Germanica','./shop_items/13.png',50.00,39.99),
('guitarra','Guitarra Super Strato Preta Waldman Com 2 Humbucker Gtu-1 Bka','./shop_items/14.png',600.00,564.99),
('guitarra','VGuitarra Phx Marvel Gmi-1 Iron Man','./shop_items/15.png',750.00,699.99),
('ukulele','Ukulele Kulele Soprano + Brinde','./shop_items/16.png',400.00,319.99);

