# Objection And Knex CRUD

The code in the following repository is based on the
[A definitive guide to SQL in NodeJS with Objection.js + Knex — Part 1](https://dev.to/mrscx/a-definitive-guide-to-sql-in-nodejs-with-objection-js-knex-part-1-4c2e)
article.

# knex commands

````bash
npx knex init
npx knex migrate:make roles
npx knex migrate:make users
npx knex migrate:latest
npx knex migrate:make users_add_foreign
npx knex migrate:rollback # only use when rolling back db
npx knex migrate:make add_user_timestamp
npx knex seed:make seed_roles
npx knex seed:run
```

```sql
CREATE TABLE IF NOT EXISTS roles (
    id INT PRIMARY KEY AUTO_INCREMENT,
    role_name VARCHAR(45) NOT NULL
);

CREATE TABLE IF NOT EXISTS users (
    id INT PRIMARY KEY AUTO_INCREMENT,
    username VARCHAR(45) NOT NULL,
    email VARCHAR(255) NOT NULL,
    role_id INT,
    FOREIGN KEY (role_id)
      REFERENCES roles (id)
      ON DELETE SET NULL
      ON UPDATE CASCADE
);
````
