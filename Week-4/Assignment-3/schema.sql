CREATE DATABASE assignment;
USE assignment;

CREATE TABLE user (
    id integer PRIMARY KEY AUTO_INCREMENT,
    email VARCHAR (255) NOT NULL,
    password VARCHAR (255) NOT NULL,
    created TIMESTAMP NOT NULL DEFAULT NOW()
);

INSERT INTO user (email,password)
VALUES
("appworks@school.appworks.tw", "iloveappworks"),
("root@school.appworks.tw", "sudosudo123"),
("root@linux.tw", "rmrfisawesome");