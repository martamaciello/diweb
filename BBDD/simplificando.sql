CREATE DATABASE IF NOT EXISTS simplificando;
CHARACTER SET utf8mb4;
COLLATE utf8mb4_spanish2_ci;

use simplificando;



create table if not exists productos(
    referencia TINYINT unsigned not null,
    descripcion varchar (50),
    precio char(5),
    stock int unsigned null,

    constraint productos_pk primary key productos (referencia) 

) engine = innodb
comment = "Tabla productos: engine motor bbdd";



create table clientes(
    NIF CHAR (9) not null,
    nombre VARCHAR (40) not null,
    genero BOOLEAN 

    constraint clientes_pk primary key clientes (NIF) 

);




create table if not exists ventas(
    fecha date not null,
    referencia TINYINT unsigned not null,
    NIF CHAR(9),

    constraint ventas_pk ventas (fecha, referencia, NIF) primary key,
    constraint ventas_ref_fk productos(referencia) foreign key,
    constraint NIF 


);





drop DATABASE;
