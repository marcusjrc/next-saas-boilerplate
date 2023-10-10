-- migrate:up
CREATE TABLE IF NOT EXISTS users (
    id SERIAL PRIMARY KEY,
    email VARCHAR(319) NOT NULL UNIQUE,
    created_at timestamp default now()
);

-- migrate:down
DROP TABLE IF EXISTS users;
