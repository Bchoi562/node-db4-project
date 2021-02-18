const knex = require("knex");

const config = rqeuire("../knexfile.js");

const configuredKnex = knex(config.development);

module.exports = configuredKnex;