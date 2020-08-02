const Koa = require('koa');
const mount = require('koa-mount');
const staticCache = require('koa-static-cache');

const app = new Koa();
app.name = 'Pangu';
const env = process.env.NODE_ENV || 'development';
const port = process.env.PORT || 8080;

const cacheOpts = { maxAge: 86400, gzip: true, buffer: true };

if (env === 'development') {
    const webpack_dev_port = process.env.PORT
        ? parseInt(process.env.PORT) + 1
        : 8081;
    const proxyhost = 'http://0.0.0.0:' + webpack_dev_port;
    console.log('proxying to webpack dev server at ' + proxyhost);
    const proxy = require('koa-proxy')({
        host: proxyhost,
    });
    app.use(mount('/', proxy));
} else {
    app.use(
        mount(
            '/',
            staticCache(path.join(__dirname, '../dist'), cacheOpts),
        ),
    );
}

app.listen(port);
if (process.send) process.send('online');
console.log(`Worker process started for port ${port}`);
