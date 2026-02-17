CREATE TABLE `users` (
  `id` integer PRIMARY KEY,
  `username` varchar(255),
  `password` varchar(255),
  `role` varchar(255) COMMENT 'admin or student',
  `liked_movies` varchar(255),
  `created_at` timestamp
);

CREATE TABLE `posts` (
  `id` integer PRIMARY KEY COMMENT 'maybe the only table we need',
  `catogory` varchar(255),
  `title` varchar(255),
  `img` varchar(255),
  `body` text COMMENT 'Content of the post',
  `user_id` integer NOT NULL COMMENT 'only for admin to see',
  `created_by` varchar(255),
  `likes` integer,
  `created_at` timestamp
);

ALTER TABLE `posts` ADD FOREIGN KEY (`user_id`) REFERENCES `users` (`id`);

ALTER TABLE `posts` ADD FOREIGN KEY (`created_by`) REFERENCES `users` (`username`);
