/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  const address = sequelize.define('address', {
    address_id: {
      type: DataTypes.INTEGER(5).UNSIGNED,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    address: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    address2: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    district: {
      type: DataTypes.STRING(20),
      allowNull: false
    },
    city_id: {
      type: DataTypes.INTEGER(5).UNSIGNED,
      allowNull: false,
      references: {
        model: 'city',
        key: 'city_id'
      }
    },
    postal_code: {
      type: DataTypes.STRING(10),
      allowNull: true
    },
    phone: {
      type: DataTypes.STRING(20),
      allowNull: false
    },
    location: {
      type: DataTypes.GEOMETRY,
      allowNull: false
    },
    last_update: {
      type: DataTypes.TIME,
      allowNull: false,
      defaultValue: sequelize.literal('CURRENT_TIMESTAMP')
    }
  }, {
    tableName: 'address',
    timestamps: false 
  });

  address.associate =  function(models){
    address.belongsTo(models.city, {foreignKey: 'city_id'}); //city_id field will be added on address model
    address.hasOne(models.store, {foreignKey: 'address_id'}); //address_id field will be added on store model
    address.hasOne(models.staff, {foreignKey: 'address_id'});
  }
  return address;
};
