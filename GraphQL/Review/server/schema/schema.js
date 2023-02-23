const graphql = require('graphql');
var _ = require('lodash');
const User = require("../model/user");
const Hobby = require("../model/hobby");
const Post = require("../model/post");


//dummy data
// var usersData = [
//     {id: '1', name: 'Jams', age: '21', profession: 'Teacher'},
//     {id: '133', name: 'Sousa', age: '23', profession: 'Doctor'},
//     {id: '121', name: 'Jamileee', age: '21', profession: 'Programmer'},
//     {id: '1123', name: 'Teste', age: '23', profession: 'Baker'}
// ]

// var hobbiesData = [
//     {id: '1', title: 'Programming', description: 'Its a cool hobby!', userId: '1' },
//     {id: '2', title: 'Painting', description: 'Creating beautiful drawings!', userId: '133'}
// ]

// var postsData = [
//     {id: '1', comment: 'This is a comment', userId: '1'},
//     {id: '2', comment: 'This is another cool comment', userId:'1'},
//     {id: '3', comment: 'GraphQL is awesome!', userId:'133'}
// ]

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
                return Post.find({userId: parent.id})
                // return _.filter(postsData, {userId: parent.id})
            }
        },
        hobbies:{
            type: new graphql.GraphQLList(HobbyType),
            resolve(parent,args){
                return Hobby.find({userId: parent.id})            }
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
                return User.findById(args.id);
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
                name: {type: new graphql.GraphQLNonNull(graphql.GraphQLString)},
                age: {type: new graphql.GraphQLNonNull(graphql.GraphQLInt)},
                profession: {type: new graphql.GraphQLNonNull( graphql.GraphQLString)}
            },
            resolve(parent, args){
                let user = User({
                    name: args.name,
                    age: args.age,
                    profession: args.profession
                })
                return user.save();
            }
        },
        updateUser:{
            type: UserType,
            args:{
                name: {type: new graphql.GraphQLNonNull(graphql.GraphQLString)},
                age: {type: new graphql.GraphQLNonNull(graphql.GraphQLInt)},
                profession: {type: new graphql.GraphQLNonNull( graphql.GraphQLString)}
            },
            resolve(parent,args){
                return (updatedUser = User.findByIdAndUpdate(
                    args.id,
                    {
                        $set:{
                            name: args.name,
                            age: args.age,
                            profession: args.profession
                        }
                    },
                    {new: true}
                ));
            }
        },
        removeUser:{
            type: UserType,
            args:{
                id: {type: new graphql.GraphQLNonNull(graphql.GraphQLString)}
            },
            resolve(parent,args){
                let removedUser = User.findByIdAndRemove(args.id).exec()
                if(!removedUser){
                    throw new Error();
                }
                return removedUser
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
                let post = Post({
                    comment: args.comment,
                    userId: args.userId
                });
                return post.save();
            }
        },
        removePost:{
            type: PostType,
            args:{
                id: {type: new graphql.GraphQLNonNull(graphql.GraphQLString)}
            },
            resolve(parent,args){
                let removedPost = Post.findByIdAndRemove(args.id).exec()
                if(!removedPost){
                    throw new Error();
                }
                return removedPost
            }
        },
        updatePost:{
            type: PostType,
            args:{
                id: {type: new graphql.GraphQLNonNull(graphql.GraphQLString)},
                comment: {type: graphql.GraphQLString},
                userId: {type: graphql.GraphQLString},
            },
            resolve(parent,args){
                return (updatedPost = Post.findByIdAndUpdate(
                    args.id,
                    {
                        $set:{
                            comment: args.comment
                        }
                    },
                    {new: true}
                ));
            }
        },
        removeHobby:{
            type: HobbyType,
            args:{
                id: {type: new graphql.GraphQLNonNull(graphql.GraphQLString)}
            },
            resolve(parent,args){
                let removedHobby = Hobby.findByIdAndRemove(args.id).exec()
                if(!removedHobby){
                    throw new Error();
                }
                return removedHobby
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
                let hobby = Hobby({
                    title: args.title,
                    description: args.description,
                    userId: args.userId
                });
                return hobby.save();
            }
        },
        updateHobby:{
            type: HobbyType,
            args:{
                id: {type: graphql.GraphQLID}, 
                title: {type: graphql.GraphQLString},
                description: {type: graphql.GraphQLString},
            },
            resolve(parent,args){
                return (updatedHobby = Hobby.findByIdAndUpdate(
                    args.id,
                    {
                        $set:{
                            title: args.title,
                            description: args.description
                        }
                    },
                    {new: true}
                ));
            }
        },
    }
});


module.exports = new graphql.GraphQLSchema({
    query: RootQuery,
    mutation: Mutation
});