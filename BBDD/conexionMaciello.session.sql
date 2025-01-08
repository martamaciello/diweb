show tables;

--01--Limit para limitar el numero de registros
select name, countrycode
from city
limit 10;


--02-- Consulta sin registros repetidos, usamos la clausula distinct
select  distinct Continent
FROM country ;

--03--consulta de tabla completa(*)
SELECT * FROM countrylanguage;
SELECT * FROM city;
SELECT * FROM country;


--04--filtrado de registros WHERE
SELECT * FROM countrylanguage
WHERE CountryCode = "USA";

--04B-- filtrado con operadores

SELECT * FROM city
WHERE CountryCode = "ESP" AND Population > 500000
ORDER BY ID DESC;


--04C--uso de where + or
select * from city
where District= "Andalusia"
OR District="Madrid";
--si pusieramos la misma sentencia pero con un && no saldria ningun dato porque no se puede dar 
--el caso en que district sea andalusia y madrid a la vez.

--05--ordenaciones--
--Uso de order by asc/desc

SELECT * from city
WHERE District ="Andalusia"
order BY Population asc;

--06 ordenaciones con operadores
SELECT * from city
WHERE District ="Andalusia"
AND Population > 200000
order BY Population asc;

--07--Conjuntos
--uso de la clausula

SELECT name, district
from city
where name in ("Sevilla","Bilbao","Vigo");


---08 funciones de agregacion:
--count

SELECT COUNT(NAME)
FROM city
WHERE CountryCode="ESP"
AND Population>100000;


--avg (media)
select avg(Population)
from city
WHERE District ="Andalusia";




--EJERCICIO: numero de ciudades, francia, españa y portuGal

select *
from city 
where countrycode IN ("ESP","FRA","PRT");


--DIME LA CIUDAD MAS GRANDE ENTRE FRA, ESP, PRT

select name
from city
where countrycode IN ("ESP","FRA","PRT")
ORDER BY Population DESC;


