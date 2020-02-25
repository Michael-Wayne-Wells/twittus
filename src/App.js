import React from 'react';
import Header from "./components/Header";
import Feed from "./components/Feed";
import Profile from "./components/Profile";
import PropTypes from 'prop-types';
import TweetControl from "./components/TweetControl";
import { Row, Col, Container } from 'react-bootstrap';
import Suggestions from "./components/Suggestions";
import 'bootstrap/dist/css/bootstrap.min.css';
import { connect } from 'react-redux';


function App(props) {
    return (
      <div>
      <Header/>
      <Container>
      <Row>
      <Col md="auto"><Profile/></Col>
      <Col md="auto"><TweetControl /><Feed  feed={props.masterTweetList} /></Col>
      <Col md="auto"><Suggestions/></Col>
      </Row>
      </Container>
      </div>
    );
}

App.propTypes = {
  masterTweetList: PropTypes.object
};

const mapStateToProps = state => {
  return {
    masterTweetList: state
  };
};

export default connect(mapStateToProps)(App);
