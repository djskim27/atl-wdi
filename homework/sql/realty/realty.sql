1. SELECT AVG(sq_ft) FROM offices;
2. SELECT COUNT(*) FROM apartments;
3. SELECT * FROM apartments WHERE occuped = false;
4. SELECT company FROM offices;
5. SELECT COUNT(cubicle_num, bathroom_num) FROM offices WHERE id = 3; 
6. SELECT * FROM storefronts WHERE kitchen = true;
7. SELECT * FROM storefronts ORDER BY sq_ft + outdoor_seat DESC LIMIT 1;
8. SELECT company FROM offices ORDER BY cubicle_num ASC LIMIT 1;
9. SELECT company FROM offices ORDER BY cubicle_num + bathroom_num DESC LIMIT 1;