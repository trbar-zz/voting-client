import React from 'react';
import ReactDOM from 'react-dom';
import {Router, Route, hashHistory} from 'react-router';
import App from './components/App';
import {VotingContainer} from './components/Voting';
import {ResultsContainer} from './components/Results';
import {createStore} from 'redux';
import {Provider} from 'react-redux';
import reducer from './reducer';

const store = createStore(reducer);
store.dispatch({
	type: 'SET_STATE';
	state: {
		vote: {
			pair: ['Sunshine', '28 Days Later'],
			tally: {Sunshine: 2}
		}
	}
});


const routes = <Route component={App}>
  <Route path="/" component={VotingContainer} />
  <Route path="/results" component={ResultsContainer} />
</Route>;

ReactDOM.render(
	<Router history={hashHistory}>{routes}</Router>,
	document.getElementById('app')
);

ReactDOM.render(
	<Provider store={store}>
	  <Router history={hashHistory}>{router}</Router>
	</Provider>,
	document.getElementById('app')
);

