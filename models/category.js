/* jshint indent: 2 */

module.exports = function (sequelize, DataTypes) {
  const category = sequelize.define('category', {
    category_id: {
      type: DataTypes.INTEGER(3).UNSIGNED,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    name: {
      type: DataTypes.STRING(25),
      allowNull: false
    },
    last_update: {
      type: DataTypes.TIME,
      allowNull: false,
      defaultValue: sequelize.literal('CURRENT_TIMESTAMP')
    }
  }, {
    tableName: 'category',
    timestamps: false 
  });

  category.associate = function(models){
    category.belongsToMany(models.film, {through: 'film_category', as:'fcat', foreignKey: 'category_id'});
  }

  return category;
};