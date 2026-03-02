
DROP DATABASE IF EXISTS `media_db`;
CREATE DATABASE IF NOT EXISTS `media_db`;

USE `media_db`;

CREATE TABLE `users` (
  `id` integer PRIMARY KEY,
  `email` varchar(255),
  `username` varchar(255),
  `profileFoto` varchar(255),
  `password` varchar(255),
  `role` varchar(255) COMMENT 'admin or student',
  `created_at` timestamp
);

CREATE TABLE `media` (
  `id` integer PRIMARY KEY,
  `catogory` varchar(255),
  `title` varchar(255),
  `img` varchar(255),
  `tags` varchar(255),
  `body` text COMMENT 'Content of the post',
  `user_id` integer NOT NULL COMMENT 'only for admin to see',
  `created_at` timestamp
);

CREATE TABLE `rating` (
  `id` integer PRIMARY KEY,
  `media_id` integer,
  `user_id` integer NOT NULL COMMENT 'only for admin to see',
  `rating` integer COMMENT '1 tot 10',
  `created_at` timestamp
);

CREATE TABLE `comments` (
  `id` integer PRIMARY KEY,
  `media_id` integer,
  `user_id` integer NOT NULL COMMENT 'only for admin to see',
  `comment` varchar(255),
  `created_at` timestamp
);

-- dummy data inserts for testing

INSERT INTO `users` (`id`, `email`, `username`, `password`, `role`, `created_at`) VALUES
(1, 'admin@example.com', 'admin', 'password123', 'admin', NOW()),
(2, 'student@example.com', 'student', 'password123', 'student', NOW());

INSERT INTO `media` (`id`, `catogory`, `title`, `img`, `tags`, `body`, `user_id`, `created_at`) VALUES
(1, 'movie', 'Dummy Movie', 'movie.jpg', 'drama,action', 'This is a dummy movie description.', 1, NOW()),
(2, 'book', 'Dummy Book', 'book.jpg', 'fiction,adventure', 'This is a dummy book description.', 1, NOW());

INSERT INTO `rating` (`id`, `media_id`, `user_id`, `rating`, `created_at`) VALUES
(1, 1, 2, 4, NOW()),
(2, 2, 2, 5, NOW());

INSERT INTO `comments` (`id`, `media_id`, `user_id`, `comment`, `created_at`) VALUES
(1, 1, 2, 'Great content!', NOW()),
(2, 2, 2, 'Really enjoyed this.', NOW());

-- foreign keys
ALTER TABLE `media` ADD FOREIGN KEY (`user_id`) REFERENCES `users` (`id`);

ALTER TABLE `rating` ADD FOREIGN KEY (`media_id`) REFERENCES `media` (`id`);

ALTER TABLE `rating` ADD FOREIGN KEY (`user_id`) REFERENCES `users` (`id`);

ALTER TABLE `comments` ADD FOREIGN KEY (`user_id`) REFERENCES `users` (`id`);

ALTER TABLE `comments` ADD FOREIGN KEY (`media_id`) REFERENCES `media` (`id`);
