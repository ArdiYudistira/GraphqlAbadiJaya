const { Roles } = require("../../models");

const roleResolvers = {
  Query: {
    roles: async () => await Roles.findAll({}),
  },
  Mutation: {
    createRole: async (_, { name, slug }) => {
      return await Roles.create({ name, slug });
    },
    updateRole: async (_, { id, name, description }) => {
      try {
        const role = await Roles.findByPk(id);
        if (!role) {
          throw new Error("Role not found");
        }

        // Update role
        await role.update({ name, description });

        return {
          id: role.id,
          name: role.name,
          slug: role.slug,
        };
      } catch (error) {
        throw new Error(error.message);
      }
    },
  },
};

module.exports = roleResolvers;
