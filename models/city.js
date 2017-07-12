/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  const city = sequelize.define('city', {
    city_id: {
      type: DataTypes.INTEGER(5).UNSIGNED,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    city: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    country_id: {
      type: DataTypes.INTEGER(5).UNSIGNED,
      allowNull: false,
      references: {
        model: 'country',
        key: 'country_id'
      }
    },
    last_update: {
      type: DataTypes.TIME,
      allowNull: false,
      defaultValue: sequelize.literal('CURRENT_TIMESTAMP')
    }
  }, {
    tableName: 'city',
    timestamps: false 
  });

  city.associate = function(models){
    city.belongsTo(models.country, {foreignKey: 'country_id'});
    city.hasMany(models.address, {foreignKey: 'city_id'});
  }
  return city;
};
