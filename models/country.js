/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  const country = sequelize.define('country', {
    country_id: {
      type: DataTypes.INTEGER(5).UNSIGNED,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    country: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    last_update: {
      type: DataTypes.TIME,
      allowNull: false,
      defaultValue: sequelize.literal('CURRENT_TIMESTAMP')
    }
  }, {
    tableName: 'country',
    timestamps: false 
  });

  country.associate = function(models){
    country.hasMany(models.city, {foreignKey: 'country_id'});
  }
  return country;
};
