import React from 'react';
import Square from './Square';

const Borad = ({ sqaures, onClick }) => {
    return(
        <div className="board">
            {sqaures.map((square, i) => {
                return(
                    <Square key={i} value={square} onClick={()=> onClick(i)}>
                    </Square>
                );
            })}
        </div>
    );
};

export default Borad;