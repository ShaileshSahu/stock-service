import {
    gql
} from 'apollo-server';

const typeDefs = gql `
    type Listing {
        description: String!
        title: String!,
        _id: ID!,
        createdAt: String,
        updateAt: String
    }

    type User {
        _id: ID!
        email: String!
        isActive: String!
        createdAt: String
        userName: String
        updatedAt: String
        mobile_number: String
        docs: String
    }

    type UserSession {
        _id: ID!
        uuid: String!
        userId: ID!
        user: User
    }
    type Mutation {
        createUser (email: String!,password: String!, userName:String!): User!
        createUserSession (email: String!,password: String!): UserSession!
        deleteUserSession(sessionId:String): Boolean
    } 
    
    type CoronaDefaultType {
        location: String!
        _id: ID!
        createdAt: String
        date: String
        new_cases: Int
        new_deaths: Int
        biweekly_cases: Int
        total_cases: Int
    }
    
    type Corona {
        data: [CoronaDefaultType]
    }
    type Query {
        listings: [Listing!]!
        users: [User!]!
        userSession(me:Boolean):UserSession
        coronas(limit: Int,search: String): Corona
    }
`;

export default typeDefs;