const Cars = (sequelize, type) => {
    return sequelize.define('Cars', {
        idCars: {
            type: type.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        licenseplateCars: type.STRING,
        brandCars: type.STRING,
        modelCars: type.STRING,
        colourCars:type.STRING,
        chassisCars: type.STRING,
        engineCars: type.STRING,
        yearsCars: type.STRING,
        creatCars: {
            type: 'TIMESTAMP',
            defaultValue: type.literal('CURRENT_TIMESTAMP'),
            allowNull: false
        },
        updateCars: {
            type: 'TIMESTAMP',
            defaultValue: type.literal('CURRENT_TIMESTAMP'),
            allowNull: false
        }
    }, {
        timestamps: false,
    })
}

module.exports = Cars