CREATE TABLE IF NOT EXISTS book_reviews(
  id SERIAL PRIMARY KEY,
  username VARCHAR(255),
  title TEXT,
  author TEXT,
  rating INTEGER,
  review TEXT,
  src TEXT,
  date DATE,
  likes INTEGER DEFAULT 0
);

CREATE TABLE IF NOT EXISTS genres_of_books (
  id SERIAL PRIMARY KEY,
  genre_name VARCHAR(255)
);

CREATE TABLE IF NOT EXISTS reviews_genres (
  review_id INTEGER REFERENCES book_reviews(id),
  genre_id INTEGER REFERENCES genres_of_books(id),
  PRIMARY KEY (review_id, genre_id)
);

CREATE TABLE IF NOT EXISTS comments(
  id SERIAL PRIMARY KEY,
  username VARCHAR(255),
  comment TEXT
)

CREATE TABLE IF NOT EXISTS reviews_comments (
  review_id INTEGER REFERENCES book_reviews(id),
  comment_id INTEGER REFERENCES comments(id),
  PRIMARY KEY (review_id, comment_id)
);

INSERT INTO genres_of_books (genre_name) VALUES
('Fantasy'),
('Science Fiction'),
('Mystery'),
('Thriller'),
('Horror'),
('Romance'),
('Historical Fiction'),
('Literary Fiction'),
('Adventure'),
('Dystopian'),
('Magical Realism'),
('Crime'),
('Contemporary'),
('Paranormal'),
('Young Adult (YA)'),
('Biography'),
('Memoir'),
('Self-Help'),
('History'),
('Science'),
('True Crime'),
('Philosophy'),
('Psychology'),
('Travel'),
('Essay Collections'),
('Cookbooks'),
('Business'),
('Health & Wellness'),
('Spirituality & Religion'),
('Politics & Current Affairs');

-- Get the id of the latest book
SELECT id FROM book_reviews ORDER BY id DESC
LIMIT 1;

-- Selecting genre id by genre_name
SELECT id FROM genres_of_books WHERE genre_name='Mystery';

--Select with Joins
SELECT comments.id, comments.username, comments.comment FROM comments
JOIN reviews_comments ON reviews_comments.comment_id = comments.id
JOIN book_reviews ON book_reviews.id = reviews_comments.review_id WHERE reviews_comments.review_id = 1;

SELECT book_reviews.id, book_reviews.username, book_reviews.title, book_reviews.author, book_reviews.rating, book_reviews.review,  book_reviews.date FROM book_reviews
JOIN reviews_genres ON reviews_genres.review_id = book_reviews.id
JOIN genres_of_books ON genres_of_books.id = reviews_genres.genre_id WHERE reviews_genres.genre_id = 18;

--Update (for updating like count)
UPDATE book_reviews SET likes = likes + 1 WHERE id = 1;
--Delete
-- I found that with my table set up you had to delete from the junction table first then delet from the comments
DELETE FROM reviews_comments WHERE reviews_comments.review_id = 1 AND  reviews_comments.comment_id=1 ;
DELETE FROM comments WHERE id = 1;