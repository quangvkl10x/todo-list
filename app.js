'use strict';

import { connect } from './store.js';
import html from './core.js';
import Header from './header.js'
import Footer from './footer.js'
import TodoList from './todo-list.js'

const connector = connect();


function App(props) {
    return html`
        ${Header()}
        ${TodoList(props)}
        ${Footer(props)}
    `;
}

export default connector(App);