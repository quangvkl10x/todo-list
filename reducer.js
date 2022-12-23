'use strict';

const LOCALSTORAGE_KEY = 'todoList';

if (localStorage.getItem(LOCALSTORAGE_KEY) === JSON.stringify(null) || !localStorage.getItem(LOCALSTORAGE_KEY))
    localStorage.setItem(LOCALSTORAGE_KEY, JSON.stringify([]));
const TODOS = JSON.parse(localStorage.getItem(LOCALSTORAGE_KEY));

const actions = {
    ADD(state, args){
        let id = state.length;
        let todo = args;
        let completed = false;
        state.push({
            id,
            todo,
            completed,
        });
    },
    DELETE(state, args){
        for (let i = 0; i < state.length; i++) {
            if (state[i].id === args) {
                state.splice(i, 1);
                return;
            }
        }
    },
    COMPLETE(state, args){
        for (let i = 0; i < state.length; i++) {
            if (state[i].id === args) {
                state[i].completed = !state[i].completed;
                return;
            }
        }
    },
    FILTER(state, args){
        window.filterStatus = args;
    },
    DESTROY(state){
        for (let i = 0; i < state.length; i++) {
            if (state[i].completed) {
                state.splice(i, 1);
                i--;
            }
        }
    }
}

export default function reducer(action, args, state = TODOS) {
    localStorage.setItem(LOCALSTORAGE_KEY, JSON.stringify(state));

    switch(action){
        case 'ADD':
            (args || args === 0) && actions.ADD(state, args);
            break;
        case 'DELETE':
            (args || args === 0) && actions.DELETE(state, args);
            break;
        case 'COMPLETE':
            (args || args === 0) && actions.COMPLETE(state, args);
            break;
        case 'FILTER':
            (args || args === 0) && actions.FILTER(state, args);
            break;
        case 'DESTROY':
            actions.DESTROY(state);
            break;
        default:
            return state;
    }
    localStorage.setItem(LOCALSTORAGE_KEY, JSON.stringify(state));
    return state;   
}