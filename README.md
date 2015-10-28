kefir-cron
===

Creates stream from cron-string

Uses [kefir](http://rpominov.github.io/kefir/) and [node-cron](https://github.com/ncb000gt/node-cron)


Example:
---

```js
var cron = require('kefir-cron');
var everySecond = cron('* * * * * *');
everySecond
    .map(() => new Date())
    .log('tick');
```

API:
---

```ts
(cronTime: string): KefirStream;
```

[**cronTime**](https://github.com/ncb000gt/node-cron#api)

[**KefirStream**](http://rpominov.github.io/kefir/)

Install
---

```sh
npm i -S kefir-cron
```
