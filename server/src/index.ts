//TODO
import { ApolloServer } from "@apollo/server";
import { startStandaloneServer } from "@apollo/server/standalone";
import { typeDefs } from "./schema";
import { addMocksToSchema } from "@graphql-tools/mock";
import { makeExecutableSchema } from "@graphql-tools/schema";

const mocks = {
    SpaceCat: () => ({
      id: () => 'spacecat_01',
      title: () => 'spacecat pioneer'
    })
  }
const server = new ApolloServer({
  schema: addMocksToSchema({
    schema: makeExecutableSchema({ typeDefs }),
    mocks,
  }),
});

async function startApolloServer() {
    const server = new ApolloServer({ typeDefs });
    const { url } = await startStandaloneServer(server);
    console.log(`
      🚀  Server is running!
      📭  Query at ${url}
    `);
  }
startApolloServer();