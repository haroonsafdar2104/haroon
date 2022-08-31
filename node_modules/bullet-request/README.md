# BulletHttpRequest

## install

```bash
npm i bullet-request -S
```

## new HttpRequest

```javascript
const BulletHttpRequest = require('bullet-request');
// or in ts
// import * as BulletHttpRequest from 'bullet-request';
const bulletHttpRequest = new BulletHttpRequest();
```

## request & response

```javascript
bulletHttpRequest.request({
  dataType:'json',
  url: 'http://ydgf.sohu.com/schedule/index.json',
}).then(res => {
  console.log(res)
}).catch(err => {
  console.error(err)
});
```

## request option

```typescript
interface RequestOption {
  url: string,            // request url *require
  type?: string,        // request type [get|post|put|delete], default get
  dataType?: string,   // response data type [arraybuffer|blob|document|json|text], default json
  data?: any,           // request data
  header?: any,         // request headers
}
```

## response error object

```typescript
interface ResponseError {
  error: string | any,    // error msg
  status: number,         // http status code
  readyState: number,     // http ready state code
}
```