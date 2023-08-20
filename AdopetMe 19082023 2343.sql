CREATE database AdopetMe;
use AdopetMe;
-- drop database AdopetMe;

CREATE TABLE UFs
(
idUF CHAR(2) PRIMARY KEY,
nmUF VARCHAR(50),
siglaUF VARCHAR(2)
);

CREATE TABLE Cidades 
( 
 idCidade CHAR(7) PRIMARY KEY,  
 nmCidade VARCHAR(50),  
 idUF CHAR(2),
 CONSTRAINT idUF
	FOREIGN KEY (idUF)
		REFERENCES UFs(idUF)
); 

CREATE TABLE Ong 
( 
 idONG INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
 nomeEstabelecimento VARCHAR(50), 
 nomeDiretor VARCHAR(50),
 codCnpj CHAR(14),
 email varchar(100),  
 cpfDiretor CHAR(11),
 idCidade char(7),
CONSTRAINT idCidade
	FOREIGN KEY(idCidade)
		REFERENCES Cidades(idCidade),
 rua VARCHAR(50),
 numeroEstabelecimento INT(4),
 codCEP CHAR(8),
 numeroTelefone VARCHAR(11),
 senha VARCHAR(50),
 imagem longblob
); 

CREATE TABLE RacaGatos 
( 
 idRaca CHAR(2) PRIMARY KEY,  
 nmRaca VARCHAR(70)
); 

CREATE TABLE RacaCachorro 
( 
 idRaca CHAR(2) PRIMARY KEY,  
 nmRaca VARCHAR(70)
); 

CREATE TABLE Pessoa 
( 
 idPessoa int PRIMARY KEY NOT NULL AUTO_INCREMENT,  
 nome VARCHAR(50),
 sobreNome VARCHAR(50),
 codCpf CHAR(11),
 email varchar(100),
 idCidade CHAR(7),
 CONSTRAINT FKidCidade
	FOREIGN KEY (idCidade)
		REFERENCES Cidades(idCidade),
 rua VARCHAR(50),
 numeroCasa INT(4),
 codCEP CHAR(8),
 sexo CHAR(1),
 apelido VARCHAR(50),
 numeroTelefone VARCHAR(11),
 senha VARCHAR(50),  
 dataNascimento datetime,
 imagem longblob
); 

CREATE TABLE PedidoAdocao 
( 
 idPedido INT PRIMARY KEY NOT NULL AUTO_INCREMENT,  
 idPessoa INT,
 CONSTRAINT idPessoa
	FOREIGN KEY(idPessoa)
		REFERENCES Pessoa(idPessoa),  
 dataPedido DATE,  
 idONG INT,
 CONSTRAINT idONG
	FOREIGN KEY (idONG)
		REFERENCES Ong(idONG)
); 

CREATE TABLE VacinasFelinas 
( 
 idVacina CHAR(2) PRIMARY KEY,  
 nmVacina VARCHAR(50),
 validadeVacina VARCHAR(5)
); 

CREATE TABLE VacinasCaninas 
( 
 idVacina CHAR(2) PRIMARY KEY,  
 nmVacina VARCHAR(50),
 validadeVacina VARCHAR(5)
); 

CREATE TABLE Animal 
( 
 idAnimal INT PRIMARY KEY NOT NULL AUTO_INCREMENT,  
 dataNascimento DATE,  
 idONG INT,
 CONSTRAINT FKidONG
	FOREIGN KEY (idONG)
		REFERENCES Ong(idONG),
 tipoRaca CHAR(1),  
 racaCachorro CHAR(2) null,
 CONSTRAINT racaCachorro
	FOREIGN KEY (racaCachorro)
		REFERENCES RacaCachorro(idRaca),
 racaGato CHAR(2) null,
 CONSTRAINT racaGato
	FOREIGN KEY (racaGato)
		REFERENCES RacaGatos(idRaca),
 nomeAnimal VARCHAR(50),  
 porte CHAR(1),  
 sexo CHAR(1),  
 vacinaGato CHAR(2) null,
 CONSTRAINT vacinaGato
	FOREIGN KEY (vacinaGato)
		REFERENCES VacinasFelinas(idVacina),
 vacinaCachorro CHAR(2) null,
 CONSTRAINT vacinaCachorro
	FOREIGN KEY (vacinaCachorro)
		REFERENCES VacinasCaninas(idVacina),
 animalCastrado CHAR(1),  
 animalAdotado CHAR(1),  
 descricaoAnimal VARCHAR(500),
 dataUltimaVacina DATE,
 imagem longblob
); 

CREATE TABLE Adocao 
( 
 idAdocao INT PRIMARY KEY NOT NULL AUTO_INCREMENT,  
 idPedido INT,
 CONSTRAINT idPedido
	FOREIGN KEY (idPedido)
		REFERENCES PedidoAdocao(idPedido),
 petAdotado CHAR(1),  
 dataAdocao DATE,  
 dataRecusa DATE, -- caso o pet seja recusado pelo tutor
 idAnimal INT,
 CONSTRAINT idAnimal
	FOREIGN KEY(idAnimal)
		REFERENCES Animal(idAnimal) 
);

INSERT INTO UFs VALUES
(11,'Rondônia','RO'),
(12,'Acre','AC'),
(13,'Amazonas','AM'),
(14,'Roraima','RR'),
(15,'Pará','PA'),
(16,'Amapá','AP'),
(17,'Tocantins','TO'),
(21,'Maranhão','MA'),
(22,'Piauí','PI'),
(23,'Ceará','CE'),
(24,'Rio Grande do Norte','RN'),
(25,'Paraíba','PB'),
(26,'Pernambuco','PE'),
(27,'Alagoas','AL'),
(28,'Sergipe','SE'),
(29,'Bahia','BA'),
(31,'Minas Gerais','MG'),
(32,'Espírito Santo','ES'),
(33,'Rio de Janeiro','RJ'),
(35,'São Paulo','SP'),
(41,'Paraná','PR'),
(42,'Santa Catarina','SC'),
(43,'Rio Grande do Sul','RS'),
(50,'Mato Grosso do Sul','MS'),
(51,'Mato Grosso','MT'),
(52,'Goiás','GO'),
(53,'Distrito Federal','DF');

INSERT INTO Cidades VALUES
(3509502,'Campinas',35),
(3518800,'Guarulhos',35),
(3534401,'Osasco',35),
(3541000,'Praia Grande',35),
(3547809,'Santo André',35),
(3548500,'Santos',35),
(3548708,'São Bernardo do Campo',35),
(3550308,'São Paulo',35),
(3551009,'São Vicente',35);

INSERT INTO Ong (nomeEstabelecimento, codCnpj, CpfDiretor,idCidade) VALUES
('Petzão',12345678910123,12345678910,3551009),
('Petzin',23678416378146,21836741326,3551009),
('Dogzin',83947623984393,73186417868,3551009),
('Dogzão',32978924927893,29837422389,3551009);

INSERT INTO RacaGatos VALUES
(01,'Persa'),
(02,'British Shorthair'),
(03,'Sphynx'),
(04,'Siamês'),
(05,'Angorá'),
(06,'Maine Coon'),
(07,'Himalaio'),
(08,'Bengal'),
(09,'Ragdoll'),
(10,'Munchkin'),
(11,'Munchkin Fold'),
(12,'Abissínio'),
(13,'Birmanês');

INSERT INTO RacaCachorro VALUES
(01,'Fila-brasileiro'),
(02,'Shih-tzu'),
(03,'Buldogue francês'),
(04,'Lhasa apso'),
(05,'Terrier brasileiro'),
(06,'Buldogue-campeiro'),
(07,'Rastreador-brasileiro'),
(08,'Veadeiro-pampeano'),
(09,'Ovelheiro-gaúcho'),
(10,'Dogue brasileiro'),
(11,'Spitz alemão'),
(12,'Buldogue-serrano'),
(13,'American Bully'),
(14,'Bandog'),
(15,'Pastor-da-mantiqueira');