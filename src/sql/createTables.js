const usersCreation = `CREATE TABLE IF NOT EXISTS Users (
    id varchar(128) NOT NULL UNIQUE,
    username varchar(18) NOT NULL,
    password varchar(128) NOT NULL,
    CONSTRAINT PK_Users PRIMARY KEY (id)
);
`;

const postsCreation = `CREATE TABLE IF NOT EXISTS Posts (
    id varchar(128) NOT NULL UNIQUE,
    title varchar(50) NOT NULL,
    content varchar(1024) NOT NULL,
    user_id varchar(128) NOT NULL,
    CONSTRAINT PK_Posts PRIMARY KEY (id),
    CONSTRAINT FK_Posts FOREIGN KEY (user_id) REFERENCES Users (id) ON DELETE CASCADE
);`

module.exports = { usersCreation, postsCreation };

