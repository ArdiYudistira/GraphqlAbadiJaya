const { gql } = require("apollo-server-express");

const roleSchema = gql`
  type Role {
    id: ID!
    name: String!
    slug: String!
    users: [User]
  }

  extend type Query {
    roles: [Role]
  }

  extend type Mutation {
    createRole(name: String!, slug: String!): Role
    updateRole(id: ID!, name: String!, slug: String!): Role
  }
`;

module.exports = roleSchema;
