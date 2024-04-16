const Koa = require('koa');
const Router = require('koa-router');
const cors = require('@koa/cors');

const app = new Koa();
const router = new Router();

// Встановлюємо middleware CORS
app.use(cors());

router.get('/api/data', (ctx, next) => {
  ctx.body = { message: 'Hello from server!' };
});

app.use(router.routes());
app.use(router.allowedMethods());

const PORT = process.env.PORT || 3000; // Змінено порт на 3000
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
