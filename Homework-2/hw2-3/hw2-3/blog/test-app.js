// The blog stores its data in the blog database in two collections . users and sessions. Here are two example docs for a username 'sverch' with password 'salty'.

show databases;
use blog;
blog = db;
blog.users.find();
