import React, {Component} from 'react';
import gql from 'graphql-tag';
import {graphql} from 'react-apollo';

class SongList extends Component {
    render(){
        return(
            <div>
            <p>SongList</p>
            </div>
        );
    }
}

const query = gql`
    {
        songs{
        title
        }
    }
`;

export default graphql(query)(SongList);