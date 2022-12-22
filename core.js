'use strict';
import reducer from './reducer.js';

export default function html([first, ...strings], ...args){
    return args.reduce( (acc, cur) => acc.concat(cur, strings.shift()),
            [first])
    .filter(x => (x && x !== true) || x === 0)
    .join('');
}

export function createStore(){
    let state = reducer();
    const roots = new Map();

    function render(){
        for (const [root, component] of roots){
            if (component){
                root.innerHTML = component();
            }
        }
    }

    return{
        attach(component, root){
            roots.set(root, component);
            render();
        },
        connect(selector = state => state){
            return  component => (props, ...args) => 
                    component(Object.assign({}, selector(state), props,...args));
        },
        dispatch(action, args){
            state = reducer(action, args);
            render();
            return state;
        }
    }
}