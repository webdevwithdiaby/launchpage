import React, {Component} from 'react';
import AddBox from './AddBox';
import Watch from './Watch';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            searchField: '',
            todos: [],
            time: new Date().toLocaleTimeString(),
        }
        this.handleSearchFieldChange = this.handleSearchFieldChange.bind(this);
    }

    componentDidMount() {
        this.timerId = setInterval( () => {
            this.setState({time: new Date().toLocaleTimeString()})
        },1000);
    }

    componentWillUnmount() {
        clearInterval(this.timerId);
    }

    handleSearchFieldChange(e) {
        this.setState({searchField:e.target.value});
    }

    handleAddTodo = (e) => {
        this.setState(prev => ({...prev,todos:[...prev.todos,{text:prev.searchField}]}))
        this.setState({searchField:''})
    }

    render() {
        return (
            <div>
                <Watch time={this.state.time} />
                <AddBox searchField={this.props.searchField} handleSearchFieldChange={this.handleSearchFieldChange} handleAddTodo={this.handleAddTodo} />
                {
                    this.state.todos.map((todo,ind) => <p key={ind} > {todo.text} </p>)
                }
            </div>
        );
    }
}

export default App;