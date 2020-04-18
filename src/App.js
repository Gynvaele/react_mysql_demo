import React, {Component} from 'react';
import './App.css';

class App extends Component {
    state = {
        todos: []
    };

    componentDidMount() {
        this.getTodos();
    }

    getTodos = _ => {
        fetch('http://localhost:4000/todos')
            .then(response => response.json())
            .then(response => this.setState({todos: response.data}))
            .catch(err => console.log(err))
    };

    renderTodos = ({todo_id, title}) => <div key={todo_id}>{title}</div>;

    render() {
        const {todos} = this.state;
        console.log(todos);

        return (
            <div className="App">
                {todos.map(() => this.renderTodos)}
            </div>
        );
    }
}

export default App;
