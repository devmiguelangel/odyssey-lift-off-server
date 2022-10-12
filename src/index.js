const { ApolloServer } = require('apollo-server');
const typeDefs = require('./schema');
const resolvers = require('./resolvers');
// Mocks
// const mocks = require('./mocks');
// API
const TrackAPI = require('./datasources/track-api');

// Apollo server
const server = new ApolloServer({
  typeDefs,
  // mocks,
  resolvers,
  dataSources: () => ({
    TrackAPI: new TrackAPI(),
  })
});

// Server listening
async function startApolloServer(server) {
  const { url } = await server.listen({ port: process.env.PORT || 4000 });

  console.log(`🚀  Server is running! at ${url}`);
};

startApolloServer(server);

