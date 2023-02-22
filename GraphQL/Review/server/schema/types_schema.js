const graphql = require("graphql");



//Scalar Type - a type that is not a object
/*
String
Int
Float
Boolean
ID
*/

const Person = new graphql.GraphQLObjectType({
    name:'Person',
    description: 'Represents a person type',
    fields: () => ({
        id: {type: graphql.GraphQLID},
        name: {type: new graphql.GraphQLNonNull(graphql.GraphQLString)},
        age: {type: new graphql.GraphQLNonNull(graphql.GraphQLInt)},
        isMarried: {type: graphql.GraphQLBoolean},
        gpa:{type: graphql.GraphQLFloat},

        justAType:{
            type: Person,
            resolve(parent,args){
                return parent;
            }
        }

    })
})

const RootQuery = new graphql.GraphQLObjectType({

    name: 'RootQueryType',
    description: 'Description',
    fields:{
       person:{
        type: Person,
        //args
        resolve(parent,args){
            let personObj = {
                name: 'Jamile',
                age: 21,
                isMarried: false,
                gpa: 4.0,
            }
            return personObj;
        }
       }
    }

});

module.exports = new graphql.GraphQLSchema({
    query: RootQuery,
});