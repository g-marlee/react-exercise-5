import { useState } from 'react';
import './App.css';

function ArraysEx() {
    const [colors, setColors] = useState(['red', 'orange', 'yellow']); 

    function addColor(color: string): void {
        setColors([...colors, color]);
    }


    return (
        <>
            <h2>Arrays Exercise</h2>
            <div>
                <ul>
                    {colors.map(color => (
                        <li>{color}</li>
                    ))}
                </ul>
                <button onClick={() => addColor('green')}>Add Green</button>
                <button onClick={() => addColor('blue')}>Add Blue</button>
                <button onClick={() => addColor('violet')}>Add Violet</button>
            </div>
        </>
    )
}

export default ArraysEx;