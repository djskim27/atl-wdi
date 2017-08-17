* Clue 1

SELECT code, name, population FROM country WHERE region = 'Southern Europe';
SELECT * FROM country WHERE code = 'VAT';
Answer: Holy See (Vatican City State)

* Clue 2

SELECT language FROM countrylanguage WHERE countrycode = 'VAT';
Answer: Italian
* Clue 3
SELECT * FROM countrylanguage WHERE language = 'Italian' AND percentage = 100;

SELECT * FROM country WHERE code = 'SMR'; 
Answer: San Marino
* Clue 4
SELECT * FROM city WHERE countrycode = 'SMR';
Answer: Serravalle

* Clue 5
SELECT * FROM city WHERE name LIKE 'Serra%';
SELECT * FROM country WHERE code='BRA';
Answer: Serra and Brazil
* Clue 6
SELECT * FROM city WHERE id='211';
Answer: Brasia

*Clue 8
SELECT * FROM city WHERE population=91084;
Answer: Santa Monica

SHE'S IN SANTA MONICA

