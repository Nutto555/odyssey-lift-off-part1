import gql from "graphql-tag";
 
export const typeDefs = gql`
  type Query {
    "Get tracks array for homepage grid"
    spaceCats: [SpaceCat]
  }
   
  "A track is a group of Modules that teaches about a specific topic"
  type SpaceCat {
    id: ID!
    name: String!
    age: Int
    missions: [Mission]
  }
   
  type Mission {
    id: ID!
    name: String!
    description: String!
  }
`;