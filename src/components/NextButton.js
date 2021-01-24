import React from 'react';


const NextButton = ({ amount, incrementStart, results, start }) => {
    if (results.length > 0) {
        if (start === 1 && results.length === 10) {
            return (<div>
                <button className="pagination next" onClick={(e) => {
                    e.preventDefault();
                    incrementStart(amount);
                }}>Next</button>
            </div>)
        } else if (start > 1 && results.length === 10) {
            return (
                <div>
                    <button className="pagination prev" onClick={(e) => {
                        e.preventDefault();
                        incrementStart((amount * -1));
                    }}>Previous</button>
                    <button className="pagination next" onClick={(e) => {
                        e.preventDefault();
                        incrementStart(amount);
                    }}>Next</button>
                </div>
            )
        } else if (start && results.length < 10) {
            return (
                <div>
                    <button className="pagination prev" onClick={(e) => {
                        e.preventDefault();
                        incrementStart((amount * -1));
                    }}>Previous</button>
                </div>
            )

        } else {
            return null;
        }

    } else {
        return null;
    }
}

export default NextButton;