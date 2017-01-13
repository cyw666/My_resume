SET NAMES UTF8;
DROP DATABASE IF EXISTS contact;
CREATE DATABASE contact CHARSET=UTF8;
USE contact;

CREATE TABLE contact(
  eid INT PRIMARY KEY AUTO_INCREMENT,
  name VARCHAR(32),
  email VARCHAR(20),
  message VARCHAR(100)
);