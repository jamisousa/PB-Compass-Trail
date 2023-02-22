const graphql = require('graphql');
var _ = require('lodash');

//dummy data
var usersData = [
    {id: '1', name: 'Jams', age: '21', profession: 'Teacher'},
    {id: '133', name: 'Sousa', age: '23', profession: 'Doctor'},
    {id: '121', name: 'Jamileee', age: '21', profession: 'Programmer'},
    {id: '1123', name: 'Teste', age: '23', profession: 'Baker'}
]

var hobbiesData = [
    {id: '1', title: 'Programming', description: 'Its a cool hobby!', userId: '1' },
    {id: '2', title: 'Painting', description: 'Creating beautiful drawings!', userId: '133'}
]

var postsData = [
    {id: '1', comment: 'This is a comment', userId: '1'},
    {id: '2', comment: 'This is another cool comment', userId:'1'},
    {id: '3', comment: 'GraphQL is awesome!', userId:'133'}
]

//Create types
const UserType = new graphql.GraphQLObjectType({
    name: 'User',
    description: 'Documentation for user.',
    fields: () => ({
        id: {type: graphql.GraphQLID},
        name: {type: graphql.GraphQLString},
        age: {type: graphql.GraphQLInt},
        profession: {type: graphql.GraphQLString},
        posts:{
            type: new graphql.GraphQLList(PostType),
            resolve(parent,args){
                return _.filter(postsData, {userId: parent.id})
            }
        },
        hobbies:{
            type: new graphql.GraphQLList(HobbyType),
            resolve(parent,args){
                return _.filter(hobbiesData, {userId: parent.id})
            }
        }
    })
});

const HobbyType = new graphql.GraphQLObjectType({
    name: 'Hobby',
    description: 'Hobby description',  
    fields: () => ({
        id: {type: graphql.GraphQLID}, 
        title: {type: graphql.GraphQLString},
        description: {type: graphql.GraphQLString},
        user:{
            type: UserType,
            resolve(parent,args){
                return _.find(usersData, {id: parent.userId})
            }
        }
    })
});

const PostType = new graphql.GraphQLObjectType({
    name: 'Post',
    description: 'Post description',  
    fields: () => ({
        id: {type: graphql.GraphQLID}, 
        comment: {type: graphql.GraphQLString},
        user:{
            type: UserType,
            resolve(parent, args){
                return _.find(usersData, {id: parent.userId})
            }
        }
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
        },
        users:{
            type: new graphql.GraphQLList(UserType),
            resolve(parent, args){
                return usersData;
            }
        },
        hobby:{
            type: HobbyType,
            args:{
                id: {type: graphql.GraphQLID}},
                resolve(parent, args){
                    //return data for our hobby
                    return _.find(hobbiesData, {
                        id: args.id
                    })
                }
        },
        hobbies:{
            type: new graphql.GraphQLList(HobbyType),
            resolve(parent,args){
                return hobbiesData;
            }
        },
        post:{
            type: PostType,
            args:{
                id: {type: graphql.GraphQLID}},
                resolve(parent, args){
                    //return data for our posts
                    return _.find(postsData, {
                        id: args.id
                    })
                }
        },
        posts:{
            type: new graphql.GraphQLList(PostType),
            resolve(parent,args){
                return postsData;
            }
        },
    }
});


//Mutations
const Mutation = new graphql.GraphQLObjectType({
    name: 'Mutation',
    fields:{
        createUser:{
            type: UserType,
            args:{
                // id: {type: graphql.GraphQLID},
                name: {type: graphql.GraphQLString},
                age: {type: graphql.GraphQLInt},
                profession: {type: graphql.GraphQLString}
            },
            resolve(parent, args){
                let user = {
                    name: args.name,
                    age: args.age,
                    profession: args.profession
                }
                return user;
            }
        },
        createPost:{
            type: PostType,
            args:{
                // id: {type: graphql.GraphQLID}, 
                comment: {type: graphql.GraphQLString},
                userId: {type: graphql.GraphQLString},
            },
            resolve(parent,args){
                let post = {
                    comment: args.comment,
                    userId: args.userId
                }
                return post;
            }
        },
        createHobby:{
            type: HobbyType,
            args:{
                // id: {type: graphql.GraphQLID}, 
                title: {type: graphql.GraphQLString},
                description: {type: graphql.GraphQLString},
                userId: {type: graphql.GraphQLID}
            },
            resolve(parent,args){
                let hobby = {
                    title: args.title,
                    description: args.description,
                    userId: args.userId
                }
                return hobby;
            }
        }
    }
})


module.exports = new graphql.GraphQLSchema({
    query: RootQuery,
    mutation: Mutation
});