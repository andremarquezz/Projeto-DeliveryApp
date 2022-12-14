module.exports = (sequelize, DataTypes) => {
  const ProductsTable = sequelize.define(
    "ProductsModel",
    {
      id: {
        allowNull: false,
        autoIncrement: true,
        type: DataTypes.INTEGER,
        primaryKey: true,
      },
      name: {
        allowNull: false,
        type: DataTypes.STRING,
      },
      price: {
        allowNull: false,
        type: DataTypes.DECIMAL,
      },
      urlImage: {
        field: "url_image",
        allowNull: false,
        type: DataTypes.STRING,
      },
    },
    {
      timestamps: false,
      tableName: "products",
    }
  );

  return ProductsTable;
};
