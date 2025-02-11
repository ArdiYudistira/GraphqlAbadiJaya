const { gql } = require("apollo-server-express");
const { mergeTypeDefs } = require("@graphql-tools/merge");

// Import schema
const roleSchema = require("./role");
const userSchema = require("./user");

// Gabungkan schema
const typeDefs = mergeTypeDefs([
  gql`
    type Query
    type Mutation
  `,
  roleSchema,
  userSchema,
]);

module.exports = typeDefs;
