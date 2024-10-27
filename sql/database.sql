
--creamos la base de datos
create database ejemplo_users;

--creamos la tabla
create table users(
    id serial,
    name varchar(50) not null,
    email varchar(50) not null unique,
    password varchar(60) not null
);

--insertamos datos
insert into users(name, email, password) 
values
('John Smith', 'b4w0Z@example.com', '$2a$10$N5E4d5aV3tJy6qJ2y4d4qOuq6dYd6fZQeL1zP5fW0gZr3o0Vd5b4'),
('John Doe', 'g9Jt2@example.com', '$2a$10$N5E4d5aV3tJy6qJ2y4d4qOuq6dYd6fZQeL1zP5fW0gZr3o0Vd5b4'),
('Jane Doe', 'f9Jt2@example.com', '$2a$10$N5E4d5aV3tJy6qJ2y4d4qOuq6dYd6fZQeL1zP5fW0gZr3o0Vd5b4'),
('Mary Doe', '9Jt2@example.com', '$2a$10$N5E4d5aV3tJy6qJ2y4d4qOuq6dYd6fZQeL1zP5fW0gZr3o0Vd5b4'),
('Mark Doe', 'VXgU3@example.com', '$2a$10$N5E4d5aV3tJy6qJ2y4d4qOuq6dYd6fZQeL1zP5fW0gZr3o0Vd5b4');