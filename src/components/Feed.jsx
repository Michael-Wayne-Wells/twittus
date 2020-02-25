import React from "react";
import Tweet from './Tweet';
import TweetForm from './TweetForm';
import PropTypes from 'prop-types';
import { Card, ListGroup }from 'react-bootstrap';
import '../App.css';

function Feed(props){
  return (
    console.log(props),

    <Card bg="dark" style={{ width: '28rem' }}>

      <ListGroup variant="flush">
        {Object.keys(props.feed).map(function(tweetId) {
          let tweet = props.feed[tweetId];
          return <Tweet author={tweet.author}
            body={tweet.body}
            key={tweetId}/>;
          })}
          </ListGroup>
        </Card>


    );
  }

  Feed.propTypes = {
    feed: PropTypes.object
  };

  export default Feed;
