import React, { Component, Fragment } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import { handleInitialData } from '../actions/shared';
import Dashboard from './Dashboard';
import LoadingBar from 'react-redux-loading';
import NewTweet from './NewTweet';
import TweetPage from './TweetPage';
import Nav from './Nav';

class App extends Component {
  componentDidMount() {
    // I can use dispatch here because the connect function is imported
    this.props.dispatch(handleInitialData());
  }

  render() {
    return (
      <Router>
        {/* Fragment is used just so that the LoadingBar is not present on the page after loading, so that we dont need to add an extra div to wrap everything up */}
        <Fragment>
          <LoadingBar />
          <div className='container'>
            <Nav />
            {this.props.loading ? null : (
              <div>
                <Route path='/' exact component={Dashboard} />
                <Route path='/tweet/:id' component={TweetPage} />
                <Route path='/new' component={NewTweet} />
              </div>
            )}
          </div>
        </Fragment>
      </Router>
    );
  }
}

function mapStateToProps({ authedUser }) {
  return {
    loading: authedUser === null,
  };
}

export default connect(mapStateToProps)(App);
