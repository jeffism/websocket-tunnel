const WebSocket = require('ws');

const url = 'ws://127.0.0.1:8080';
const connection = new WebSocket(url);

connection.onopen = () => {
  console.log('Connected to the server');
};

connection.onerror = (error) => {
  console.error(`WebSocket error: ${error.message}`);
};

connection.onmessage = (message) => {
  const data = JSON.parse(message.data);
  console.log(`Received data: ${data.timestamp} - ${data.randomString}`);
};

connection.onclose = () => {
  console.log('Disconnected from the server');
};
