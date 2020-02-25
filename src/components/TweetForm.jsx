import React from 'react';
import PropTypes from 'prop-types';
import { v4 } from 'uuid';
import { connect } from 'react-redux';


function TweetForm(props){
  let _author = null;
  let _body = null;

  function handleTweetFormSubmission(event) {
    event.preventDefault();
    const { dispatch } = props;
    const action = {
      type: "ADD_TWIT",
      id: v4(),
      author: _author.value,
      body: _body.value
    }
    dispatch(action)
    _author.value = '';
    _body.value = '';
  }

  return(

    <form onSubmit={handleTweetFormSubmission}>
    <input
    type='text'
    id='author'
    placeholder='author'
    ref={(input) => {_author = input;}}/>
    <textarea
    type='text'
    id='body'
    placeholder='body'
    ref={(input) => {_body = input;}}/>
    <button type='submit'>Tweet!</button>
    </form>

  );
}

TweetForm = connect()(TweetForm);

export default TweetForm;
