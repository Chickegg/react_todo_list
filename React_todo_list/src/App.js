import { Component } from 'react';
import TodoListTemplate from './components/TodoListTemplate';
import TodoItemList from './components/TodoItemList'
import Form from './components/Form';
import Palette from './components/Palette';

const colors = ['#343a40', '#f03e3e', '#12b886', '#228ae6'];
class App extends Component {

    id = 3;

    state = {
        input: '',
        todos: [
            { id : 0, text: '리엑트 소개', checked: true },
            { id : 1, text: '리엑트 소개', checked: false },
            { id : 2, text: '리엑트 소개', checked: false },
        ],
        color: '#343a40'
    }

    handleChange = (e) => {
        this.setState({
            input: e.target.value // input이 바뀔 값
        });
    }
    handleCreate = () => {
        const { input, todos, color } = this.state;
        this.setState({
            input: '',
            todos: todos.concat({
                id : this.id++,
                text: input,
                checked: false,
                color
            })
        });
        console.log(this.state);
    }
    handleKeyPress = (e) => {
        if(e.key === 'Enter') {
            this.handleCreate();
        }
    }
    handleToggle = (id) => {
        const { todos } = this.state;
        const index = todos.findIndex(todo => todo.id === id); 
        const selected = todos[index];

        const nextTodos = [...todos]; // 덮어쓰기위해 만들어줄 array
        console.log(nextTodos[index]);
        nextTodos[index] = {
            ...selected,
            checked: !selected.checked,
            text: "Boom"
        };
        console.log(nextTodos);
        this.setState({
            todos: nextTodos
        });
    }
    handleRemove = (id) => {
        const { todos } = this.state;
        this.setState({
            todos: todos.filter(todo => todo.id !== id)
        });
    }
    handleColor = (color) => {
        this.setState({
            color
        })
        console.log(this.state);
    }


    render() {
        const { input, todos, color } = this.state;
        const {
            handleChange,
            handleCreate,
            handleKeyPress,
            handleToggle,
            handleRemove,
            handleColor
        } = this;
        return(
           <TodoListTemplate form={(
                <Form 
                value ={input}
                onChange={handleChange}
                onCreate={handleCreate}
                onKeyPress={handleKeyPress}
                color={color}
                />
            )}
                palette ={(
                <Palette 
                    colors = {colors}
                    selected = {color}
                    onSelect = {handleColor}
                    />)}
                >
                <TodoItemList 
                    todos={todos}
                    onToggle={handleToggle}
                    onRemove={handleRemove}
                    />
           </TodoListTemplate>
        )
    }
}

export default App;