/* jshint indent: 2 */
const film = require('./film.js').film;
const filmActor = require('./film_actor.js').filmActor;

module.exports = function(sequelize, DataTypes) {
  const actor= sequelize.define('actor', {
    actor_id: {
      type: DataTypes.INTEGER(5).UNSIGNED,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    first_name: {
      type: DataTypes.STRING(45),
      allowNull: false
    },
    last_name: {
      type: DataTypes.STRING(45),
      allowNull: false
    },
    last_update: {
      type: DataTypes.TIME,
      allowNull: false,
      defaultValue: sequelize.literal('CURRENT_TIMESTAMP')
    }
  }, 
  {
    tableName: 'actor',
    timestamps: false ,    
  });
  actor.associate = function(models){
         console.log('association');
         actor.belongsToMany(models.film, {through: 'film_actor',  as: 'fa', foreignKey:'actor_id'})      
      }    
  //actor.belongsToMany(film, {as:'film_actor',foreignKey:'actor_id', through: filmActor});
  return actor;
};
