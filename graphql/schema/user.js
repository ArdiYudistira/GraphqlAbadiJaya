const { gql } = require("apollo-server-express");

const userSchema = gql`
  type User {
    id: ID!
    name: String!
    email: String!
    phone_number: String
    role: Role
  }

  extend type Query {
    users: [User]
  }

  extend type Mutation {
    createUser(
      name: String!
      email: String!
      password: String!
      roleId: ID!
    ): User
  }
`;

module.exports = userSchema;
