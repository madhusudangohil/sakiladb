/* jshint indent: 2 */
const actor = require('./actor.js').actor;
const filmActor = require('./film_actor.js').filmActor;

module.exports = function(sequelize, DataTypes) {
  const film = sequelize.define('film', {
    film_id: {
      type: DataTypes.INTEGER(5).UNSIGNED,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    title: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    description: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    release_year: {
      type: "YEAR(4)",
      allowNull: true
    },
    language_id: {
      type: DataTypes.INTEGER(3).UNSIGNED,
      allowNull: false,
      references: {
        model: 'language',
        key: 'language_id'
      }
    },
    original_language_id: {
      type: DataTypes.INTEGER(3).UNSIGNED,
      allowNull: true,
      references: {
        model: 'language',
        key: 'language_id'
      }
    },
    rental_duration: {
      type: DataTypes.INTEGER(3).UNSIGNED,
      allowNull: false,
      defaultValue: '3'
    },
    rental_rate: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: '4.99'
    },
    length: {
      type: DataTypes.INTEGER(5).UNSIGNED,
      allowNull: true
    },
    replacement_cost: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: '19.99'
    },
    rating: {
      type: DataTypes.ENUM('G','PG','PG-13','R','NC-17'),
      allowNull: true,
      defaultValue: 'G'
    },
    special_features: {
      type: "SET('TRAILERS','COMMENTARIES','DELETED SCENES','BEHIND THE SCENES')",
      allowNull: true
    },
    last_update: {
      type: DataTypes.TIME,
      allowNull: false,
      defaultValue: sequelize.literal('CURRENT_TIMESTAMP')
    }
  }, 
  { 
    tableName: 'film',
    timestamps: false    
  });

  film.associate = models => {
         console.log('association');
         film.belongsToMany(models.actor, {through:'film_actor', as: 'fa', foreignKey:'film_id'})     
      }
  //film.belongsToMany(actor, {as:'film_actor', foreignKey:'film_id', through: filmActor});
  return film;
};
