const { mergeResolvers } = require("@graphql-tools/merge");

// Import resolvers
const roleResolvers = require("./role");
const userResolvers = require("./user");

// Gabungkan resolvers
const resolvers = mergeResolvers([roleResolvers, userResolvers]);

module.exports = resolvers;
