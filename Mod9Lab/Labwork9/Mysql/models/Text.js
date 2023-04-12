const { DataTypes, Model } = require("sequelize"); 
let dbConnect = require("../dbConnect");

const sequelizeInstance = dbConnect.Sequelize;
class Text extends Model { }

Text.init({
    name: { type: DataTypes.STRING, allowNull: false, required: true },
    content: { type: DataTypes.STRING, allowNull: true, required: false }
},     {
sequelize: sequelizeInstance, modelName: 'Texts',

timestamps: true, freezeTableName: true
    } )
module.exports = Text;

