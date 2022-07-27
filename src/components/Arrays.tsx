import { useState } from 'react';
import '../App.css';
import { nanoid } from 'nanoid';

interface Pet {
    name: string;
    type: string;
    id: string;
}

function ArraysEx() {
    const [colors, setColors] = useState(['red', 'orange', 'yellow']); 
    const [pets, setPets] = useState([
        {name: 'Smudge', type: 'cat', id: nanoid(5)},
        {name: 'Pudge', type: 'cat', id: nanoid(5)},
        {name: 'Smaug', type: 'fish', id: nanoid(5)}
    ])

    function addColor(color: string): void {
        setColors([...colors, color]);
    }


    return (
        <>
            <h1>Arrays Exercise</h1>
            <div>
                <h2>Colors</h2>
                <ul>
                    {colors.map(color => (
                        <li>{color}</li>
                    ))}
                </ul>
                <button onClick={() => addColor('green')}>Add Green</button>
                <button onClick={() => addColor('blue')}>Add Blue</button>
                <button onClick={() => addColor('violet')}>Add Violet</button>
            </div>

            <div>
                <h2>Pets</h2>
                <table>
                    <tr>
                        <th>Name</th>
                        <th>Type</th>
                    </tr>
                    {pets.map((pet) => (
                        <tr>
                            <td key={pet.id}>{pet.name}</td>
                            <td key={pet.id}>{pet.type}</td>
                        </tr>
                    ))}
                </table>
            </div>
        </>
    )
}

export default ArraysEx;