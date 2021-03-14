import React, { Component } from 'react'

export class AddBox extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div>
                <input type='text' name='searchField' id='searchField' value={this.props.searchField} onChange={this.props.handleSearchFieldChange} />
                <button onClick={this.props.handleAddTodo} > Add </button>
            </div>
        )
    }
}

export default AddBox
