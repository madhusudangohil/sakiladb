/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  const language = sequelize.define('language', {
    language_id: {
      type: DataTypes.INTEGER(3).UNSIGNED,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    name: {
      type: DataTypes.CHAR(20),
      allowNull: false
    },
    last_update: {
      type: DataTypes.TIME,
      allowNull: false,
      defaultValue: sequelize.literal('CURRENT_TIMESTAMP')
    }
  }, {
    tableName: 'language',
    timestamps: false 
  });

  language.assoicate = function(models){
    language.hasMany(models.film, {foreignKey: 'language_id'});
  }
  return language;
};
