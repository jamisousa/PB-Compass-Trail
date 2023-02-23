const express = require('express');
const { graphqlHTTP } = require('express-graphql')
const app = express();
const schema = require('./schema/schema');
const mongoose = require('mongoose');
const cors = require("cors");


app.use(cors());

app.use('/graphql', graphqlHTTP({
    graphiql: true,
    schema: schema
}));

mongoose.connect(`mongodb+srv://credentials@mycluster.hr9tpx4.mongodb.net/?retryWrites=true&w=majority`)
.then(()=>{
    app.listen(4000, ()=>{
        console.log('Listening...');
    });
}).catch((e)=>{console.log(e)});


