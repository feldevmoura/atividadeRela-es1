module.exports = (sequelize, dataTypes) => {

  const ProductType = sequelize.define(
      'ProductType', 
      {
          // Model attributes are defined here
        id: {
          type: dataTypes.INTEGER,
          primaryKey: true
        },
        name: {
          type: dataTypes.STRING(50)
        },
        description: {
          type: dataTypes.STRING(200)
        }
      }, 
      {
          tableName: 'product_types',
          timestamps: false
      }
  )

  // associação UM-PARA-MUITOS da tabela Product com ProductType, UM TIPO para vários produtos, UM PRODUTO para um tipo
  ProductType.associate = (models) => {
    ProductType.hasMany(models.Product, {
      as: 'products',
      foreignKey: 'product_type'
    })
  }
  return ProductType
}