import React, { useState } from 'react';
import { calculateWinner } from '../helper';
import swal from '@sweetalert/with-react';
import Borad from './Board';

const Game = () => {
    const [history, setHistory] = useState([Array(9).fill(null)])
    const [stepNumber, setStepNumber] = useState(0);
    const [xIsNext, setXisNext] = useState(true);
    const winner = calculateWinner(history[stepNumber]);
    const xo = xIsNext ? "X" : "O";

    const handleClick = (i) => {
        const historyPoint = history.slice(0, stepNumber + 1);
        const current = historyPoint[stepNumber];
        const sqaures = [...current];

        if(winner || sqaures[i]) return;

        sqaures[i] = xo;
        setHistory([...historyPoint, sqaures]);
        setStepNumber(historyPoint.length);
        setXisNext(!xIsNext);
    };

    const winnerPopUp = () => {
        setTimeout(() => {
            swal(
                <div style={{background: '#fff'}}>
                    <h1 style={{textShadow: '1px 1px 0px #50DFFB, 0px 1px 90px ', color: '#474747'}}>Winner is : {winner}</h1>
                </div>, {
                    button: {
                        text: "Close",
                        className: "close"
                    },
                    
                }
            )
        }, 420);
    }

    return(
        <div className="gameArea">
            <h1 className="title" data-text="Tic-Tac-Toe">Tic-Tac-Toe</h1>
            <h3 style={{color: '#fff'}}>{winner ? winnerPopUp() : "Next Player:" + xo}</h3>
            <Borad sqaures={history[stepNumber]} onClick={handleClick} />
            <div>
                <button className="reset" onClick={() => setStepNumber(0)}>
                    Reset_
                </button>
            </div>

        </div>
    )
};

export default Game;


//  For Future Perpose



    // const jumpTo = (step) => {
    //     setStepNumber(step);
    //     setXisNext(step % 2 === 0);
    // }

    // const renderMoves = () => {
    //     history.map((_step, move) => {
    //         if(move === 0) {
    //             return(
    //                 <div key={move}>
    //                     <button onClick={() => jumpTo(move)}>Reset</button>
    //                 </div>
    //             )
    //         }
    //         return move;
    //         // const destination = move ? `Go to move: ${move}` : "Go to Start";
    //         // const destination = 0 ? "Reset" : "Reset";
    //         console.log(move);
    //         // return(
    //         //     <li key={move}>
    //         //         <button onClick={() => jumpTo(move)}>{destination}</button>
    //         //     </li>
    //         // )
    //     })
    // }