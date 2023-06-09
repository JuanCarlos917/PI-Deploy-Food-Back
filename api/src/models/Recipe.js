const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
	// defino el modelo
	sequelize.define(
		'recipe',
		{
			id: {
				type: DataTypes.UUID,
				defaultValue: DataTypes.UUIDV4,
				primaryKey: true,
				allowNull: false,
			},
			title: {
				type: DataTypes.STRING,
				allowNull: false,
			},
			image: {
				type: DataTypes.STRING,
				allowNull: false,
			},
			summary: {
				type: DataTypes.STRING,
				allowNull: false,
			},
			healthScore: {
				type: DataTypes.FLOAT,
				allowNull: false,
			},
			steps: {
				type: DataTypes.ARRAY(DataTypes.JSONB),
				allowNull: false,
			},
			createDb: {
				type: DataTypes.BOOLEAN,
				defaultValue: true,
			},
		},
		{ timestamps: false },
	);
};
