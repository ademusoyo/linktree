CREATE DATABASE linktree_app;

\c linktree_app

CREATE TABLE urls ( ID SERIAL PRIMARY KEY, link_name VARCHAR(60), link_url VARCHAR(60));

INSERT INTO urls (link_name, link_url) VALUES ('Github', 'https://github.com/ademusoyo'), ('Website', 'https://ademusoyo.com/');