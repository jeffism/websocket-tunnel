const WebSocket = require('ws');
const server = new WebSocket.Server({ port: 8080 });

server.on('connection', ws => {
  console.log('Client connected');

  setInterval(() => {
    const timestamp = new Date().toISOString();
    const randomString = Math.random().toString(36).slice(2, 7);
    ws.send(JSON.stringify({ timestamp, randomString }));
  }, 1000);

  ws.on('close', () => {
    console.log('Client disconnected');
  });
});
