const server = require('../server.js');
const tape = require('tape');

server.start();
tape('check the home route', (t) => {
  server.inject({ url: '/', method: 'GET' }, (res) => {
    const testString = '<meta http-equiv="X-UA-Compatible" content="IE=edge" />';
    t.equal(res.statusCode, 200, 'status code is 200');
    t.ok(res.payload.includes(testString), 'test string is served up');
    t.end();
  });
});

tape('check the styles route', (t) => {
  server.inject({ url: '/style.css', method: 'GET' }, (res) => {
    const testString = 'html, body, div, span, applet, object, iframe,';
    t.equal(res.statusCode, 200, 'status code is 200');
    t.ok(res.payload.includes(testString), 'test string is served up');
    t.end();
  });
});
tape.onFinish(() => process.exit(0));
