module.exports = {
  dialect: 'postgres',
  host: 'localhost',
  username: 'postgres',
  password: 'docker',
  database: 'gobarber',
  define: {
    // armazena a data de criação e atualização de cada registro
    timestamps: true,
    // evita que se crie tabelas no formato camelCase
    underscored: true,
    underscoredAll: true,
  },
};
