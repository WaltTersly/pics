import React from "react";

class SearchBar extends React.Component {

    state  = {Text: ""};

    onSubmitForm = (event) => {
        event.preventDefault();
        this.props.onSubmit(this.state.Text);
    }

    render() {
        return (
            <div className="ui segement">
                <form onSubmit={this.onSubmitForm} className="ui form">
                <div className="field">
                    <label>Image Search</label>
                    <input type="text" value={this.state.Text} onChange={(e)=>{this.setState({Text: e.target.value})}}/>
                </div>
                </form>
            </div>

        );
    }

}

export default SearchBar;