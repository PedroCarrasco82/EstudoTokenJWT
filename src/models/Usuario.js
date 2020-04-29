const {Model, DataTypes} = require('sequelize');

class Usuario extends Model{
    static init(sequelize){
        super.init({
            name : DataTypes.STRING,
            email: DataTypes.STRING,
            password : DataTypes.STRING,
            birthday_date : DataTypes.DATE,
        },{
            sequelize
        })
    }
}

module.exports = Usuario;
