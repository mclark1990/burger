CREATE DATABASE burgers_db;

USE burgers_db;

CREATE TABLE burgers (
    id INTEGER NOT NULL AUTO-INCREMENT,
    burger_name VARCHAR(50) NOT NULL,
    devoured BOOLEAN,
    primary key(id)
);

