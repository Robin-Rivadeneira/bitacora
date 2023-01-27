const licensePlates = (sequelize, type) => {
    sequelize.define('licensePlates', {
        idLicensePlates: {
            type: type.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        registrationYearLicensePlates: type.STRING,
        registrationExpirationDate: type.STRING,
        toName: type.STRING,
        creatLicensePlates: {
            type: 'TIMESTAMP',
            defaultValue: type.literal('CURRENT_TIMESTAMP'),
            allowNull: false
        },
        updateLicensePlates: {
            type: 'TIMESTAMP',
            defaultValue: type.literal('CURRENT_TIMESTAMP'),
            allowNull: false
        }
    }, {
        timestamps: false,
    })
}

module.exports = licensePlates