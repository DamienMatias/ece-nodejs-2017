// Generated by CoffeeScript 1.12.7
(function() {
  var http, server;

  http = require('http');

  server = require('./server.coffee');

  http.createServer(server.logic).listen(server.port, server.address);

}).call(this);
