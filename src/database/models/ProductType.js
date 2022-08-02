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


  return ProductType
}