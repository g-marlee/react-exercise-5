import { useState } from 'react';
import '../App.css';
import { nanoid } from 'nanoid';



function ArraysEx() {
    interface Pet {
        name: string;
        type: string;
        id: string;
    }

    const [colors, setColors] = useState(['red', 'orange', 'yellow']); 
    const [pets, setPets] = useState<Pet[]>([
        {name: 'Smudge', type: 'cat', id: nanoid(5)},
        {name: 'Pudge', type: 'cat', id: nanoid(5)},
        {name: 'Smaug', type: 'fish', id: nanoid(5)}
    ])

    function addColor(color: string): void {
        setColors([...colors, color]);
    }

    const removePet = (i: number) => {
        setPets(prev => [...prev.slice(0, i), ...prev.slice(i + 1)])
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
                        <th>Action</th>
                    </tr>
                    {pets.map((pet, i) => (
                        <tr key={pet.id}>
                            <td key={pet.id}>{pet.name}</td>
                            <td key={pet.id}>{pet.type}</td>
                            <td key={pet.id}><button onClick={() => removePet(i)}>Delete</button></td>
                        </tr>
                    ))}
                </table>
            </div>
        </>
    )
}

export default ArraysEx;