/* eslint-disable */
const Koa = require('koa');
const router = require('koa-router')();
const Sequelize = require('sequelize');
const bodyParser = require('koa-bodyparser');

const config = require('config');

const pet = require('./model/pet');

const app = new Koa();

app.use(bodyParser());

app.use(async (ctx, next) => {
  console.log(`${ctx.request.method}: ${ctx.request.url}`); // 打印URL

  var sequelize = new Sequelize(config.mysql.database, config.mysql.username, config.mysql.password, {
    host: config.host,
    dialect: 'mysql',
    pool: {
      max: 5,
      min: 0,
      idle: 10000
    }
  });

  ctx.state.sequelize = sequelize;

  await next();
});

app.use(async (ctx, next) => {
  const start = new Date().getTime(); // 当前时间
  await next(); // 调用下一个middleware
  const ms = new Date().getTime() - start; // 耗费时间
  console.log(`${ctx.method} ${ctx.url} Finish Time: ${ms}ms`); // 打印耗费时间
});


// 对于任何请求，app将调用该异步函数处理请求：
// app.use(async (ctx, next) => {
//   await next();
//   ctx.response.type = 'text/html';
//   ctx.response.body = '<h1>Hello, koa2!</h1>';
// });

// 在端口3000监听:

// router.get('/hello/:name', async (ctx, next) => {
//   var name = ctx.params.name;
//   ctx.response.body = `<h1>Hello, ${name}!</h1>`;
// });

router.get('/', async (ctx, next) => {
  // Object.keys(ctx).map(i => {
  //   console.log(i, ctx[i]);
  // });
  // ctx.state.sequelize.queryInterface.createTable('pets', pet, {});

  const Pet = ctx.state.sequelize.define('pet', pet, {
    timestamps: false
  });

  var now = Date.now();

  (async () => {
    try {
      var dog = await Pet.create({
        id: 'd-' + now,
        // id: 'd-' + 1525227818949,
        name: 'Odie',
        gender: false,
        birth: '2008-08-08',
        createdAt: now,
        updatedAt: now,
        version: 0
      });
      console.log('created: ' + JSON.stringify(dog));

    } catch(err) {
      console.log('init error: ', err);
      console.log('========================');
      ctx.response.status = 403;
    }
  })();

  ctx.response.body = `<h1>Index: </h1>`;
});

// const c = require('./controllers');

// router.get('/', c['GET /']);
app.use(router.routes());

app.listen(config.site.port);
console.log('app started at port: ', config.site.port, '...');
