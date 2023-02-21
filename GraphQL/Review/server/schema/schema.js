const graphql = require('graphql');
var _ = require('lodash');

//dummy data
var usersData = [
    {id: '1', name: 'Jams', age: '21'},
    {id: '133', name: 'Sousa', age: '23'},
    {id: '121', name: 'Jamileee', age: '21'},
    {id: '1123', name: 'Teste', age: '23'}
]

//Create types
const UserType = new graphql.GraphQLObjectType({
    name: 'User',
    description: 'Documentation for user.',
    fields: () => ({
        id: {type: graphql.GraphQLString},
        name: {type: graphql.GraphQLString},
        age: {type: graphql.GraphQLInt},
    })
});

//RootQuery
const RootQuery = new graphql.GraphQLObjectType({
    name: 'RootQueryType',
    description: 'description',
    fields: {
        user: {
            type: UserType,
            args: {id: {type: graphql.GraphQLString}},
            resolve(parent, args){
                //resolve with data
                //get and return data from a datasource
                return _.find(usersData, {
                    id: args.id
                })
            }
        }
    }
});

module.exports = new graphql.GraphQLSchema({
    query: RootQuery
});