import React, { Component } from 'react'

export class Watch extends Component {
    constructor(props) {
        super(props)
    }
    render() {
        return (
            <div>
                <p>
                    {this.props.time}
                </p>
            </div>
        )
    }
}

export default Watch
