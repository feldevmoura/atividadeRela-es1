module.exports = (sequelize, dataTypes) => {

  const Product = sequelize.define(
    'Product',
    {
      // Model attributes are defined here
      id: {
        type: dataTypes.INTEGER,
        primaryKey: true
      },
      name: {
        type: dataTypes.STRING
      },
      description: {
        type: dataTypes.STRING
      },
      product_type: {
        type: dataTypes.INTEGER
      },
      preco: {
        type: dataTypes.FLOAT
      }
    },
    {
      tableName: 'products',
      timestamps: false
    }
  )
  // associação UM-PARA-UM da tabela Product com ProductType, com FK em Product
  Product.associate = (models) => {
    Product.belongsTo(models.ProductType, {
      as: 'category',
      foreignKey: 'product_type'
    })
  }

  // associação MUITOS-PARA-MUITOS da tabela Product com Stores
  Product.associate = (models) => {
    Product.belongsToMany(models.Store, {
      through: 'stores_products',
      as: 'stores',
      foreignKey: 'product_id',
      otherKey: 'store_id',
      timestamps: false
    })
  }


  return Product
}