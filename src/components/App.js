import React from 'react';
import search from '../apis/search';
import SearchBar from './SearchBar';
import ResultsList from './ResultsList';
import NextButton from './NextButton';
import Message from './Message';

class App extends React.Component {

    state = {
        results: [], 
        start: undefined, 
        incrementAmount: 0, 
        term: '',
        message: ''
    }

    componentDidMount() {
        const count = parseInt(document.querySelector('#generateSiteSearch').getAttribute('data-result-count'));
        this.setState({
            incrementAmount: count
        })
    }

    updateTerm = (newTerm) => {
        this.setState({
            term: newTerm
        })
    }

    incrementStart = (amount) => {
        let newStart = this.state.start + amount;
        //console.log(`Changing start from ${this.state.start} to ${newStart}`);
        if(newStart > 100) {
            newStart = 100;
        }
        this.setState({
            start: newStart
        });
        this.onTermSubmit(this.state.term, newStart);
    }

    onTermSubmit = async (term, start) => {

        if(!start) {
            start = 1;
            this.setState({start: start})
        }

        //console.log(`Term: ${term} start: ${start}`);

        const response = await search.get('', {
            params: {
                q: term + '-banner -rc -willey -vendor',
                start: start
            }
        });

        //console.log(response.data.items);

        const results = response.data.items;
        if(results) {
            this.setState({ 
                results: results,
                message: ''
            });
        } else {
            this.setState({
                results: [],
                message: 'No results found for that search term. Try again?'
            });
        }
    };

    onCloseClick = () => {
        this.setState({
            results: [], 
            start: undefined, 
            incrementAmount: 0, 
            term: '',
            message: ''
        })
    }

    renderResults = () => {
        if(this.state.results.length > 0) {
            return(
                <div className="search-results">
                    <button className="close" onClick={this.onCloseClick}>x</button>
                    <Message message={this.state.message}></Message>
                    <ResultsList results={this.state.results} />
                    <NextButton amount={this.state.incrementAmount} incrementStart={this.incrementStart} results={this.state.results} start={this.state.start} />
                </div>
            )
        } else if(this.state.message.length > 0) {
            return(
                <div className="search-results">
                    <button onClick={this.onCloseClick}>x</button>
                    <Message message={this.state.message}></Message>
                </div>
            )
        }
    }

    render() {
        return (
            <div className="site-search">
                <SearchBar onTermSubmit={this.onTermSubmit} updateTerm={this.updateTerm} />
                {this.renderResults()}
            </div>
        )
    }
}

export default App;