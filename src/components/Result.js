import React from 'react';

const Result = ({title, link, htmlSnippet}) => {
    return (
        <div className="result">
            <a href={link} dangerouslySetInnerHTML={{__html: title}}></a>
            <p dangerouslySetInnerHTML={{__html: htmlSnippet}}></p>
        </div>
    )
}

export default Result;