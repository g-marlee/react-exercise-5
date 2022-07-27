import { useState } from 'react';
import './App.css';

function ArraysEx() {
    const [colors, setColors] = useState(['red', 'orange', 'yellow']); 


    return (
        <>
            <h2>Arrays Exercise</h2>
            <div>
                <ul>
                    {colors.map(color => (
                        <li>{color}</li>
                    ))}
                </ul>
            </div>
        </>
    )
}

export default ArraysEx;