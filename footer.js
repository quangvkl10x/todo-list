'use strict';
import html from './core.js'

function countWithFilter(state){
    let result = 0;
    let cur = (item) => {
        switch (filterStatus){
            case 'active':
                return !item.completed;
            case 'completed':
                return item.completed;
            default:
                return true;
        }
    }
    for (let item of Object.values(state)){
        result += cur(item);
    }
    return result;
}

export default function Footer(state){
    return html`
        <div id="footer">
            <div class="footer-item">
                <span>${countWithFilter(state)} item left</span>
            </div>
            <div class="footer-item mid-align">
                <ul class="filter">
                    <li class="filter-item active-filter" onclick="dispatch('FILTER', 'all'); changeFilterTo('all')">all</li>
                    <li class="filter-item " onclick="dispatch('FILTER', 'completed'); changeFilterTo('completed')">completed</li>
                    <li class="filter-item " onclick="dispatch('FILTER', 'active'); changeFilterTo('active')">active</li>
                </ul>
            </div>
            <div class="footer-item right-align">
                <span class="clear-completed" onclick="dispatch('DESTROY');">clear completed</span>
            </div>
        </div>
    `
}
