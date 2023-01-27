const user = (sequelize, type) => {
    return sequelize.define('users', {
        idUser: {
            type: type.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        imagesUser: type.STRING,
        usernameUser: type.STRING(99),
        passwordUser: type.STRING,
        identificationCardUser: type.STRING,
        passportUser: type.STRING,
        nameUser: type.STRING,
        lastNameUser: type.STRING,
        emailUser: type.STRING,
        phoneUser: type.STRING,
        creatUser: {
            type: 'TIMESTAMP',
            defaultValue: type.literal('CURRENT_TIMESTAMP'),
            allowNull: false
        },
        updateUser: {
            type: 'TIMESTAMP',
            defaultValue: type.literal('CURRENT_TIMESTAMP'),
            allowNull: false
        }
    }, {
        timestamps: false,
    })
}

module.exports = user