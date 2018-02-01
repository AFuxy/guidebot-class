const { dataName, dataPass } = require("../config.js");

const Sequelize = require("sequelize");

module.exports = new class Database {
  constructor() {
    this.database = new Sequelize("GuideBot", dataName, dataPass, {
      host: "localhost",
      dialect: "postgres",
      logging: false
    });

    this.guildsettings = this.database.define("guildsettings", {
      id: {
        type: Sequelize.STRING,
        primaryKey: true,
        allowNull: false,
        unique: true
      }, 
      prefix: {
        type: Sequelize.STRING,
        defaultValue: "-",
        allowNull: false
      }, 
      modLogChannel: {
        type: Sequelize.STRING,
        defaultValue: "mod-log",
        allowNull: false
      }, 
      modRole: {
        type: Sequelize.STRING,
        defaultValue: "Moderator",
        allowNull: false
      }, 
      adminRole: {
        type: Sequelize.STRING,
        defaultValue: "Administrator",
        allowNull: false
      }, 
      systemNotice: {
        type: Sequelize.BOOLEAN,
        defaultValue: true,
        allowNull: false
      }, 
      welcomeEnabled: {
        type: Sequelize.BOOLEAN,
        defaultValue: false,
        allowNull: false
      }, 
      welcomeChannel: {
        type: Sequelize.STRING,
        defaultValue: "welcome",
        allowNull: false
      }, 
      welcomeMessage: {
        type: Sequelize.STRING,
        defaultValue: "Say hello to {{user}}, everyone! We all need a warm welcome sometimes :D",
        allowNull: false
      }
    });
  }
};