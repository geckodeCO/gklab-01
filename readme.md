# 🧪GKLab 01 

This session is about Node Js advanced skills {Streams}. 

## Initialize
For initialize we need NodeJS >= 8.0.0

  node ./initialize.js

## Explain
  
### Streams

Streams will basically allow us to read and write information inside the server without blocking the execution time. This means that we can interact with large files without this meaning that we will have an inefficient application.

Los {streams} básicamente nos van a permitir leer y escribir información dentro del servidor sin bloquear el tiempo de ejecución. Esto significa que podemos interactuar con archivos de gran tamaño sin que esto signifique que vamos a tener una aplicación ineficiente. 

### What say Node?
A stream is an abstract interface for working with streaming data in Node.js. The  `stream`  module provides an API for implementing the stream interface.

There are many stream objects provided by Node.js. For instance, a  [request to an HTTP server](https://nodejs.org/api/http.html#http_class_http_incomingmessage)  and  [`process.stdout`](https://nodejs.org/api/process.html#process_process_stdout)  are both stream instances.

Streams can be readable, writable, or both. All streams are instances of  [`EventEmitter`](https://nodejs.org/api/events.html#events_class_eventemitter).

To access the `stream` module
```js
const stream = require('stream');
```
#### More Info:
[https://nodejs.org/api/stream.html](https://nodejs.org/api/stream.html)

## Next Session ⏩
### Types of Streams
[https://nodejs.org/api/stream.html#stream_types_of_streams](https://nodejs.org/api/stream.html#stream_types_of_streams)

## License
This sessions are open-source software licensed under the [MIT license](https://opensource.org/licenses/MIT).