# test-backend

Бэкенд для тестового задания

# work with

1. установите npm модули командой npm i;
2. запустите коммандой npm run dev.
3. в папке "клиенты" лежат файлы для подключения к серверу (пользователь и техника)
4. Для их запуска необходимо ввести в отдельных терминалах: "node имя_файла.js"

# Вводная информация

Данный проект имитирует работу сервера.

Ваша задачи:
1. Реализовать API для подключение пользователей и техники через два пространства имен: io.of(/vehicles) и io.of('/vehicleApi') (для пользователя и техники соответственно).
2. При подключении техники отправлять подключенным пользователям на слушатель 'message' (для io.of('/vehicles')) сообщение о том, что техника подключилась, и также отправлять сообщение о том, что техника отключена при ее дисконнекте.

Условия:
1. Использовать библиотеку socket.io
