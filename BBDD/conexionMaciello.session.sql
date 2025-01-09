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


---09--
SELECT CountryCode, MAX(Population) AS MaxPopulation
FROM city
WHERE CountryCode IN("FRA", "ESP", "PRT")
GROUP BY countrycode;

--10--agrupacion y filtrado (WHere para los group by)
--where
--usamos renombre o alias

SELECT countrycode, count(name) as numCiudades
FROM city
GROUP BY CountryCode
HAVING numCiudades > 100
ORDER BY numCiudades DESC
LIMIT 3;

-- 11. JOINS! Unir 2 tablas
SELECT * FROM city WHERE Name = "Paris";
SELECT Name, Code, Continent, Population FROM country WHERE Code = "FRA";

-- Y ahora el JOIN
SELECT city.Name, CountryCode, District, Continent, country.Population 
FROM city, country 
WHERE city.CountryCode = country.Code 
AND city.Name = "Paris";

-- 12. JOINS! Unir 3 tablas
SELECT city.Name, country.Name, Language
FROM city, country, countrylanguage
WHERE
city.CountryCode = country.Code 
AND country.Code = countrylanguage.CountryCode
AND city.Name = "Sevilla"
AND countrylanguage.Language = "Spanish";

-- Ejercicio:
-- Sácame Distrito, Población (de la ciudad), Continente,
-- nombre del pais, idioma y porcentaje para ciudades llamadas Córdoba
-- y donde se habla el español (Spanish)
-- mysql -u root -p # root
-- USE world;

select city.District, city.Population, 
country.Continent, country.Name , 
countrylanguage.Language, countrylanguage.Percentage
from city,country,countrylanguage
where  city.name = "Córdoba"
and countrylanguage.Language = "Spanish"
and city.CountryCode = country.Code
and country.code = countrylanguage.CountryCode;