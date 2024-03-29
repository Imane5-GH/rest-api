/* jshint indent: 2 */

module.exports = function (sequelize, DataTypes) {
  const Coment = sequelize.define(
    'Coment',
    {
      id: {
        type: DataTypes.INTEGER(11),
        allowNull: false,
        primaryKey: true,
        comment: 'null',
        autoIncrement: true,
      },
      text: {
        type: DataTypes.TEXT,
        allowNull: false,
        comment: 'null',
      },
      userId: {
        type: DataTypes.INTEGER(11),
        allowNull: false,
        comment: 'null',
        references: {
          model: 'User',
          key: 'id',
        },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
      },
      postId: {
        type: DataTypes.INTEGER(11),
        allowNull: false,
        comment: 'null',
        references: {
          model: 'Post',
          key: 'id',
        },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
      },
    },
    {
      tableName: 'coments',
    }
    );
    
    Coment.associate = (models) => {
      Coment.belongsTo(models.Post, { as: 'post', foreignKey:'postId'});
      Coment.belongsTo(models.User, { as: 'user_coment', foreignKey: 'userId'});
    };
    
    return Coment;
  };
  