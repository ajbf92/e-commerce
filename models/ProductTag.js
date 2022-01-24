const { Model, DataTypes } = require('sequelize');
const { Product } = require('.');
const { Tag } = require('.');

const sequelize = require('../config/connection');

class ProductTag extends Model {}

ProductTag.init(
  {
    // define columns
    id: {
      // use the special Sequelize DataTypes object provide what type of data it is
      type: DataTypes.INTEGER,
      // this is the equivalent of SQL's `NOT NULL` option
      allowNull: false,
      // instruct that this is the Primary Key
      primaryKey: true,
      // turn on auto increment
      autoIncrement: true,
    },
    product_id: {
      type: DataTypes.INTEGER,
      references: {
        model: Product,
        key: 'id',
        // ?deferrable: Sequelize.Deferrable.INITIALLY_IMMEDIATE
      }
    },
    tag_id: {
      type: DataTypes.INTEGER,
      references: {
        model: Tag,
        key: 'id',
        // ?deferrable: Sequelize.Deferrable.INITIALLY_IMMEDIATE
      }
    }
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'product_tag',
  }
);

module.exports = ProductTag;
