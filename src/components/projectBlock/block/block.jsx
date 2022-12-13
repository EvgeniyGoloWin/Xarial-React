import React from 'react';

import "./block.css"

const Block = ({item}) => {
    const getProgress = (status) => {
        switch (status) {
            case "pending":
                return 10;
            case "rejected":
                return 35;
            case "fulfilled":
                return 100;
        }
    }

    return (
        <div>
            <div className={"block"}>
                <p>{item.name}</p>
                <p>{item.status}</p>
                <div className="progress">
                    <div className="bar" style={{width: `${getProgress(item.status)}%`}}/>
                </div>
            </div>
        </div>
    );
};

export default Block;