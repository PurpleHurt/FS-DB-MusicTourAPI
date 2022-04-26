'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class MeetGreet extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({ Band, Event }) {
      // define association here
      // band
      MeetGreet.belongsTo(Band, {
        foreignKey: "band_id",
        as: "band"
      }), 

      // event
      MeetGreet.belongsTo(Event, {
        foreignKey: "meet_greet_id",
        as: "event"
      })
    }
  }
  MeetGreet.init({
    event_id: {
        type: DataTypes.SMALLINT,
        allowNull: false
    },
    band_id: {
        type: DataTypes.SMALLINT,
        allowNull: false
    },
    meet_start_timne: {
        type: DataTypes.DATE,
        allowNull: false
    },
    meet_end_time: {
        type: DataTypes.DATE,
       allowNull: false
    },
    meet_greet_id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER
      },
  }, {
    sequelize,
    modelName: 'MeetGreet',
    tableName: 'meet_greets',
    timestamps: false
  });
  return MeetGreet;
};