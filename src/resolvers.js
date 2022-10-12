const resolvers = {
  Query: {
    // Returns an array of Tracks that will be used to populate
    // the home page grid of our web client
    tracksForHome: (_, __, { dataSources }) => {
      return dataSources.TrackAPI.getTracksForHome();
    },
    track: (_, { id }, { dataSources }) => {
      return dataSources.TrackAPI.getTrack(id);
    }
  },

  Mutation: {
    incrementTrackViews: async (_, { id }, { dataSources }) => {
      try {
        const track = await dataSources.TrackAPI.incrementTrackViews(id);

        return {
          code: 200,
          success: true,
          message: `Successfully incremente number of views for track ${id}`,
          track,
        };
      } catch (error) {
        return {
          code: error.extensions.response.status,
          success: false,
          message: error.extensions.response.body,
          track: null,
        };
      }
    },
  },

  Track: {
    author: ({ authorId }, _, { dataSources }) => {
      return dataSources.TrackAPI.getAuthor(authorId);
    },
    modules: ({ id }, _, { dataSources }) => {
      return dataSources.TrackAPI.getTrackModules(id);
    },
  },
};

module.exports = resolvers;
