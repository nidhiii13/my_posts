-- 
-- Users Table
-- 
DROP TABLE IF EXISTS `Users`;
CREATE TABLE `Users` (
    `id` varchar(128) NOT NULL UNIQUE,
    `username` varchar(18) NOT NULL,
    `password` varchar(128) NOT NULL,
    CONSTRAINT PK_Users PRIMARY KEY (`id`)
);

-- 
-- Posts Table
-- 
DROP TABLE IF EXISTS `Posts`;
CREATE TABLE `Posts` (
    `id` varchar(128) NOT NULL UNIQUE,
    `title` varchar(50) NOT NULL, --- Title can only be 50 characters long
    `content` varchar(1024) NOT NULL, --- for now its a varchar 
    `user_id` varchar(128) NOT NULL,
    CONSTRAINT PK_Posts PRIMARY KEY (`id`),
    CONSTRAINT FK_Posts FOREIGN KEY (`user_id`) REFERENCES `Users` (`id`) ON DELETE CASCADE
);