'use strict';
import html from './core.js';

export default function Header(){
    return html`
            <div id="heading">
            <h1>Todo list</h1>
            </div>
            <div id="add-section">
            <div class="add-btn" onclick="dispatch('ADD', document.getElementById('todo-input').value);">
            <i class="fa-solid fa-plus"></i>
            </div>
                <input type="text" name="todo-value" id="todo-input" placeholder="Add to-do..." onkeydown="if(event.keyCode===13) dispatch('ADD', this.value);">
            </div>
        `;
    }
    

