
const {body} = require('express-validator')

export const registerValidator = [
    body('email', 'Неверный формат почты').isEmail(),
    body('password', 'Пароль минимум 3 символа').isLength({min: 3}),
    body('fullName', 'Укажите имя').isLength({min: 3})
];
