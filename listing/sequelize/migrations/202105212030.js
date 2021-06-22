module.exports.up = (queryInterface, DataTypes) => {
    return queryInterface.createTable("listings", {
        id: {
            allowNull: false,
            autoIncrement: true,
            primaryKey: true,
            type: DataTypes.INTEGER.UNSIGNED
        },
        title: {
            allowNull: false,
            type: DataTypes.STRING
        },
        description: {
            allowNull: true,
            type:DataTypes.TEXT
        },
        createdAt: {
            allowNull: true,
            type: DataTypes.DATE
        },
        updatedAt: {
            allowNull: true,
            type: DataTypes.DATE
        }
    }, {
        charset: "utf8"
    })
};