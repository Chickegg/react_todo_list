import { Component } from 'react';
import './TodoItemList.css';
import TodoItem from './TodoItem.js';

class TodoItemList extends Component {
    shouldComponentUpdate(NextProps, NextState) {
        return this.props.todos !== NextProps.todos
    }
    render() {
        console.log("TodoItemList");
        const {todos, onToggle, onRemove} = this.props;

        const todoList = todos.map(
            ({id, text, checked, color}) => (
                <TodoItem
                id={id}
                text={text}
                color={color}
                checked={checked}
                onToggle={onToggle}
                onRemove={onRemove}
                key={id}
                />
            )
        )
        return (
            <div className="Todo">
                {todoList}
            </div>
        );
    }
}

export default TodoItemList;