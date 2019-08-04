import React from 'react';
import { connect } from 'react-redux';
import { Route, withRouter } from 'react-router-dom';
import Board from './Board';
import Results from './Results';

const App = () => {
  return (
    <>
    <Route exact path="/" component={Board} />
    <Route exact path="/results" component={Results} />
    </>
  )
}

export default withRouter(connect()(App));