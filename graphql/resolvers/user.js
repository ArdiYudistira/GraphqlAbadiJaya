const { Users, Roles } = require("../../models");

const userResolvers = {
  Query: {
    users: async () => await Users.findAll({ include: Roles }),
  },
  Mutation: {
    createUser: async (_, { name, email, password, roleId }) => {
      return await Users.create({ name, email, password, roleId });
    },
  },
  User: {
    role: async (user) => await user.getRole(),
  },
};

module.exports = userResolvers;
