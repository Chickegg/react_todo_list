import { Component } from "react";
import './TodoItem.css';

class TodoItem extends Component {
    shouldComponentUpdate(nextProps, nextState) {
        return this.props.checked !== nextProps.checked;
    }
    render() { 
        console.log("TodoItem");
        const { text , checked, id, color,  onToggle, onRemove } = this.props;
        return (
            <div className="todo-item" style={{color:color}} onClick={() => {onToggle(id)}}>
                <div className="remove" onClick={(e) => {
                    e.stopPropagation();
                    onRemove(id)}
                }>&times;</div>
                <div className={`todo-text${checked ? ' checked' : ''}`}>
                    <div>{text}</div>
                </div>
                {
                    checked && <div className={'check-mark'}>✔</div>
                }
            </div>
        );
    }
}

export default TodoItem;