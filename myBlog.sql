use myblog;

-- show tables;

-- 增
-- insert into users (username, `password`, realname) values ('szk123', '456', '宋志魁szk123');

-- 查
-- select * from users;
-- select id, username from users;
-- select * from users where username = 'songzk';
-- select * from users where username = 'songzk' and `password` = '123';
-- select * from users where username = 'songzk' or `password` = '123';
-- select * from users where username like '%zk%';
-- select * from users where username like '%zk%' order by id desc;

-- 改
-- SET SQL_SAFE_UPDATES = 0;
-- update users set realname = '宋志魁szk2' where username = 'szk';

-- 删
-- delete from users where username = 'szk';

-- 添加状态state
-- 查
-- select * from users where state = '1';
-- 删
-- update users set state = '0' where username = 'szk'; -- 软删除
-- update users set state = '1' where username = 'szk'; -- 软删除可以恢复，state改为1

-- <> 不等于

-- select version(); -- 查看版本




