import React from 'react';
import Result from './Result';

const ResultsList = ({results}) => {

        const renderedList = results.map((result) => {
            return(<Result 
                key={result.cacheId} 
                title={result.htmlTitle} 
                htmlSnippet={result.htmlSnippet}
                displayLink={result.displayLink}
                link={result.link}
                ></Result>);
        });

    return (
        <div className="results-list">
                {renderedList}
        </div>
    )
}

export default ResultsList;