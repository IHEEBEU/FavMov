CREATE DATABASE IF NOT EXISTS your_database_name;

USE your_database_name;

CREATE TABLE IF NOT EXISTS movies (
  id INT PRIMARY KEY AUTO_INCREMENT,
  name VARCHAR(255) NOT NULL,
  imageUrl VARCHAR(255),
  rate DECIMAL(3, 1)
);
INSERT INTO `basic`.`movies` (`name`, `imageUrl`, `rate`) VALUES ('Indiana Jones and the Dial of Destiny', 'https://m.media-amazon.com/images/M/MV5BZDQxMTY3NTAtMzYwYi00Y2U3LThkYmQtOTljY2I4ZmJiZGIzXkEyXkFqcGdeQXVyMTU1NzY5NTky._V1_.jpg', '6.9');
INSERT INTO `basic`.`movies` (`name`, `imageUrl`, `rate`) VALUES ('The Witcher', 'https://m.media-amazon.com/images/M/MV5BMDEwOWVlY2EtMWI0ZC00OWVmLWJmZGItYTk3YjYzN2Y0YmFkXkEyXkFqcGdeQXVyMTUzMTg2ODkz._V1_.jpg', '8.1');
INSERT INTO `basic`.`movies` (`name`, `imageUrl`, `rate`) VALUES ('Black Mirror', 'https://m.media-amazon.com/images/M/MV5BZTgyNTBkNzctN2I3NC00NTA1LWJiMDMtYzA2MmYyZjc1NWQzXkEyXkFqcGdeQXVyMTUzMTg2ODkz._V1_.jpg', '8.7');
INSERT INTO `basic`.`movies` (`name`, `imageUrl`, `rate`) VALUES ('Coraline', 'https://t3.gstatic.com/licensed-image?q=tbn:ANd9GcTT75qwKeH_7hzGiCln3amh59WXqQuLjMlgBPjyFfDqyGpw15B7s5_sYx_cmps1pQRM', '7.7');
