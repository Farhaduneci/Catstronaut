import { gql } from 'apollo-server';

const typeDefs = gql`
    type Query {
        "Query to get all the tracks"
        tracks: [Track!]!
    }

    "A track is a group of modules that teaches about specific topic"
    type Track {
        id: ID!
        "The name of the track"
        title: String!
        "The name of the author of the track"
        author: Author!
        "The modules that are part of this track"
        modulesCount: Int
        "The track's main illustration to be displayed on the track card or the home page"
        thumbnail: String
        "The track's approximate duration in minutes"
        length: Int
    }

    type Author {
        id: ID!
        "The name of the author"
        name: String!
        "Author's profile picture"
        avatar: String
    }
`;

export { typeDefs };
