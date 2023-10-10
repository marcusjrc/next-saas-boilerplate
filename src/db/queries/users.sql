/* @name FindUserByEmail */
SELECT id, email
FROM users
WHERE email = :email
LIMIT 1;


/* @name CreateNewUser */
INSERT INTO users (email)
VALUES (:email);