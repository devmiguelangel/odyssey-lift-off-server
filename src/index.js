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
server.listen().then(() => {
  console.log(`
    🚀  Server is running!
    🔉  Listening on port 4000
    📭  Query at http://localhost:4000
  `);
});
