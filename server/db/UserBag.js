const Sequelize = require('sequelize');




module.exports = (sequelize) => {
    return sequelize.define('User', {

        id:{
            type: Sequelize.INTEGER,
            primaryKey: true,
        },
        email:{
            type: Sequelize.STRING(255),
            required:true,
            unique:true,
        },
        password:{
            type: Sequelize.STRING(255),
            required:true,
        },
        avatar:{
            type: Sequelize.STRING,
            defaultValue: null,
        },
        dateCreate: {
            type: Sequelize.DATE,
        },
        colorsPalette: {
            type: Sequelize.ARRAY,
            default: ["#fff", "#faafa8", "#f39f76", "#fff8b8", "#e2f6d3", "#b4ddd3", "#efeff1", "#aeccdc", "#d3bfdb", "#f6e2dd", "#e9e3d4", "#e9e3d5"]
        },
        todos:{
            type:Sequelize.ARRAY,
            where:{
                id:{
                    type: Sequelize.INTEGER,
                    primaryKey: true,
                },
                itemLabel:{
                    type: Sequelize.STRING,
                },
                itemTitle:{
                    type: Sequelize.STRING(255),
                },
                color:{
                    type: Sequelize.STRING(255),
                },
                backgroundColor:{
                    type: Sequelize.STRING(255),
                    defaultValue: "#fff",
                },
                isFavorite:{
                    type:Sequelize.BOOLEAN,
                    defaultValue: false,
                },
                labelTextNoCompleted: [
                    {
                        id: {
                            type: Sequelize.STRING,
                            primaryKey: true,
                        },
                        title: {
                            type: Sequelize.STRING(255),
                        },
                        image:{
                            type: Sequelize.STRING,
                            defaultValue: null,
                        },
                        completed: {
                            type: Sequelize.BOOLEAN,
                            defaultValue: false
                        }
                    }
                ],
                labelTextCompleted: [
                    {
                        id: {
                            type: Sequelize.STRING,
                            primaryKey: true,
                        },
                        title: {
                            type: Sequelize.STRING(255),
                        },
                        image:{
                            type: Sequelize.STRING,
                            defaultValue: null,
                        },
                        completed: {
                            type: Sequelize.BOOLEAN,
                            defaultValue: true
                        }
                    }
                ],
                textareaArr:[
                    {
                        id: {
                            type: Sequelize.STRING,
                            primaryKey: true,
                        },
                        title: {
                            type: Sequelize.STRING(255),
                        },
                        images:[
                            {
                                id: {
                                    type: Sequelize.STRING,
                                    primaryKey: true,
                                },
                                imageSrc: {
                                    type: Sequelize.STRING(255),
                                }
                            }
                        ]
                    }
                ],
            }
        }


    }, {
        timestamps: false,
        tableName: 'user',
    })
}