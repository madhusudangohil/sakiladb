/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  const store = sequelize.define('store', {
    store_id: {
      type: DataTypes.INTEGER(3).UNSIGNED,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    manager_staff_id: {
      type: DataTypes.INTEGER(3).UNSIGNED,
      allowNull: false,
      references: {
        model: 'staff',
        key: 'staff_id'
      },
      unique: true
    },
    address_id: {
      type: DataTypes.INTEGER(5).UNSIGNED,
      allowNull: false,
      references: {
        model: 'address',
        key: 'address_id'
      }
    },
    last_update: {
      type: DataTypes.TIME,
      allowNull: false,
      defaultValue: sequelize.literal('CURRENT_TIMESTAMP')
    }
  }, {
    tableName: 'store',
    timestamps: false 
  });

  store.associate = function(models){
    store.hasMany(models.staff);
    store.belongsToMany(models.film, {through:models.inventory});
    store.hasOne(models.address, {foreignKey: 'address_id'});
  }

  return store;
};
