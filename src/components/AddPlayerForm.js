import React, {Component} from 'react';

class AddPlayerForm extends Component {

    state = {
        value: ''
    };


    handleValueChange = (e) => {
        this.setState ({ value: e.target.value});
        console.log(e.target.value);
    };

    handleSubmit = (e) => {
        // Prevents the forms default behavior by calling preventDefault on the event object.
        // If we don't prevent the form's default submit behavior, it will result in the browser posting a request back to the server.
        // That would cause our application to reload in the browser, which means that we'd lose all of our application state in the process.
        e.preventDefault(this.state.value);
        this.props.addPlayer(this.state.value);
        this.setState ({ value: ''});
    };

    render () {
        return (
            <form onSubmit={this.handleSubmit}>
                <input
                type="text"
                value={this.state.value}
                onChange={this.handleValueChange}
                placeholder="Enter a player's name"
                />
                <input
                    type="submit"
                    value="Add Player"
                />
            </form>
        );
    }
}

export { AddPlayerForm };