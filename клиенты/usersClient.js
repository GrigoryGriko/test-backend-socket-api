const io = require('socket.io-client');

const socket = io('http://localhost:3002/vehicles');

socket.on('connect', () => {
  console.log('Пользователь успешно подключен');
});

socket.on('message', (data) => {
  console.log('Получено сообщение:', data);
});

socket.on('disconnect', () => {
  console.log('Отключен от сервера');
});