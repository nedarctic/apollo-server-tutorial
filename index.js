const express = require('express');
const  {ApolloServer} = require('apollo-server-express');

const app = express();

(async () => {
  const apolloServer = new ApolloServer({
    typeDefs: `
     type Query {
       hello: String!
     }
    `,
    resolvers: {
      Query: {
        hello: () => 'Hello world!',
      }
    },
  });
  await apolloServer.start();
  apolloServer.applyMiddleware({ app });
})();

app.listen(3001, () => {
  console.log('Graphql server listening on port 3001!');
});
