import React from 'react';
import ReactDOM from 'react-dom';
import Router from 'react-router';
import {
    HashRouter,
    Route,
    Link
} from 'react-router-dom';
import ContactListContainer from './js/components/contact-list-container';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import './index.css';

ReactDOM.render((
    <HashRouter>
    </HashRouter >
), document.getElementById( 'page' ) )
ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();


const routes = (
    <Router history={HashRouter}>
    <Route path="/contacts" component={ContactListContainer} />
    </Router>
);

document.addEventListener('DOMContentLoaded', () =>
                          ReactDOM.render(routes, document.getElementById('app'))
                         );
