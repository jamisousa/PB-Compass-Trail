const express = require('express');
const { graphqlHTTP } = require('express-graphql')
const app = express();
const schema = require('../server/schema/schema');
const testSchema = require('./schema/types_schema');

app.use('/graphql', graphqlHTTP({
    graphiql: true,
    schema: testSchema
}));


app.listen(4000, ()=>{
    console.log('Listening...');
});