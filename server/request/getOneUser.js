const db = require('../db');
const User = db.user;

// Функция для получения одного пользователя по email
async function getOneUser(email) {
    try {
        const result = await User.findOne({
            where: {
                email: email
            }
        });
        if (result) {
            return result.toJSON(); // Преобразуем результат в JSON формат
        } else {
            return null; // Если пользователь не найден, возвращаем null
        }
    } catch (error) {
        throw error; // Если произошла ошибка, пробрасываем ее дальше
    }
}

module.exports = {
    getOneUser,
};
