'use strict';
import App from './app.js';
import { attach } from './store.js';

const init = {
    todos: ['Learn JS', 'Learn HTML', 'Learn CSS']
};

const switchFilter = new Map();
switchFilter.set('all', (item) => true);
switchFilter.set('completed', (item) => item.completed);
switchFilter.set('active', (item) =>!item.completed);
window.filterStatus = 'all';

window.changeFilterTo = function changeFilterTo(args){
    let allStatus = document.querySelectorAll('.filter-item');
    allStatus.forEach((item) => {
        item.classList.remove('active-filter');
    });
    allStatus.forEach((item) => {
        if (item.innerText === args) 
            item.classList.add('active-filter');
    });
    console.log(allStatus, args);
    window.filterStatus = args;
}


attach(App, document.getElementById('root'));


