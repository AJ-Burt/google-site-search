import React from 'react';

class SearchBar extends React.Component {
    state = {term: ''};
    
    onInputChange = event => {
        this.setState({term: event.target.value});
    };

    onFormSubmit = event => {
        event.preventDefault();
        this.props.updateTerm(this.state.term);
        this.props.onTermSubmit(this.state.term, this.props.start);
    }

    render() {
        return (
            <div className="search-bar ui segment">
                <form onSubmit={this.onFormSubmit} className="ui form">
                    <div className="field">
                        <input 
                            type="text" 
                            value={this.state.term}
                            onChange={this.onInputChange}
                            placeholder="Search Build Idaho"
                        />
                    </div>
                </form>
            </div>
        );
    }
}

export default SearchBar;