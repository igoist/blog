/* eslint-disable */
const Koa = require('koa');
const Sequelize = require('sequelize');

var config = {
    database: 'st', // 使用哪个数据库
    username: 'root', // 用户名
    password: 'et', // 口令
    host: 'localhost', // 主机名
    port: 3306 // 端口号，MySQL默认3306
};

// 创建一个Koa对象表示web app本身:
const app = new Koa();

app.use(async (ctx, next) => {
  console.log(`${ctx.request.method} ${ctx.request.url}`); // 打印URL

  var sequelize = new Sequelize(config.database, config.username, config.password, {
    host: config.host,
    dialect: 'mysql',
    pool: {
      max: 5,
      min: 0,
      idle: 30000
    }
  });

  await next(); // 调用下一个middleware
});

app.use(async (ctx, next) => {
  const start = new Date().getTime(); // 当前时间
  await next(); // 调用下一个middleware
  const ms = new Date().getTime() - start; // 耗费时间
  console.log(`Time: ${ms}ms`); // 打印耗费时间
});


// 对于任何请求，app将调用该异步函数处理请求：
app.use(async (ctx, next) => {
  await next();
  ctx.response.type = 'text/html';
  ctx.response.body = '<h1>Hello, koa2!</h1>';
});

// 在端口3000监听:
app.listen(3008);
console.log('app started at port 3008...');
