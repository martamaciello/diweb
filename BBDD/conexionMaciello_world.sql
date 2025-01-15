SHOW TABLES;

/* 01. Consulta por campos */
/* Usamos cláusula LIMIT -> Nº Registros */
USE world;


SELECT Name, CountryCode 
FROM city 
LIMIT 10;

-- 02. Consulta SIN registros repetidos 
-- Usamos cláusula DISTINCT
SELECT DISTINCT Continent 
FROM country;

-- 03. Consulta de tabla completa (*)
SELECT * FROM countrylanguage;

-- 04. Filtrado de registros
-- Uso de WHERE 
SELECT * FROM countrylanguage
WHERE CountryCode = "USA";

-- 04b. Filtrado con Operadores
-- Uso de WHERE + AND
SELECT * FROM city
WHERE CountryCode = "ESP"
AND Population > 500000;

-- 04c. Filtrado con Operadores
-- Uso de WHERE + OR
SELECT * FROM city
WHERE District = "Madrid"
OR District = "Andalusia";

-- 05. Ordenaciones
-- Uso de ORDER BY ... ASC / DESC
SELECT * FROM city
WHERE District = "Andalusia"
ORDER BY Population ASC;

-- 06. Ordenaciones con Operadores
SELECT * FROM city
WHERE District = "Andalusia"
AND Population > 200000
ORDER BY Population ASC;

-- 07. Conjuntos
-- Uso de la cláusula IN
SELECT Name, District
FROM city
WHERE Name IN ("Sevilla", "Bilbao", "Vigo");

-- 08. Funciones de Agregación:
-- COUNT (contar)
SELECT COUNT(Name)
FROM city
WHERE CountryCode = "ESP"
AND Population > 100000;

-- Ejercicio: Nº Ciudades de Francia, España y Portugal
SELECT COUNT(Name)
FROM city
WHERE CountryCode IN ("ESP", "FRA", "PRT");

-- 08b. Funciones de Agregación adicionales:
-- AVG (Media), SUM (suma), MAX, MIN
SELECT AVG(Population)
FROM city
WHERE District = "Andalusia";

-- 09. Agrupación
-- Cláusula GROUP BY -> Asociado a Funciones de agregación
-- Población de las ciudades mas grandes de ESP, FRA y PRT
SELECT CountryCode, MAX(Population) AS MaxPopulation
FROM city
WHERE CountryCode IN ('FRA', 'ESP', 'PRT')
GROUP BY CountryCode;


