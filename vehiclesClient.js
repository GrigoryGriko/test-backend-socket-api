const io = require('socket.io-client');

const socket = io('http://localhost:3002/vehicleApi');

socket.on('connect', () => {
  console.log('Техника успешно подключена');
});

socket.on('message', (data) => {
  console.log('Получено сообщение:', data);
});

socket.on('disconnect', () => {
  console.log('Отключен от сервера');
});