import { createConnection } from "typeorm";
import { ApolloServer, gql } from "apollo-server";

const typeDefs = gql``;

const resolvers = {};

const server = new ApolloServer({
  typeDefs,
  resolvers,
});
