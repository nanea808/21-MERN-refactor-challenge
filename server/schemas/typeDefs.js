const { gql } = require('apollo-server-express');

// TODO: Implement typeDefs

const typeDefs = gql`
  type Book {
    _id: ID
    authors: String
    description: String
    bookId: String
    image: String
    link: String
    title: String
  }

  type User {
    _id: ID
    username: String
    email: String
    password: String
    savedBooks: [Book]
  }

  type Query {
    users: [User]!
    user(username: String!): User
    me: User
  }
`;

// const typeDefs = gql`
//   type Thought {
//     _id: ID
//     thoughtText: String
//     thoughtAuthor: String
//     createdAt: String
//     comments: [Comment]!
//   }

//   type Comment {
//     _id: ID
//     commentText: String
//     createdAt: String
//   }

//   type Query {
//     thoughts: [Thought]!
//     thought(thoughtId: ID!): Thought
//   }

//   type Mutation {
//     addThought(thoughtText: String!, thoughtAuthor: String!): Thought
//     addComment(thoughtId: ID!, commentText: String!): Thought
//     removeThought(thoughtId: ID!): Thought
//     removeComment(thoughtId: ID!, commentId: ID!): Thought
//   }
// `;

module.exports = typeDefs;
