let http = null;
if (typeof process !== 'undefined' && Object.prototype.toString.call(process) === '[object process]') {
  http = require("./").http;
}

const
  BulletHttpRequest = (function () {
    function BulletHttpRequest() {
      this.xmlhttp = null;
      this.opts = {
        url: '',            // 请求地址
        type: 'GET',        // 请求类型 [get|post|put|delete]
        dataType: 'json',   // 请求数据类型 [arraybuffer|blob|document|json|text]
        data: {},           // 请求数据
        header: {

        },         // 请求头数据
      };

      if (typeof window !== 'undefined') {
        if (window['ActiveXObject']) {
          this.xmlhttp = new window['ActiveXObject']('Microsoft.XMLHTTP');
        } else if (window['XMLHttpRequest']) {
          this.xmlhttp = new XMLHttpRequest();
        } else {
          throw (new Error('not http request object can use at current environment.'));
        }
      }
    };
    BulletHttpRequest.prototype.request = function (opts = {}) {
      if (typeof window === 'undefined') {
        if (http) {
          const _opts = {
            protocol: '',
            hostname: '',
            port: 80,
            path: '',
            method: opts.type,
            headers: {
              'Accept': 'application/json;',
              'Accept-Encoding': 'gzip,deflate',
              'Accept-Language': 'zh-CN,zh,en; q=0.8',
              'Connection': 'keep-alive',
              'Content-Type': 'application/json; charset=UTF-8',
              'X-Requested-With': 'XMLHttpRequest',
            },
          },
            data = opts.data || null;
          _opts.headers = Object.assign(_opts.headers, opts.header);
          _opts.headers['Host'] = _opts.hostname;
          data && data.length > 0 ? _opts.headers['Content-Length'] = Buffer.byteLength(data) : '';
          const _url = new URL(opts.url || '');
          _opts.protocol = _url.protocol;
          _opts.hostname = _url.hostname;
          _opts.port = _url.port;
          _opts.path = _url.pathname;

          return new Promise((res, rej) => {
            let _data = '',
              _req = http.request(_opts, _obj => {
                _obj.setEncoding('utf8');
                _obj.on('data', chunk => {
                  _data += chunk;
                });
                _obj.on('end', () => {
                  try {
                    _data = JSON.parse(_data);
                    res(_data);
                  } catch (e) {
                    res(_data);
                  }
                });
              });
            _req.on('error', err => {
              rej({
                error: err.Error,
                status: 0,
                readyState: 0
              });
            });
            data ? _req.write(JSON.stringify(data)) : '';
            _req.end();
          });
        }
        return new Promise((res, rej) => {
          rej({
            error: 'can not find http request module at current platform',
            status: 0,
            readyState: 0
          });
        });
      } else {
        this.opts = Object.assign(this.opts, opts);
        const self = this;
        if (!this.xmlhttp) { return null; }
        self.xmlhttp.responseType = self.opts.dataType.toString().toLowerCase();

        return new Promise((res, rej) => {
          self.xmlhttp.onreadystatechange = () => {
            if (self.xmlhttp.readyState === 4) {
              if (self.xmlhttp.status === 200) {
                res(self.xmlhttp.response);
              } else {
                rej({
                  error: self.xmlhttp.statusText,
                  status: self.xmlhttp.status,
                  readyState: self.xmlhttp.readyState
                });
              }
            }
          };
          try {
            self.xmlhttp.open(self.opts.type.toUpperCase(), self.opts.url);
          } catch (e) {
            rej({
              error: e,
              status: 0,
              readyState: 0
            });
          }
          if (self.opts.header) {
            const hkarr = Object.keys(self.opts.header);
            for (let i = 0; i < hkarr.length; i++) {
              const hk = hkarr[i];
              self.xmlhttp.setRequestHeader(hk, self.opts.header[hk]);
            }
          }
          self.opts.type === 'POST' || 'PUT' ? self.xmlhttp.send(JSON.stringify(self.opts.data)) : self.xmlhttp.send();
        });
      }
    }

    return BulletHttpRequest;
  })();

if (typeof module !== 'undefined') {
  module.exports = BulletHttpRequest;
}