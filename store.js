'use strict';
import { createStore } from './core.js';

const { attach, connect, dispatch } = createStore();
window.dispatch = dispatch;

export {
    attach,
    connect
}