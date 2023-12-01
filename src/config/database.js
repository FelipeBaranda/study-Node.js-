module.exports = {
  dialect: "postgres",
  host: "localhost",
  username: "postgres",
  password: "123",
  database: "postgres",
  define: {
    timestamp: true, // cria duas colunas: createdAt e updatedAt
    underscored: true,
    underscoredAll: true,
  },
};
