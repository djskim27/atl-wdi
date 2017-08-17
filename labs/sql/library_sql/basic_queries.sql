-- BASIC QUERIES
-- Unless otherwise stated, all queries should return all columns
  SELECT * FROM authors, books;
-- Get all information about all authors
  SELECT * FROM authors;
-- Get just the name and birth year of all authors
  SELECT name, birth_year FROM authors;
-- Get all authors born in the 20th centruy or later
   SELECT * FROM authors WHERE birth_year > 1899;
-- Get all authors born in the USA
  SELECT * FROM authors WHERE nationality = 'United States of America';
-- Get all books published on 1985
  SELECT * FROM books WHERE publication_date = 1985;
-- Get all books published before 1989
  SELECT * FROM books WHERE publication_date < 1989;
-- Get just the title of all books.
  SELECT title FROM books;
-- Get just the year that 'A Dance with Dragons' was published
  SELECT publication_date FROM books WHERE UPPER(title) = UPPER('A Dance With Dragons');
  -- Cry when you realize how long it's been

-- Get all books which have `the` somewhere in their title (hint, look up LIKE/ILIKE)
SELECT * FROM books where title ILIKE '%the %' OR title ILIKE '% the %';
-- Add yourself as an author
INSERT INTO authors(name, nationality, birth_year) VALUES ('David Kim', 'United States of America', 1989);
-- Update one of your books to have a new title

-- Delete your books

-- Delete your author entry