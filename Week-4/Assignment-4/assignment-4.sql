--Write an SQL statement to select all articles with their author’s email.
SELECT email, title, content 
FROM article
INNER JOIN user ON article.authorID=user.id;

--Write another SQL statement to select articles from 7th to 12th sorted by id.
SELECT email, title, content 
FROM article 
INNER JOIN user ON article.authorID=user.id 
WHERE article.id BETWEEN 7 AND 12;