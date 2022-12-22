import html from './core.js'
export default function TodoList(props){
    let values = Object.values(props);
    return html`
        <div id="main">
            <ul id="list-todos">
                ${values.filter(item =>{
                    switch (filterStatus){
                        case 'active':
                            return !item.completed;
                        case 'completed':
                            return item.completed;
                        default:
                            return true;
                    }
                })
                .map(item => html`
                    <div class="todo-item">
                        <label for="todo-item-box-${item.id}"></label>
                        <li><input type="checkbox" name="checked-item-${item.id}" id="todo-item-box-${item.id}" ${item.completed && 'checked'} onclick="dispatch('COMPLETE', ${item.id})"> ${item.todo}</li>
                            <i class="remove-btn fa-sharp fa-solid fa-xmark" onclick="dispatch('DELETE', ${item.id});"></i>
                        </div>
                `)}
            </ul>
        </div>
    `
}