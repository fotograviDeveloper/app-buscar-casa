CREATE DATABASE app_siker ;

USE app_siker;



CREATE TABLE users (
    id INT(50) NOT NULL,
    username VARCHAR(50) NOT NULL,
    password VARCHAR(60) NOT NULL ,
    phone INT(15) not NULL,
    category VARCHAR (20) NOT NULL
);
ALTER TABLE users 
ADD PRIMARY key (id);
