* Clue 1

SELECT code, name, population FROM country WHERE region = 'Southern Europe';
SELECT * FROM country WHERE code = 'VAT';

* Clue 2

SELECT language FROM countrylanguage WHERE countrycode = 'VAT';

* Clue 3
SELECT * FROM countrylanguage WHERE language = 'Italian' AND percentage = 100;

SELECT * FROM country WHERE code = 'SMR'; 

* Clue 4
SELECT * FROM city WHERE countrycode = 'SMR';