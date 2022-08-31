let HttpRequest = null;
if (typeof module !== 'undefined') {
  HttpRequest = require('./http-request');
} else {
  HttpRequest = BulletHttpRequest;
}

const httprequest = new HttpRequest();

httprequest.request({
//   url: 'http://www.baidu.com',
  dataType:'json',
  url: 'http://ydgf.sohu.com/schedule/index.json',
//   header: {
//     'Accept': 'application/json, text/javascript, */*; q=0.01'
//   },
}).then(res => {
  console.log(res)
}).catch(err => {
  console.error(err)
});