import { initAdminAPI } from "#controllers/Admin";

const bootstrap = async () => {
    //Подключение к бд
    //инициализация API
    await initAdminAPI();
}

bootstrap();