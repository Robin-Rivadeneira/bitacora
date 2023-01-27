const licensePlate = (sequelize, type) => {
    return sequelize.define('licensePlates', {
        idlicensePlate: {
            type: type.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        registrationYearLicensePlates: type.STRING,
        registrationExpirationDateLicensePlates: type.STRING,
        toNameLicensePlates: type.STRING,
        creatlicensePlate: {
            type: 'TIMESTAMP',
            defaultValue: type.literal('CURRENT_TIMESTAMP'),
            allowNull: false
        },
        updatelicensePlate: {
            type: 'TIMESTAMP',
            defaultValue: type.literal('CURRENT_TIMESTAMP'),
            allowNull: false
        }
    }, {
        timestamps: false,
    })
}

module.exports = licensePlate