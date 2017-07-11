/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('sales_by_store', {
    store: {
      type: DataTypes.STRING(101),
      allowNull: true
    },
    manager: {
      type: DataTypes.STRING(91),
      allowNull: true
    },
    total_sales: {
      type: DataTypes.DECIMAL,
      allowNull: true
    }
  }, {
    tableName: 'sales_by_store'
  });
};
