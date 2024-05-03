const Sequelize = require('sequelize');

module.exports = (sequelize) => {
    return sequelize.define('User', {
        id: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        email: {
            type: Sequelize.STRING(255),
            allowNull: false, //поля не могут быть null
            unique: true,
        },
        password: {
            type: Sequelize.STRING(255),
            allowNull: false, //поля не могут быть null
        },
        avatar: {
            type: Sequelize.STRING,
            defaultValue: null,
        },
        labels:{
            type: Sequelize.ARRAY(Sequelize.JSON), // Массив объектов JSON
            defaultValue: [{ all: 0 }], // Значение по умолчанию - массив с одним объектом JSON
        },
        dateCreate: {
            type: Sequelize.DATE,
            defaultValue: Sequelize.NOW // добавил defaultValue для dateCreate
        },
        colorsPalette: {
            type: Sequelize.ARRAY(Sequelize.JSON), // Массив объектов JSON
            defaultValue: ["#fff", "#faafa8", "#f39f76", "#fff8b8", "#e2f6d3", "#b4ddd3", "#efeff1", "#aeccdc", "#d3bfdb", "#f6e2dd", "#e9e3d4", "#e9e3d5"]
        },
        todos: {
            type: Sequelize.ARRAY(Sequelize.JSON), // Массив объектов JSON
            defaultValue: [],

            // where: {
            //     id: {
            //         type: Sequelize.INTEGER,
            //         primaryKey: true,
            //     },
            //     itemLabel: {
            //         type: Sequelize.STRING,
            //     },
            //     itemTitle: {
            //         type: Sequelize.STRING(255),
            //     },
            //     color: {
            //         type: Sequelize.STRING(255),
            //     },
            //     backgroundColor: {
            //         type: Sequelize.STRING(255),
            //         defaultValue: "#fff",
            //     },
            //     isFavorite: {
            //         type: Sequelize.BOOLEAN,
            //         defaultValue: false,
            //     },
            //     labelTextNoCompleted: {
            //         type: Sequelize.ARRAY(Sequelize.JSON), //  тип данных для массива
            //         defaultValue: [],
            //     },
            //     labelTextCompleted: {
            //         type: Sequelize.ARRAY(Sequelize.JSON), //  тип данных для массива
            //         defaultValue: [],
            //     },
            //     textareaArr: {
            //         type: Sequelize.ARRAY(Sequelize.JSON), //  тип данных для массива
            //         defaultValue: [],
            //     },
            // }
        },
        textareaArr:{
            type: Sequelize.STRING,
        }
    }, {
        timestamps: false,
        tableName: 'user',
    });
};
