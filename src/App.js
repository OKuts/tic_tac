import './App.css';
import {useState} from "react";
import {Square} from "./components/Square";
import {getResult} from "./helper/getResult";
import {Cell} from "./components/Cell";

function App() {
    const [squareSize, setSquareSize] = useState(270)
    const [history, setHistory] = useState(Array(9).fill(null))
    const [mark, setMark] = useState(true)
    const [isVictory, setIsVictory] = useState('')
    const [step, setStep] = useState(0)
    const [victoryCells, setVictoryCells] = useState([])

    const setSymbol = i => {
        const temp = [...history]
        const nextStep = step + 1
        setStep(nextStep)
        temp[i] = mark ? 'X' : '0'
        if (!isVictory) {
            setMark(!mark)
            setHistory(temp)
            if (nextStep > 4) {
                const [answer, arr] = getResult(temp, nextStep)
                setIsVictory(answer)
                setVictoryCells(arr)
            }
        }
    }

    const reset = () => {
        setHistory(Array(9).fill(null))
        setIsVictory(null)
        setMark(true)
        setStep(0)
        setVictoryCells([])
    }

    return (
        <div className="app">
            <div className="controls">
                <input
                    type="range"
                    min={270}
                    max={600}
                    onChange={e => setSquareSize(e.target.value)}
                    value={squareSize}/>
                <div
                    className={mark ? 'active' : ''}
                    onClick={() => !step && setMark(true)}>X
                </div>
                <div
                    className={!mark ? 'active' : ''}
                    onClick={() => !step && setMark(false)}>0
                </div>
            </div>


            <Square size={squareSize}>
                {history.map((item, i) =>
                    <Cell
                        onClick={() => setSymbol(i)}
                        size={squareSize}
                        bg={victoryCells.includes(i) ? '#ccc' : '#fff'}
                        key={i} className="cell">
                        {item}
                    </Cell>)}
            </Square>

            {isVictory && <p>{`Game over: ${isVictory}`}</p>}
            {isVictory && <button onClick={reset}> Reset </button>}
        </div>
    )
}

export default App;
